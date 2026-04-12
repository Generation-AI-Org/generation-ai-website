export function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dot Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Gradient Overlay from center */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />

      {/* Radial gradient for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, var(--accent-soft) 0%, transparent 60%)',
        }}
      />
    </div>
  );
}

export function GridBackgroundLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Line Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Accent glow at top */}
      <div
        className="absolute inset-x-0 top-0 h-[500px]"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, var(--accent-glow) 0%, transparent 70%)',
        }}
      />

      {/* Fade to background at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-bg to-transparent" />
    </div>
  );
}
