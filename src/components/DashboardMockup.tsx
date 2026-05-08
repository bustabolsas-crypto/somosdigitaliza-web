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

const convos = [
  { initials: 'MG', name: 'María García',  last: 'Perfecto, nos vemos entonces', time: '10:32', unread: 0 },
  { initials: 'RD', name: 'Roberto Díaz',  last: '¿Tienen cita mañana a las 11?', time: '9:15',  unread: 1 },
  { initials: 'AL', name: 'Ana López',     last: 'Gracias por confirmar',          time: 'ayer',  unread: 0 },
  { initials: 'CR', name: 'Carlos Ruiz',   last: 'Quiero agendar una cita',        time: 'ayer',  unread: 2 },
]

const citas = [
  { time: '10:00 AM', name: 'María García',  status: 'Atendida',   color: '#0fb989' },
  { time: '11:30 AM', name: 'Roberto Díaz',  status: 'Atendida',   color: '#0fb989' },
  { time: '2:00 PM',  name: 'Ana López',     status: 'Confirmada', color: '#25D366' },
  { time: '4:00 PM',  name: 'Carlos Ruiz',   status: 'Pendiente',  color: '#D4AF37' },
]

const tabs = ['Dashboard', 'Conversaciones', 'Citas']
const tabUrls = ['app.digitaliza.mx/dashboard', 'app.digitaliza.mx/chats', 'app.digitaliza.mx/citas']

export default function DashboardMockup() {
  const [states, setStates] = useState([0, 1, 2, 0])
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStates(prev => prev.map(s => (s + 1) % 3))
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Mockup box */}
      <div className="w-full max-w-full overflow-hidden dashboard-mockup-root"
        style={{ background: '#0d1117', borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)', minHeight: 420 }}>
        {/* Browser bar */}
        <div style={{ background: '#1a1f2e', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', flexShrink: 0 }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e', flexShrink: 0 }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840', flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0, background: 'rgba(255,255,255,0.06)', borderRadius: 6, height: 22, marginLeft: 8, display: 'flex', alignItems: 'center', paddingLeft: 10, overflow: 'hidden' }}>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{tabUrls[activeTab]}</span>
          </div>
        </div>

        {/* Body — animated tab switch */}
        <AnimatePresence mode="wait">
          <motion.div key={activeTab}
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            style={{ padding: '20px' }}>

            {activeTab === 0 && (
              <>
                {/* Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 20, minWidth: 0 }}>
                  {[{label:'ATENDIDOS',val:'47',color:'#0fb989'},{label:'CITAS',val:'12',color:'#D4AF37'},{label:'INGRESOS',val:'$8.4k',color:'#f5f5f5'}].map(s => (
                    <div key={s.label} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: '12px 14px', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', marginBottom: 6 }}>{s.label}</div>
                      <div style={{ fontSize: 24, fontWeight: 800, color: s.color }}>{s.val}</div>
                    </div>
                  ))}
                </div>
                {/* Client list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {clients.map((c, i) => (
                    <div key={c.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, padding: '10px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.05)', minWidth: 0 }}>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div style={{ fontSize: 13, fontWeight: 600, color: '#e9edef', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</div>
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{c.time}</div>
                      </div>
                      <AnimatePresence mode="wait">
                        <motion.span key={states[i]}
                          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                          style={{ fontSize: 11, fontWeight: 700, color: statusColors[statuses[states[i]]], background: statusColors[statuses[states[i]]] + '22', padding: '4px 10px', borderRadius: 100, flexShrink: 0, whiteSpace: 'nowrap' }}>
                          {statuses[states[i]]}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {convos.map(c => (
                  <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 8px', borderRadius: 10, background: 'rgba(255,255,255,0.02)', cursor: 'default' }}>
                    <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#25D36622', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#25D366', flexShrink: 0 }}>{c.initials}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
                        <span style={{ fontSize: 13, fontWeight: 600, color: '#e9edef', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</span>
                        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', flexShrink: 0, marginLeft: 8 }}>{c.time}</span>
                      </div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.last}</div>
                    </div>
                    {c.unread > 0 && (
                      <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: '#fff', flexShrink: 0 }}>{c.unread}</div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 2 && (
              <>
                <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>Hoy — Jueves 8 Mayo</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {citas.map(c => (
                    <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ width: 3, height: 36, borderRadius: 9999, background: c.color, flexShrink: 0 }} />
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

      {/* Tab switcher */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 16 }}>
        {tabs.map((tab, i) => (
          <button key={tab} onClick={() => setActiveTab(i)}
            style={{
              padding: '8px 18px',
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
