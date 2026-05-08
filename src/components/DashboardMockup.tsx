import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const statuses = ['Confirmada','Pendiente','Atendida']
const statusColors: Record<string,string> = {
  'Confirmada': '#25D366',
  'Pendiente': '#D4AF37',
  'Atendida': '#0fb989',
}
const clients = [
  { name: 'María García', time: '10:00 AM' },
  { name: 'Roberto Díaz', time: '11:30 AM' },
  { name: 'Ana López', time: '2:00 PM' },
  { name: 'Carlos Ruiz', time: '4:00 PM' },
]

export default function DashboardMockup() {
  const [states, setStates] = useState([0, 1, 2, 0])

  useEffect(() => {
    const interval = setInterval(() => {
      setStates(prev => prev.map(s => (s + 1) % 3))
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ background: '#0d1117', borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden', fontFamily: 'Inter, sans-serif' }}>
      {/* Browser bar */}
      <div style={{ background: '#1a1f2e', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
        <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 6, height: 22, marginLeft: 8, display: 'flex', alignItems: 'center', paddingLeft: 10 }}>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>app.digitaliza.mx/dashboard</span>
        </div>
      </div>
      {/* Dashboard body */}
      <div style={{ padding: '20px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 20 }}>
          {[{label:'ATENDIDOS',val:'47',color:'#0fb989'},{label:'CITAS',val:'12',color:'#D4AF37'},{label:'INGRESOS',val:'$8.4k',color:'#f5f5f5'}].map(s => (
            <div key={s.label} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: '12px 14px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', marginBottom: 6 }}>{s.label}</div>
              <div style={{ fontSize: 24, fontWeight: 800, color: s.color }}>{s.val}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {clients.map((c, i) => (
            <div key={c.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.05)' }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#e9edef' }}>{c.name}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{c.time}</div>
              </div>
              <AnimatePresence mode="wait">
                <motion.span key={states[i]}
                  initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                  style={{ fontSize: 11, fontWeight: 700, color: statusColors[statuses[states[i]]], background: statusColors[statuses[states[i]]] + '22', padding: '4px 10px', borderRadius: 100 }}>
                  {statuses[states[i]]}
                </motion.span>
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
