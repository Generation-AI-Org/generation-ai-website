'use client'

import { useEffect, useRef } from 'react'

interface DotGridGlowProps {
  /** Gap between dots in pixels */
  gap?: number
  /** Base dot size */
  dotSize?: number
  /** Mouse influence radius */
  glowRadius?: number
  /** Additional class names */
  className?: string
}

export function DotGridGlow({
  gap = 40,
  dotSize = 1.5,
  glowRadius = 200,
  className = '',
}: DotGridGlowProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * window.devicePixelRatio
      canvas.height = height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // Get CSS variable colors
      const computedStyle = getComputedStyle(document.documentElement)
      const accentColor = computedStyle.getPropertyValue('--accent').trim() || '#CEFF32'
      const textMuted = computedStyle.getPropertyValue('--text-muted').trim() || '#666666'

      const mouse = mouseRef.current
      const cols = Math.ceil(width / gap) + 1
      const rows = Math.ceil(height / gap) + 1
      const offsetX = (width % gap) / 2
      const offsetY = (height % gap) / 2

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = offsetX + i * gap
          const y = offsetY + j * gap

          // Calculate distance from mouse
          const dx = x - mouse.x
          const dy = y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          // Calculate glow intensity (0 to 1)
          const intensity = Math.max(0, 1 - dist / glowRadius)

          // Interpolate size and color based on intensity
          const size = dotSize + intensity * dotSize * 2
          const alpha = 0.15 + intensity * 0.85

          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)

          if (intensity > 0) {
            // Glowing dot near mouse
            ctx.fillStyle = accentColor
            ctx.globalAlpha = alpha

            // Add subtle glow
            if (intensity > 0.3) {
              ctx.shadowColor = accentColor
              ctx.shadowBlur = 10 * intensity
            }
          } else {
            // Base dot
            ctx.fillStyle = textMuted
            ctx.globalAlpha = 0.2
            ctx.shadowBlur = 0
          }

          ctx.fill()
          ctx.globalAlpha = 1
          ctx.shadowBlur = 0
        }
      }

      animationRef.current = requestAnimationFrame(draw)
    }

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

    resize()
    window.addEventListener('resize', resize)
    // Track mouse globally so it works even over content
    window.addEventListener('mousemove', handleMouseMove)
    animationRef.current = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [gap, dotSize, glowRadius])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  )
}
