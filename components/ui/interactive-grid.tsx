'use client'

import { useEffect, useRef, useCallback } from 'react'

interface Point {
  x: number
  y: number
  vx: number
  vy: number
  originX: number
  originY: number
}

interface InteractiveGridProps {
  /** Number of dots in the grid */
  dotCount?: number
  /** Maximum connection distance between dots */
  connectionDistance?: number
  /** Mouse influence radius */
  mouseRadius?: number
  /** Dot size in pixels */
  dotSize?: number
  /** Animation speed multiplier */
  speed?: number
  /** Additional class names */
  className?: string
}

export function InteractiveGrid({
  dotCount = 80,
  connectionDistance = 120,
  mouseRadius = 150,
  dotSize = 2,
  speed = 0.3,
  className = '',
}: InteractiveGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointsRef = useRef<Point[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animationRef = useRef<number>()

  const initPoints = useCallback((width: number, height: number) => {
    const points: Point[] = []
    for (let i = 0; i < dotCount; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      points.push({
        x,
        y,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        originX: x,
        originY: y,
      })
    }
    pointsRef.current = points
  }, [dotCount, speed])

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const { width, height } = canvas
    const points = pointsRef.current
    const mouse = mouseRef.current

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Get CSS variable colors
    const computedStyle = getComputedStyle(document.documentElement)
    const accentColor = computedStyle.getPropertyValue('--accent').trim() || '#CEFF32'
    const textColor = computedStyle.getPropertyValue('--text').trim() || '#F6F6F6'

    // Update and draw points
    points.forEach((point, i) => {
      // Mouse repulsion
      const dx = point.x - mouse.x
      const dy = point.y - mouse.y
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < mouseRadius) {
        const force = (mouseRadius - dist) / mouseRadius
        point.vx += (dx / dist) * force * 0.5
        point.vy += (dy / dist) * force * 0.5
      }

      // Return to origin (subtle spring)
      point.vx += (point.originX - point.x) * 0.001
      point.vy += (point.originY - point.y) * 0.001

      // Apply velocity with damping
      point.x += point.vx
      point.y += point.vy
      point.vx *= 0.98
      point.vy *= 0.98

      // Bounce off edges
      if (point.x < 0 || point.x > width) {
        point.vx *= -1
        point.x = Math.max(0, Math.min(width, point.x))
      }
      if (point.y < 0 || point.y > height) {
        point.vy *= -1
        point.y = Math.max(0, Math.min(height, point.y))
      }

      // Draw connections to nearby points
      for (let j = i + 1; j < points.length; j++) {
        const other = points[j]
        const cdx = point.x - other.x
        const cdy = point.y - other.y
        const cdist = Math.sqrt(cdx * cdx + cdy * cdy)

        if (cdist < connectionDistance) {
          const opacity = 1 - cdist / connectionDistance
          ctx.beginPath()
          ctx.moveTo(point.x, point.y)
          ctx.lineTo(other.x, other.y)
          ctx.strokeStyle = `${accentColor}${Math.floor(opacity * 40).toString(16).padStart(2, '0')}`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      // Draw point
      const isNearMouse = dist < mouseRadius
      ctx.beginPath()
      ctx.arc(point.x, point.y, isNearMouse ? dotSize * 1.5 : dotSize, 0, Math.PI * 2)
      ctx.fillStyle = isNearMouse ? accentColor : `${textColor}60`
      ctx.fill()
    })

    animationRef.current = requestAnimationFrame(draw)
  }, [connectionDistance, mouseRadius, dotSize])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect
        canvas.width = width
        canvas.height = height
        initPoints(width, height)
      }
    })

    resizeObserver.observe(canvas.parentElement || canvas)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    // Start animation
    animationRef.current = requestAnimationFrame(draw)

    return () => {
      resizeObserver.disconnect()
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [initPoints, draw])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`}
    />
  )
}
