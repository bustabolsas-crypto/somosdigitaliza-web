import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function parseValue(v: string): { num: number; prefix: string; suffix: string } {
  const match = v.match(/^([^0-9]*)([0-9,]+)([^0-9]*)$/)
  if (!match) return { num: 0, prefix: '', suffix: v }
  return { num: parseInt(match[2].replace(/,/g, '')), prefix: match[1], suffix: match[3] }
}

export default function CountUp({ value, duration = 2000 }: { value: string; duration?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState('0')
  const { num, prefix, suffix } = parseValue(value)

  useEffect(() => {
    if (!inView) return
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * num)
      setDisplay(current.toLocaleString())
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, num, duration])

  return <span ref={ref}>{prefix}{display}{suffix}</span>
}
