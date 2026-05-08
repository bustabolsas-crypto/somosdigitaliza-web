import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check, Mail, ListTodo, FileText, LayoutDashboard, MessageCircle, Link2, FileStack, Calendar } from 'lucide-react'
import Navbar from '../components/Navbar'
import SectionLabel from '../components/SectionLabel'
import FadeUp from '../components/FadeUp'

const WA = 'https://wa.me/5219992697401'

const C = {
  navy:    '#0b1120',
  ink:     '#0f172a',
  muted:   '#64748b',
  accent:  '#2563eb',
  accentH: '#1d4ed8',
  surface: '#f8fafc',
  border:  'rgba(15,23,42,0.1)',
}

const secInner: React.CSSProperties = {
  maxWidth: 1280,
  margin: '0 auto',
  padding: '96px 48px',
}

const h2: React.CSSProperties = {
  fontSize: 'clamp(2rem, 4vw, 3.2rem)',
  fontWeight: 800,
  lineHeight: 1.05,
  letterSpacing: '-0.03em',
  color: C.navy,
  margin: 0,
}

const btnPrimary = (extra: React.CSSProperties = {}): React.CSSProperties => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  background: C.accent,
  color: '#ffffff',
  borderRadius: 0,
  padding: '13px 28px',
  fontSize: 14,
  fontWeight: 600,
  textDecoration: 'none',
  border: 'none',
  transition: 'background 0.2s',
  cursor: 'pointer',
  ...extra,
})

