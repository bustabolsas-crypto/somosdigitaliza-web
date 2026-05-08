import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Calendar, BarChart2, Megaphone, Send } from 'lucide-react'

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
const iaItems = [
  { icon: <FileText size={14} strokeWidth={1.5}/>, text: 'Genera tu script para hoy',  badge: 'Listo',      badgeBg: 'rgba(34,197,94,0.18)',   badgeColor: '#22c55e' },
  { icon: <Calendar size={14} strokeWidth={1.5}/>, text: '3 citas confirmadas',         badge: 'Hoy',        badgeBg: 'rgba(96,165,250,0.18)',  badgeColor: '#60a5fa' },
  { icon: <BarChart2 size={14} strokeWidth={1.5}/>, text: 'Reporte semanal',            badge: 'Ver →',      badgeBg: 'rgba(255,255,255,0.08)', badgeColor: 'rgba(255,255,255,0.5)' },
  { icon: <Megaphone size={14} strokeWidth={1.5}/>, text: 'Publica a las 7 PM',        badge: 'Pendiente',  badgeBg: 'rgba(245,158,11,0.18)',  badgeColor: '#f59e0b' },
]
const clientesList = [
  { initials: 'MG', avatarBg: '#2563eb', name: 'María García',  last: 'hace 5 min', badge: 'VIP',     badgeColor: '#f59e0b', badgeBg: 'rgba(245,158,11,0.18)'   },
  { initials: 'RD', avatarBg: '#0fb989', name: 'Roberto Díaz',  last: 'hace 1h',    badge: 'Regular', badgeColor: '#94a3b8', badgeBg: 'rgba(148,163,184,0.15)'  },
  { initials: 'AL', avatarBg: '#7c3aed', name: 'Ana López',     last: 'hace 3h',    badge: 'Nuevo',   badgeColor: '#60a5fa', badgeBg: 'rgba(96,165,250,0.18)'   },
  { initials: 'CR', avatarBg: '#475569', name: 'Carlos Ruiz',   last: 'ayer',       badge: 'Regular', badgeColor: '#94a3b8', badgeBg: 'rgba(148,163,184,0.15)'  },
]
const barData = [18, 31, 24, 40, 36, 52, 47]
const barDays = ['L','M','X','J','V','S','D']

const tabs    = ['Métricas', 'Citas', 'Asistente IA', 'Clientes', 'Reportes']
const tabUrls = [
  'app.digitaliza.mx/dashboard',
  'app.digitaliza.mx/citas',
  'app.digitaliza.mx/asistente',
  'app.digitaliza.mx/clientes',
  'app.digitaliza.mx/reportes',
]

function getReply(msg: string) {
  const t = msg.toLowerCase()
  if (t.includes('cita'))     return 'Tienes 3 citas confirmadas para hoy.'
  if (t.includes('reporte'))  return 'Tu reporte semanal está listo. Tasa de respuesta: 94%.'
  if (t.includes('cliente'))  return 'Tienes 47 clientes atendidos este mes.'
  return 'Entendido. Lo reviso y te aviso.'
}

