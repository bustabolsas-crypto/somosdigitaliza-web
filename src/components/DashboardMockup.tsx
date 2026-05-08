import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const statuses = ['Confirmada','Pendiente','Atendida']
const statusColors: Record<string,string> = {
  'Confirmada': '#25D366',
  'Pendiente':  '#D4AF37',
  'Atendida':   '#0fb989',
}
const clients = [
  { name: 'María García',  time: '10:00 AM' },
  { name: 'Roberto Díaz',  time: '11:30 AM' },
  { name: 'Ana López',     time: '2:00 PM'  },
  { name: 'Carlos Ruiz',   time: '4:00 PM'  },
]
const citas = [
  { time: '10:00 AM', name: 'María García',  status: 'Atendida',   color: '#0fb989' },
  { time: '11:30 AM', name: 'Roberto Díaz',  status: 'Atendida',   color: '#0fb989' },
  { time: '2:00 PM',  name: 'Ana López',     status: 'Confirmada', color: '#25D366' },
  { time: '4:00 PM',  name: 'Carlos Ruiz',   status: 'Pendiente',  color: '#D4AF37' },
]
const barData = [18, 31, 24, 40, 36, 52, 47]
const barDays = ['L','M','X','J','V','S','D']

const tabs = ['Dashboard', 'Citas']
const tabUrls = ['app.digitaliza.mx/dashboard', 'app.digitaliza.mx/citas']

export default function DashboardMockup() {
  const [states, setStates] = useState([0, 1, 2, 0])
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStates(prev => prev.map(s => (s + 1) % 3))
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  const barMax = Math.max(...barData)

  return (
    <div className="w-full max-w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Mockup box — fixed height so content never overflows */}
      <div className="w-full max-w-full dashboard-mockup-root"
        style={{ background: '#0d1117', borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)', height: 420, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

        {/* Browser bar */}
        <div style={{ background: '#1a1f2e', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, minWidth: 0, flexShrink: 0 }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', flexShrink: 0 }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e', flexShrink: 0 }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840', flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0, background: 'rgba(255,255,255,0.06)', borderRadius: 6, height: 22, marginLeft: 8, display: 'flex', alignItems: 'center', paddingLeft: 10, overflow: 'hidden' }}>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{tabUrls[activeTab]}</span>
          </div>
        </div>

        {/* Body */}
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <AnimatePresence mode="wait">
            <motion.div key={activeTab}
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              style={{ padding: '14px 16px', height: '100%', overflow: 'hidden' }}>

              {activeTab === 0 && (
                <>
                  {/* Stats — 3 cards */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, marginBottom: 12, minWidth: 0 }}>
                    {[
                      { label: 'ATENDIDOS', val: '47',   color: '#0fb989' },
                      { label: 'CITAS HOY', val: '12',   color: '#D4AF37' },
                      { label: 'INGRESOS',  val: '$8.4k', color: '#f5f5f5' },
                    ].map(s => (
                      <div key={s.label} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: '8px 10px', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', marginBottom: 5 }}>{s.label}</div>
                        <div style={{ fontSize: 20, fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.val}</div>
                      </div>
                    ))}
                  </div>

                  {/* Mini bar chart — mensajes esta semana */}
                  <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 10, padding: '10px 12px', marginBottom: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                      <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', fontWeight: 600, letterSpacing: '0.06em' }}>MENSAJES ESTA SEMANA</span>
                      <span style={{ fontSize: 10, color: '#0fb989', fontWeight: 700 }}>248 total</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 36 }}>
                      {barData.map((v, i) => (
                        <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, height: '100%', justifyContent: 'flex-end' }}>
                          <div style={{ width: '100%', borderRadius: 3, background: i === 6 ? '#0fb989' : 'rgba(15,185,137,0.35)', height: `${(v / barMax) * 100}%` }} />
                          <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.3)', lineHeight: 1 }}>{barDays[i]}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 12 }}>
                    {[
                      { label: 'Tasa respuesta', val: '94%', color: '#25D366', pct: 94 },
                      { label: 'Satisfacción',   val: '4.9 / 5', color: '#60a5fa', pct: 98 },
                    ].map(m => (
                      <div key={m.label} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 10, padding: '8px 10px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                          <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)' }}>{m.label}</span>
                          <span style={{ fontSize: 9, fontWeight: 700, color: m.color }}>{m.val}</span>
                        </div>
                        <div style={{ height: 3, background: 'rgba(255,255,255,0.08)', borderRadius: 9999 }}>
                          <div style={{ height: '100%', width: `${m.pct}%`, background: m.color, borderRadius: 9999 }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Client list */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    {clients.map((c, i) => (
                      <div key={c.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, padding: '7px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: 8, border: '1px solid rgba(255,255,255,0.05)', minWidth: 0 }}>
                        <div style={{ minWidth: 0, flex: 1 }}>
                          <div style={{ fontSize: 12, fontWeight: 600, color: '#e9edef', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</div>
                          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>{c.time}</div>
                        </div>
                        <AnimatePresence mode="wait">
                          <motion.span key={states[i]}
                            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                            style={{ fontSize: 10, fontWeight: 700, color: statusColors[statuses[states[i]]], background: statusColors[statuses[states[i]]] + '22', padding: '3px 8px', borderRadius: 100, flexShrink: 0, whiteSpace: 'nowrap' }}>
                            {statuses[states[i]]}
                          </motion.span>
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {activeTab === 1 && (
                <>
                  <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Hoy — Jueves 8 Mayo</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {citas.map(c => (
                      <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ width: 3, height: 32, borderRadius: 9999, background: c.color, flexShrink: 0 }} />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: 13, fontWeight: 600, color: '#e9edef', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</div>
                          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{c.time}</div>
                        </div>
                        <span style={{ fontSize: 11, fontWeight: 700, color: c.color, background: c.color + '22', padding: '4px 10px', borderRadius: 100, flexShrink: 0, whiteSpace: 'nowrap' }}>{c.status}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Tab switcher */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 14 }}>
        {tabs.map((tab, i) => (
          <button key={tab} onClick={() => setActiveTab(i)}
            style={{
              padding: '8px 20px',
              borderRadius: 9999,
              border: 'none',
              cursor: 'pointer',
              fontSize: 12,
              fontWeight: 600,
              background: activeTab === i ? '#0b1120' : 'rgba(15,23,42,0.06)',
              color: activeTab === i ? '#ffffff' : '#64748b',
              transition: 'background 0.2s, color 0.2s',
              letterSpacing: '-0.01em',
            }}>
            {tab}
          </button>
        ))}
      </div>
    </div>
  )
}