export default function Profesional() {
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section style={{ background: C.navy }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '140px 48px 96px' }}>
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ marginBottom: 24 }}>
            <Link to="/"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: 13, fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}>
              <ArrowLeft size={13} /> Volver al inicio
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
            style={{ marginBottom: 20 }}>
            <span className="mono" style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.14em', color: C.accent, textTransform: 'uppercase' }}>
              PAQUETE PROFESIONAL · DIGITALIZA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#ffffff', margin: '0 0 24px', maxWidth: 720 }}>
            Tu trabajo en la mitad del tiempo.{' '}
            <span className="serif" style={{ color: C.accent }}>Sin cambiar de empleo.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: 520, margin: '0 0 40px' }}>
            Si eres empleado, freelancer o profesional independiente y sientes que el día no te alcanza, esto es para ti. Construimos una app personalizada adaptada 100% a tu trabajo.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}>
            <a href={WA} target="_blank" rel="noreferrer"
              style={btnPrimary({ padding: '14px 32px', fontSize: 15 })}
              onMouseEnter={e => (e.currentTarget.style.background = C.accentH)}
              onMouseLeave={e => (e.currentTarget.style.background = C.accent)}>
              Hablar con nosotros →
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── QUÉ INCLUYE ─────────────────────────────────────────────── */}
      <section style={{ background: '#ffffff' }}>
        <div style={{ ...secInner, borderTop: `1px solid ${C.border}` }}>
          <FadeUp>
            <SectionLabel text="01 / QUÉ INCLUYE" />
            <h2 style={{ ...h2, marginBottom: 56 }}>Tu app, construida para tu trabajo exacto.</h2>
          </FadeUp>
          <div style={{ borderTop: `1px solid ${C.border}` }}>
            {[
              { icon: <Mail size={18} strokeWidth={1.5} />, title: 'Comunicación automatizada', desc: 'Redacción automática de correos, respuestas predefinidas, recordatorios de seguimiento.' },
              { icon: <ListTodo size={18} strokeWidth={1.5} />, title: 'Organización de tareas con IA', desc: 'Lista priorizada automáticamente, modo urgente, panel visual.' },
              { icon: <FileText size={18} strokeWidth={1.5} />, title: 'Reportes y documentos', desc: 'Reportes semanales automáticos, resúmenes ejecutivos en segundos.' },
              { icon: <LayoutDashboard size={18} strokeWidth={1.5} />, title: 'Dashboard personal', desc: 'Tu centro de mando: tareas, correos, reuniones de un vistazo.' },
              { icon: <MessageCircle size={18} strokeWidth={1.5} />, title: 'Asistente por WhatsApp', desc: 'Habla con tu asistente desde tu WhatsApp, 24/7.' },
              { icon: <Link2 size={18} strokeWidth={1.5} />, title: 'Integraciones', desc: 'WhatsApp, Gmail, Outlook, Drive, Calendar, Sheets.' },
              { icon: <FileStack size={18} strokeWidth={1.5} />, title: 'Plantillas por industria', desc: 'Vendedores, administrativos, contadores, coordinadores.' },
              { icon: <Calendar size={18} strokeWidth={1.5} />, title: 'Seguimiento de reuniones', desc: 'Resúmenes automáticos, recordatorios, agenda de seguimientos.' },
            ].map((s, i) => (
              <FadeUp key={i} delay={i * 0.04}>
                <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr 1fr', gap: 32, padding: '28px 0', borderBottom: `1px solid ${C.border}`, alignItems: 'center', transition: 'background 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.background = C.surface)}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                  <span style={{ color: C.muted }}>{s.icon}</span>
                  <span style={{ fontWeight: 700, fontSize: 14, color: C.navy, letterSpacing: '-0.01em' }}>{s.title}</span>
                  <span style={{ fontSize: 13, color: C.muted, lineHeight: 1.6 }}>{s.desc}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN / LO QUE GANAS ───────────────────────────────── */}
      <section style={{ background: C.surface }}>
        <div style={{ ...secInner, borderTop: `1px solid ${C.border}` }}>
          <FadeUp>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="two-col">
              <div>
                <SectionLabel text="02 / PARA QUIÉN ES" />
                <h2 style={{ ...h2, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: 32 }}>¿Eres tú?</h2>
                <div style={{ borderTop: `1px solid ${C.border}` }}>
                  {[
                    'Asistentes administrativos con tareas repetitivas',
                    'Vendedores que manejan muchos seguimientos',
                    'Contadores y analistas que generan reportes',
                    'Coordinadores que gestionan equipos',
                    'Freelancers que quieren escalar sin contratar',
                    'Cualquier profesional con tareas que se repiten',
                  ].map(r => (
                    <div key={r} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 0', borderBottom: `1px solid ${C.border}`, fontSize: '0.9rem', color: C.muted }}>
                      <Check size={13} color={C.accent} style={{ flexShrink: 0 }} /> {r}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <SectionLabel text="LO QUE GANAS" />
                <h2 style={{ ...h2, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: 32 }}>Beneficios reales.</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    { title: 'Recuperas 2-4 horas diarias', desc: 'Tiempo para descansar, estudiar o ganar más.' },
                    { title: 'Te posicionas como el más eficiente', desc: 'Datos reales para negociar aumentos.' },
                    { title: '100% tuya, no genérica', desc: 'Construida según tu trabajo específico.' },
                  ].map(b => (
                    <div key={b.title} style={{ border: `1px solid ${C.border}`, padding: '24px', background: '#ffffff' }}>
                      <div style={{ fontWeight: 700, fontSize: 14, color: C.navy, marginBottom: 6 }}>{b.title}</div>
                      <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.6 }}>{b.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ───────────────────────────────────────────── */}
      <section style={{ background: '#ffffff' }}>
        <div style={{ ...secInner, borderTop: `1px solid ${C.border}` }}>
          <FadeUp>
            <SectionLabel text="03 / CÓMO FUNCIONA" />
            <h2 style={{ ...h2, marginBottom: 56 }}>4 pasos y tu vida cambia.</h2>
          </FadeUp>
          <div style={{ borderTop: `1px solid ${C.border}` }}>
            {[
              { n: '01', title: 'Nos cuentas tu día a día', desc: 'Llamada de 30 min donde entendemos tus tareas, herramientas y puntos de dolor.' },
              { n: '02', title: 'Diseñamos tu app personalizada', desc: 'En 7-10 días. Construida específicamente para tu rol y flujo de trabajo.' },
              { n: '03', title: 'Te entregamos y te enseñamos', desc: 'Sesión de 1 hora donde te mostramos todo y te aseguramos que lo dominas.' },
              { n: '04', title: 'Soporte y ajustes mensuales', desc: 'Tu app evoluciona contigo. A medida que tu trabajo cambia, la actualizamos.' },
            ].map((s, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: 32, padding: '32px 0', borderBottom: `1px solid ${C.border}`, alignItems: 'start' }}>
                  <span className="mono" style={{ fontSize: '0.65rem', color: C.accent, letterSpacing: '0.1em', paddingTop: 4 }}>{s.n}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)', color: C.navy, marginBottom: 8, letterSpacing: '-0.02em' }}>{s.title}</div>
                    <div style={{ fontSize: '0.95rem', color: C.muted, lineHeight: 1.7 }}>{s.desc}</div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ───────────────────────────────────────────────── */}
      <section style={{ background: C.navy }}>
        <div style={{ ...secInner, textAlign: 'center' }}>
          <FadeUp>
            <div style={{ marginBottom: 16 }}>
              <span className="mono" style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
                04 / HABLEMOS
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#ffffff', margin: '0 0 20px' }}>
              ¿Listo para trabajar en modo{' '}
              <span className="serif" style={{ color: C.accent }}>automático?</span>
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.6)', maxWidth: 480, margin: '0 auto 48px', lineHeight: 1.7 }}>
              En 7-10 días tu trabajo cambia para siempre. La tecnología que antes era solo para empresas grandes, ahora es tuya.
            </p>
            <a href={WA} target="_blank" rel="noreferrer"
              style={btnPrimary({ padding: '15px 36px', fontSize: 15 })}
              onMouseEnter={e => (e.currentTarget.style.background = C.accentH)}
              onMouseLeave={e => (e.currentTarget.style.background = C.accent)}>
              Hablar por WhatsApp <ArrowRight size={17} />
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer style={{ borderTop: `1px solid ${C.border}`, padding: '40px 48px 32px', background: '#ffffff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span style={{ fontWeight: 800, fontSize: 15, color: C.navy, letterSpacing: '-0.03em' }}>Digitaliza</span>
          </Link>
          <div className="mono" style={{ color: C.muted, fontSize: 11 }}>© 2026 Digitaliza · Mérida, Yucatán</div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