export default function DashboardMockup() {
  const [states, setStates]     = useState([0, 1, 2, 0])
  const [activeTab, setActiveTab] = useState(0)
  const [messages, setMessages] = useState<{from: string; text: string}[]>([])
  const [chatInput, setChatInput] = useState('')
  const chatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setStates(prev => prev.map(s => (s + 1) % 3))
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = () => {
    const text = chatInput.trim()
    if (!text) return
    setChatInput('')
    setMessages(prev => [...prev, { from: 'user', text }])
    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'freddy', text: getReply(text) }])
    }, 1000)
  }

  const barMax = Math.max(...barData)

  const tabBtn = (tab: string, i: number) => (
    <button key={tab} onClick={() => setActiveTab(i)}
      style={{
        padding: '8px 0',
        width: '100%',
        borderRadius: 9999,
        border: 'none',
        cursor: 'pointer',
        fontSize: 12,
        fontWeight: 600,
        whiteSpace: 'nowrap',
        background: activeTab === i ? '#0b1120' : 'rgba(15,23,42,0.06)',
        color: activeTab === i ? '#ffffff' : '#64748b',
        transition: 'background 0.2s, color 0.2s',
        letterSpacing: '-0.01em',
      }}>
      {tab}
    </button>
  )

  return (
    <>
      <style>{`
        .db-tabs-desktop { display: flex; gap: 6px; justify-content: center; }
        .db-tabs-mobile  { display: none; }
        @media (max-width: 768px) {
          .db-tabs-desktop { display: none; }
          .db-tabs-mobile  { display: block; }
        }
        .db-ia-input::placeholder { color: rgba(255,255,255,0.25); }
      `}</style>

      <div style={{ overflowX: 'hidden', width: '100%', maxWidth: '100%', fontFamily: 'Inter, sans-serif' }}>
        {/* Mockup box */}
        <div className="dashboard-mockup-root"
          style={{ background: '#0d1117', borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)', height: 420, display: 'flex', flexDirection: 'column', overflow: 'hidden', width: '100%' }}>

          {/* Browser bar */}
          <div style={{ background: '#1a1f2e', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
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
                style={{ padding: '14px 16px', height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

                {/* ── MÉTRICAS ── */}
                {activeTab === 0 && (
                  <>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, marginBottom: 12 }}>
                      {[
                        { label: 'ATENDIDOS', val: '47',    color: '#0fb989' },
                        { label: 'CITAS HOY', val: '12',    color: '#D4AF37' },
                        { label: 'INGRESOS',  val: '$8.4k', color: '#f5f5f5' },
                      ].map(s => (
                        <div key={s.label} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: '8px 10px', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', marginBottom: 5 }}>{s.label}</div>
                          <div style={{ fontSize: 20, fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.val}</div>
                        </div>
                      ))}
                    </div>
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
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 12 }}>
                      {[
                        { label: 'Tasa respuesta', val: '94%',     color: '#25D366', pct: 94 },
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

                {/* ── CITAS ── */}
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

                {/* ── ASISTENTE IA ── */}
                {activeTab === 2 && (
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minHeight: 0 }}>
                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', background: 'rgba(255,255,255,0.04)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.07)', marginBottom: 10, flexShrink: 0 }}>
                      <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, color: '#fff', flexShrink: 0 }}>DZ</div>
                      <span style={{ flex: 1, fontWeight: 600, fontSize: '0.85rem', color: '#ffffff' }}>Freddy · IA activa</span>
                      <span className="pulse-dot" style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', flexShrink: 0, display: 'inline-block' }} />
                    </div>
                    {/* Items */}
                    <div style={{ flexShrink: 0 }}>
                      {iaItems.map(item => (
                        <div key={item.text} style={{ padding: '9px 12px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: 10 }}>
                          <span style={{ color: '#2563eb', flexShrink: 0 }}>{item.icon}</span>
                          <span style={{ flex: 1, fontSize: '0.82rem', color: '#ffffff', lineHeight: 1.3 }}>{item.text}</span>
                          <span style={{ padding: '2px 8px', borderRadius: 9999, fontSize: '0.68rem', fontWeight: 600, background: item.badgeBg, color: item.badgeColor, flexShrink: 0, whiteSpace: 'nowrap' }}>{item.badge}</span>
                        </div>
                      ))}
                    </div>
                    {/* Separator */}
                    <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', margin: '10px 0 8px', flexShrink: 0 }} />
                    {/* Chat area */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minHeight: 0 }}>
                      {/* Bubbles */}
                      <div ref={chatRef} style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 6, paddingRight: 2, scrollbarWidth: 'none' }}>
                        {messages.length === 0 && (
                          <div style={{ textAlign: 'center', fontSize: 10, color: 'rgba(255,255,255,0.2)', paddingTop: 4 }}>Escríbele algo a Freddy</div>
                        )}
                        {messages.slice(-4).map((m, i) => (
                          <div key={i} style={{ display: 'flex', justifyContent: m.from === 'user' ? 'flex-end' : 'flex-start' }}>
                            <div style={{
                              background: m.from === 'user' ? '#2563eb' : '#1e293b',
                              borderRadius: m.from === 'user' ? '10px 10px 2px 10px' : '10px 10px 10px 2px',
                              padding: '6px 10px',
                              maxWidth: '78%',
                              fontSize: 11,
                              color: '#ffffff',
                              lineHeight: 1.4,
                            }}>
                              {m.text}
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Input bar */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, paddingTop: 8, flexShrink: 0 }}>
                        <input
                          className="db-ia-input"
                          value={chatInput}
                          onChange={e => setChatInput(e.target.value)}
                          onKeyDown={e => e.key === 'Enter' && handleSend()}
                          placeholder="Pregúntale a Freddy..."
                          style={{ flex: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: '6px 12px', fontSize: 11, color: '#ffffff', outline: 'none', minWidth: 0 }}
                        />
                        <button onClick={handleSend}
                          style={{ width: 28, height: 28, borderRadius: '50%', background: '#2563eb', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <Send size={12} color="#fff" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── CLIENTES ── */}
                {activeTab === 3 && (
                  <>
                    <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12, fontFamily: 'monospace' }}>Clientes recientes</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {clientesList.map(c => (
                        <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.05)' }}>
                          <div style={{ width: 34, height: 34, borderRadius: '50%', background: c.avatarBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#fff', flexShrink: 0 }}>
                            {c.initials}
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontSize: 13, fontWeight: 600, color: '#e9edef', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</div>
                            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>Último mensaje: {c.last}</div>
                          </div>
                          <span style={{ fontSize: 10, fontWeight: 700, color: c.badgeColor, background: c.badgeBg, padding: '3px 9px', borderRadius: 100, flexShrink: 0, whiteSpace: 'nowrap' }}>{c.badge}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* ── REPORTES ── */}
                {activeTab === 4 && (
                  <>
                    <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>Resumen semanal</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {[
                        { val: '94%',     label: 'Tasa de respuesta', color: '#25D366', pct: 94 },
                        { val: '4.9 / 5', label: 'Satisfacción',      color: '#60a5fa', pct: 98 },
                        { val: '18s',     label: 'Tiempo promedio',    color: '#0fb989', pct: 72 },
                      ].map(m => (
                        <div key={m.label} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: '14px 16px', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 10 }}>
                            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{m.label}</span>
                            <span style={{ fontSize: 28, fontWeight: 800, color: m.color, lineHeight: 1, letterSpacing: '-0.03em' }}>{m.val}</span>
                          </div>
                          <div style={{ height: 4, background: 'rgba(255,255,255,0.08)', borderRadius: 9999 }}>
                            <div style={{ height: '100%', width: `${m.pct}%`, background: m.color, borderRadius: 9999 }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── TABS — desktop: fila única · mobile: 3+2 grid ── */}
        <div style={{ marginTop: 14 }}>
          {/* Desktop */}
          <div className="db-tabs-desktop">
            {tabs.map((tab, i) => tabBtn(tab, i))}
          </div>
          {/* Mobile */}
          <div className="db-tabs-mobile">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, marginBottom: 6 }}>
              {tabs.slice(0, 3).map((tab, i) => tabBtn(tab, i))}
            </div>
            <div style={{ display: 'flex', gap: 6, justifyContent: 'center' }}>
              {tabs.slice(3).map((tab, i) => (
                <button key={tab} onClick={() => setActiveTab(3 + i)}
                  style={{
                    padding: '8px 24px',
                    borderRadius: 9999,
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: 12,
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    background: activeTab === 3 + i ? '#0b1120' : 'rgba(15,23,42,0.06)',
                    color: activeTab === 3 + i ? '#ffffff' : '#64748b',
                    transition: 'background 0.2s, color 0.2s',
                    letterSpacing: '-0.01em',
                  }}>
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
