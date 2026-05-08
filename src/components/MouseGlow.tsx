import { useEffect, useRef } from 'react'

export default function MouseGlow() {
  const ref  = useRef<HTMLDivElement>(null)
  const pos  = useRef({ x: -1000, y: -1000 })
  const curr = useRef({ x: -1000, y: -1000 })
  const raf  = useRef<number>(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => { pos.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener('mousemove', onMove, { passive: true })

    const tick = () => {
      curr.current.x += (pos.current.x - curr.current.x) * 0.08
      curr.current.y += (pos.current.y - curr.current.y) * 0.08
      if (ref.current) {
        ref.current.style.transform = `translate(${curr.current.x - 200}px, ${curr.current.y - 200}px)`
      }
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none', overflow: 'hidden' }}>
      <div ref={ref} style={{
        position: 'absolute',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 70%)',
        willChange: 'transform',
      }} />
    </div>
  )
}
