import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  style?: React.CSSProperties
}

export default function FloatingBadge({ children, delay = 0, style }: Props) {
  return (
    <motion.div
      animate={{ y: [0, -7, 0] }}
      transition={{ duration: 4, repeat: Infinity, delay, ease: 'easeInOut' }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        background: 'rgba(15,20,30,0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 10,
        padding: '9px 16px',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.08em',
        color: 'rgba(255,255,255,0.75)',
        whiteSpace: 'nowrap',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
        ...style,
      }}>
      {children}
    </motion.div>
  )
}
