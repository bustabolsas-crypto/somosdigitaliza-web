import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const msgs = [
  { from: 'user', text: '¿Tienen cita disponible mañana a las 4pm?' },
  { from: 'bot',  text: 'Hola! Sí, tengo a las 4:00 y 5:30 PM. ¿Cuál prefieres?' },
  { from: 'user', text: 'Las 4 perfecto' },
  { from: 'bot',  text: 'Confirmada mañana 4:00 PM. Te recuerdo 1h antes.' },
]

function TypingIndicator() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '10px 14px', background: '#1e2428', borderRadius: '12px 12px 12px 2px', width: 'fit-content', alignSelf: 'flex-start' }}>
      {[0, 1, 2].map(i => (
        <motion.div key={i}
          style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.35)' }}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.75, repeat: Infinity, delay: i * 0.15 }} />
      ))}
    </div>
  )
}

export default function WhatsAppChat() {
  const [visible, setVisible] = useState<number[]>([])
  const [typing, setTyping] = useState(false)

  useEffect(() => {
    let cancelled = false
    const run = async () => {
      while (!cancelled) {
        setVisible([])
        setTyping(false)
        await delay(600)
        for (let i = 0; i < msgs.length && !cancelled; i++) {
          if (msgs[i].from === 'bot') {
            setTyping(true)
            await delay(1400)
            if (cancelled) break
            setTyping(false)
          }
          setVisible(v => [...v, i])
          await delay(i === msgs.length - 1 ? 3000 : 1100)
        }
        if (!cancelled) await delay(800)
      }
    }
    run()
    return () => { cancelled = true }
  }, [])

  const now = new Date()
  const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`

  return (
    <div style={{
      borderRadius: 20,
      overflow: 'hidden',
      width: '100%',
      boxShadow: '0 25px 60px rgba(15,23,42,0.15), 0 0 0 1px rgba(15,23,42,0.06)',
    }}>
      {/* Header */}
      <div style={{ background: '#1a2025', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#128C7E', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14, color: '#fff', flexShrink: 0 }}>DZ</div>
        <div>
          <div style={{ fontWeight: 600, fontSize: 15, color: '#ffffff', lineHeight: 1.3 }}>Tu Negocio</div>
          <div style={{ fontSize: 12, color: '#22c55e', display: 'flex', alignItems: 'center', gap: 5, lineHeight: 1 }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
            en línea — IA activa
          </div>
        </div>
      </div>

      {/* Chat body */}
      <div className="chat-body" style={{
        background: '#0d1117',
        padding: 16,
        height: 320,
        overflowY: 'hidden',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}>
        <AnimatePresence>
          {msgs.map((m, i) =>
            visible.includes(i) ? (
              <motion.div key={i}
                initial={{ opacity: 0, x: m.from === 'user' ? 20 : -20, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: m.from === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  background: m.from === 'user' ? '#128C7E' : '#1e2428',
                  borderRadius: m.from === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                  padding: '10px 14px',
                  maxWidth: '78%',
                  fontSize: 14,
                  color: m.from === 'user' ? '#ffffff' : 'rgba(255,255,255,0.9)',
                  lineHeight: 1.45,
                }}>
                  {m.text}
                  <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 3, marginTop: 4 }}>
                    <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11 }}>{time}</span>
                    {m.from === 'bot' && <span style={{ color: '#22c55e', fontSize: 11 }}>leído</span>}
                  </div>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
        {typing && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <TypingIndicator />
          </motion.div>
        )}
      </div>

      {/* Input bar */}
      <div style={{ background: '#1a2025', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 24, padding: '9px 16px', fontSize: 14, color: 'rgba(255,255,255,0.3)' }}>
          Escribe un mensaje
        </div>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#128C7E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path d="M22 2L11 13" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

function delay(ms: number) { return new Promise(r => setTimeout(r, ms)) }
