import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  MessageCircle, Zap, Link2, BarChart3, Gift, ClipboardCheck,
  Star, RotateCcw, Sparkles, Check, ArrowRight,
  Calendar, FileText, Globe, Briefcase,
  BarChart2, Megaphone, Wifi, BatteryMedium,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import WhatsAppChat from '../components/WhatsAppChat'
import SectionLabel from '../components/SectionLabel'
import FadeUp from '../components/FadeUp'
import CountUp from '../components/CountUp'
import DemoChat from '../components/DemoChat'
import DashboardMockup from '../components/DashboardMockup'

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

const secWrap = (bg = '#ffffff'): React.CSSProperties => ({
  background: bg,
})

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
  ...extra,
})

export default function Home() {
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <Navbar />

      {/* ── HERO — SPLIT ──────────────────────────────────────────────── */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '100vh' }} className="hero-split">

        {/* ← Izquierda: navy */}
        <div style={{ background: C.navy, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '120px 64px 80px' }}>

          {/* Badge MÉRIDA */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block', flexShrink: 0 }} />
            <span className="mono" style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.14em', color: '#22c55e', textTransform: 'uppercase' }}>
              MÉRIDA · YUCATÁN
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#ffffff', margin: '0 0 24px' }}>
            Tu negocio responde clientes mientras tú{' '}
            <span className="serif" style={{ color: C.accent }}>duermes.</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: 440, margin: '0 0 40px' }}>
            No es magia. Construimos asistentes que responden tu WhatsApp, agendan citas, envían reportes y recuperan clientes — 24/7, sin descanso.
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}
            style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <a href={WA} target="_blank" rel="noreferrer"
              style={btnPrimary({ padding: '14px 32px', fontSize: 15 })}
              onMouseEnter={e => (e.currentTarget.style.background = C.accentH)}
              onMouseLeave={e => (e.currentTarget.style.background = C.accent)}>
              Hablar con nosotros →
            </a>
            <a href="#demo"
              style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.85)', borderRadius: 0, padding: '14px 24px', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.8)'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'rgba(255,255,255,0.85)' }}>
              Ver cómo funciona
            </a>
          </motion.div>
        </div>

        {/* → Derecha: white + mockup */}
        <div style={{ background: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '120px 48px 80px', gap: 40 }}>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: '100%', maxWidth: 320 }}>
            <WhatsAppChat />
          </motion.div>

          {/* Métricas bajo el mockup */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="hero-metrics"
            style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            {[
              { val: '< 3 seg', label: 'respuesta' },
              { val: '24/7', label: 'disponible' },
              { val: '+200', label: 'negocios' },
            ].map((b, i) => (
              <div key={b.val} style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
                {i > 0 && <div style={{ width: 1, height: 28, background: C.border, flexShrink: 0, marginLeft: -32 }} />}
                <div style={{ textAlign: 'center' }}>
                  <div className="mono" style={{ fontSize: '0.9rem', fontWeight: 700, color: C.navy, letterSpacing: '-0.02em' }}>{b.val}</div>
                  <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>{b.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── QUIÉNES SOMOS ─────────────────────────────────────────────── */}
      <section id="nosotros" style={secWrap()}>
        <div style={{ ...secInner, borderTop: `1px solid ${C.border}` }}>
          <FadeUp>
            <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 80, alignItems: 'start' }} className="two-col">
              <div>
                <SectionLabel text="01 / QUIÉNES SOMOS" />
                <h2 style={{ ...h2, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                  Traemos a México la tecnología que el mundo ya{' '}
                  <span className="serif" style={{ color: C.accent }}>probó.</span>
                </h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <p style={{ fontSize: '1.0625rem', color: C.muted, lineHeight: 1.75, margin: 0 }}>
                  Las grandes cadenas responden en segundos, agendan automático y dan seguimiento sin parar. Esa misma tecnología debería estar al alcance de cualquier negocio que esté dispuesto a apostar por crecer.
                </p>
                <p style={{ fontSize: '1.0625rem', color: C.muted, lineHeight: 1.75, margin: 0 }}>
                  Construimos directo. Sin agencias intermedias, sin paquetes inflados, sin promesas tibias. Tomamos lo que ya funciona en empresas grandes, lo adaptamos a tu operación y nos quedamos contigo hasta que quede impecable.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────────── */}
      <section style={secWrap(C.surface)}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 48px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }} className="stats-grid">
          {[
            { big: 'Mérida',   small: 'Yucatán, MX' },
            { big: '24/7',     small: 'tu negocio responde' },
            { big: '7-10 días',small: 'puesta en marcha' },
            { big: 'WhatsApp', small: 'trato directo con fundadores' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '0 24px', borderLeft: i > 0 ? `1px solid ${C.border}` : 'none' }}>
              <div className="mono" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.4rem)', fontWeight: 700, color: C.navy, letterSpacing: '-0.03em', marginBottom: 8 }}>{s.big}</div>
              <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.4 }}>{s.small}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MÉTRICAS ──────────────────────────────────────────────────── */}
      <section style={secWrap()}>
        <div style={secInner}>
          <FadeUp>
            <div style={{ display: 'grid', gridTemplateColumns: '4fr 8fr', gap: 64, alignItems: 'start', marginBottom: 72 }} className="two-col">
              <div>
                <SectionLabel text="02 / LO QUE AUTOMATIZAMOS" />
                <h2 style={{ ...h2, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
                  Esto es lo que está pasando en los negocios que ya confiaron.
                </h2>
              </div>
            </div>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }} className="stats-grid">
            {[
              { val: '1,200+', label: 'mensajes respondidos al mes', animate: true },
              { val: '87%',    label: 'citas confirmadas sin intervención', animate: true },
              { val: '18s',    label: 'tiempo promedio de respuesta', animate: true },
              { val: '24/7',   label: 'sin descanso ni vacaciones', animate: false },
            ].map((m, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <div style={{ textAlign: 'center', padding: '0 24px', borderLeft: i > 0 ? `1px solid ${C.border}` : 'none' }}>
                  <div className="mono" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', fontWeight: 700, color: C.navy, letterSpacing: '-0.04em', marginBottom: 12, lineHeight: 1 }}>
                    {m.animate ? <CountUp value={m.val} /> : m.val}
                  </div>
                  <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.55, maxWidth: 160, margin: '0 auto' }}>{m.label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ─────────────────────────────────────────────────── */}
      <section id="servicios" style={secWrap(C.surface)}>
        <div style={secInner}>
          <FadeUp>
            <div style={{ display: 'grid', gridTemplateColumns: '4fr 8fr', gap: 64, alignItems: 'end', marginBottom: 56 }} className="two-col">
              <div>
                <SectionLabel text="03 / LO QUE HACEMOS" />
                <h2 style={{ ...h2, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
                  Más que un chatbot. Un equipo{' '}
                  <span className="serif" style={{ color: C.accent }}>que no duerme.</span>
                </h2>
              </div>
              <p style={{ fontSize: '1.0625rem', color: C.muted, lineHeight: 1.75, margin: 0 }}>
                Una plataforma completa de automatización para que ningún cliente se te escape, sin importar la hora.
              </p>
            </div>
          </FadeUp>

          <div style={{ borderTop: `1px solid ${C.border}` }}>
            {[
              { num: '01', icon: <MessageCircle size={18} strokeWidth={1.5} />, title: 'Recepcionista WhatsApp 24/7', desc: 'Responde consultas, agenda citas, da seguimiento y recupera clientes — como tú lo harías, pero sin horario.' },
              { num: '02', icon: <Zap size={18} strokeWidth={1.5} />, title: 'Respuesta en 18 segundos', desc: 'Antes que el cliente cambie de opinión y le escriba a la competencia.' },
              { num: '03', icon: <Link2 size={18} strokeWidth={1.5} />, title: 'Conecta lo que ya usas', desc: 'WhatsApp, Google Calendar, Sheets, Gmail. Sin cambiar tu operación.' },
              { num: '04', icon: <BarChart3 size={18} strokeWidth={1.5} />, title: 'Reporte semanal automático', desc: 'Cada lunes recibes métricas directas en WhatsApp. Sin abrir dashboards.' },
              { num: '05', icon: <Gift size={18} strokeWidth={1.5} />, title: 'Sistema de puntos y lealtad', desc: 'El cliente acumula, el bot reparte premios. Retención automática.' },
              { num: '06', icon: <ClipboardCheck size={18} strokeWidth={1.5} />, title: 'Seguimiento de cotizaciones', desc: 'Nunca se te olvida un cliente potencial.' },
              { num: '07', icon: <Star size={18} strokeWidth={1.5} />, title: 'Encuesta de satisfacción', desc: 'Alerta automática si hay queja. Actúa antes de que se vaya.' },
              { num: '08', icon: <RotateCcw size={18} strokeWidth={1.5} />, title: 'Reactivación de inactivos', desc: 'Identifica y vuelve a llamar a los que no regresaron.' },
              { num: '09', icon: <Sparkles size={18} strokeWidth={1.5} />, title: 'Generador de contenido', desc: 'Posts y videos según tu negocio y nicho, listos para publicar.' },
            ].map((s, i) => (
              <FadeUp key={i} delay={i * 0.03}>
                <div className="service-row"
                  style={{ display: 'grid', gridTemplateColumns: '56px 1fr 1fr', gap: 32, padding: '24px 0', borderBottom: `1px solid ${C.border}`, alignItems: 'center', transition: 'background 0.2s', borderRadius: 0 }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#ffffff')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                  <span className="mono" style={{ fontSize: '0.65rem', color: 'rgba(15,23,42,0.3)', paddingLeft: 4 }}>{s.num}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ color: C.muted, flexShrink: 0 }}>{s.icon}</span>
                    <span style={{ fontWeight: 700, fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)', color: C.navy, letterSpacing: '-0.02em' }}>{s.title}</span>
                  </div>
                  <div className="service-row-desc" style={{ fontSize: '0.95rem', color: C.muted, lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── APP PERSONALIZADA ─────────────────────────────────────── */}
      <section style={secWrap()}>
        <div style={secInner}>
          <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 80, alignItems: 'center' }} className="two-col">
            <div className="dashboard-col">
              <FadeUp>
                <DashboardMockup />
              </FadeUp>
            </div>
            <FadeUp delay={0.15}>
              <SectionLabel text="04 / APP PROPIA" />
              <h2 style={{ ...h2, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: 16 }}>Tu app, tu marca, tu control.</h2>
              <p style={{ fontSize: '1.0625rem', color: C.muted, lineHeight: 1.75, marginBottom: 32 }}>
                Una app con la identidad de tu negocio donde ves ventas, clientes y conversaciones — y puedes intervenir cuando quieras. Tu asistente conoce tu menú, horarios y precios.
              </p>
              <a href={WA} target="_blank" rel="noreferrer"
                style={btnPrimary()}
                onMouseEnter={e => (e.currentTarget.style.background = C.accentH)}
                onMouseLeave={e => (e.currentTarget.style.background = C.accent)}>
                Quiero mi app <ArrowRight size={15} />
              </a>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── PWA ASISTENTE IA ──────────────────────────────────────── */}
      <section style={secWrap(C.surface)}>
        <div style={{ ...secInner, padding: '80px 48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 80, alignItems: 'center' }} className="two-col">
            <FadeUp>
              <SectionLabel text="05 / ASISTENTE PERSONAL" />
              <h2 style={{ ...h2, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: 16 }}>Tu asistente que cabe en el bolsillo.</h2>
              <p style={{ fontSize: '1.0625rem', color: C.muted, lineHeight: 1.75, marginBottom: 32 }}>
                Una PWA que se instala en tu celular como app nativa. Analiza tu nicho, genera contenido, organiza tu día y te dice exactamente qué hacer para crecer.
              </p>
              <a href={WA} target="_blank" rel="noreferrer"
                style={btnPrimary()}
                onMouseEnter={e => (e.currentTarget.style.background = C.accentH)}
                onMouseLeave={e => (e.currentTarget.style.background = C.accent)}>
                Quiero el asistente <ArrowRight size={15} />
              </a>
            </FadeUp>
            <FadeUp delay={0.15}>
              {/* Widget asistente — phone mockup */}
              <div style={{ maxWidth: 380, margin: '0 auto', borderRadius: 24, overflow: 'hidden', background: C.navy, boxShadow: '0 32px 64px rgba(11,17,32,0.35)' }}>
                {/* Status bar */}
                <div style={{ background: '#060d1a', padding: '6px 20px 4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="mono" style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>9:41</span>
                  <div style={{ display: 'flex', gap: 5, alignItems: 'center', color: 'rgba(255,255,255,0.4)' }}>
                    <Wifi size={10} strokeWidth={2} />
                    <BatteryMedium size={12} strokeWidth={2} />
                  </div>
                </div>
                {/* Header */}
                <div style={{ background: '#1e293b', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: C.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: '#fff', flexShrink: 0 }}>DZ</div>
                  <span style={{ flex: 1, fontWeight: 600, fontSize: '0.9rem', color: '#ffffff', letterSpacing: '-0.01em' }}>Freddy · IA</span>
                  <div className="pulse-dot" style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
                </div>
                {/* Items */}
                {[
                  { icon: <FileText size={16} strokeWidth={1.5} />, text: 'Genera tu script para hoy', badge: 'Listo', badgeBg: 'rgba(34,197,94,0.2)', badgeColor: '#22c55e' },
                  { icon: <Calendar size={16} strokeWidth={1.5} />, text: '3 citas confirmadas', badge: 'Hoy', badgeBg: 'rgba(37,99,235,0.2)', badgeColor: '#60a5fa' },
                  { icon: <BarChart2 size={16} strokeWidth={1.5} />, text: 'Reporte semanal', badge: 'Ver →', badgeBg: 'rgba(255,255,255,0.1)', badgeColor: 'rgba(255,255,255,0.7)' },
                  { icon: <Megaphone size={16} strokeWidth={1.5} />, text: 'Publica a las 7 PM', badge: 'Pendiente', badgeBg: 'rgba(245,158,11,0.2)', badgeColor: '#f59e0b' },
                ].map(({ icon, text, badge, badgeBg, badgeColor }) => (
                  <div key={text} style={{ padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ color: C.accent, flexShrink: 0 }}>{icon}</span>
                    <span style={{ flex: 1, fontSize: '0.9rem', color: '#ffffff', lineHeight: 1.3 }}>{text}</span>
                    <span style={{ padding: '3px 9px', borderRadius: 9999, fontSize: '0.7rem', fontWeight: 600, background: badgeBg, color: badgeColor, flexShrink: 0, whiteSpace: 'nowrap' }}>{badge}</span>
                  </div>
                ))}
                {/* Footer */}
                <div style={{ padding: '12px 20px' }}>
                  <span className="mono" style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)' }}>Última actualización: hace 2 min</span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── ELIGE TU SOLUCIÓN ─────────────────────────────────────── */}
      <section style={secWrap()}>
        <div style={secInner}>
          <FadeUp>
            <div style={{ marginBottom: 56 }}>
              <SectionLabel text="06 / ELIGE TU SOLUCIÓN" />
              <h2 style={h2}>
                Elige tu<br />
                <span className="serif" style={{ color: C.accent }}>solución.</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="two-col">

              {/* Card oscura — Sitios Web */}
              <div className="solution-card-dark"
                style={{ background: C.navy, borderRadius: 20, padding: 40, display: 'flex', flexDirection: 'column', minHeight: 520 }}>
                <div style={{ width: 64, height: 64, borderRadius: 12, background: 'rgba(37,99,235,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                  <Globe size={28} strokeWidth={1.5} color={C.accent} />
                </div>
                <span className="mono" style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.14em', color: '#60a5fa', textTransform: 'uppercase', marginBottom: 12, display: 'block' }}>SITIOS WEB</span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.2, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
                  La primera impresión hoy es tu página web.
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>
                  Sitios rápidos, modernos y bien posicionados que convierten visitas en clientes reales.
                </p>
                <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', margin: '24px 0' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 0 }}>
                  {['Landing page de alto impacto', 'Página corporativa completa', 'Diseño responsive + SEO básico', 'Dominio y hosting incluido el primer año'].map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 0', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
                      <Check size={14} strokeWidth={2} color="#22c55e" style={{ flexShrink: 0 }} /> {item}
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 'auto', paddingTop: 32 }}>
                  <Link to="/sitios-web"
                    style={{ display: 'block', textAlign: 'center', background: C.accent, color: '#ffffff', borderRadius: 12, padding: '14px', fontSize: 14, fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.background = C.accentH)}
                    onMouseLeave={e => (e.currentTarget.style.background = C.accent)}>
                    Conocer sitios web →
                  </Link>
                </div>
              </div>

              {/* Card clara — Paquete Profesional */}
              <div className="solution-card-light"
                style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 20, padding: 40, display: 'flex', flexDirection: 'column', minHeight: 520 }}>
                <div style={{ width: 64, height: 64, borderRadius: 12, background: 'rgba(37,99,235,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                  <Briefcase size={28} strokeWidth={1.5} color={C.accent} />
                </div>
                <span className="mono" style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.14em', color: C.accent, textTransform: 'uppercase', marginBottom: 12, display: 'block' }}>PAQUETE PROFESIONAL</span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: C.ink, lineHeight: 1.2, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
                  Tu trabajo en la mitad del tiempo. Sin cambiar de empleo.
                </h3>
                <p style={{ fontSize: '0.95rem', color: C.muted, lineHeight: 1.7, margin: 0 }}>
                  Automatizamos tu día como profesional: genera contenido, organiza tareas y presenta resultados — todo desde tu celular.
                </p>
                <div style={{ height: 1, background: 'rgba(15,23,42,0.08)', margin: '24px 0' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {['Asistente IA en tu celular como app', 'Genera contenido para tus redes', 'Organiza tu agenda y tareas del día', 'Reportes y seguimiento de clientes'].map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 0', fontSize: '0.9rem', color: C.ink }}>
                      <Check size={14} strokeWidth={2} color={C.accent} style={{ flexShrink: 0 }} /> {item}
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 'auto', paddingTop: 32 }}>
                  <Link to="/profesional"
                    style={{ display: 'block', textAlign: 'center', background: '#ffffff', border: '2px solid #0f172a', color: '#0f172a', borderRadius: 12, padding: '14px', fontSize: 14, fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s, color 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#0f172a'; e.currentTarget.style.color = '#ffffff' }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#0f172a' }}>
                    Conocer Paquete Profesional →
                  </Link>
                </div>
              </div>

            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── DEMO ──────────────────────────────────────────────────── */}
      <section id="demo" style={secWrap(C.surface)}>
        <div style={secInner}>
          <FadeUp>
            <div style={{ display: 'grid', gridTemplateColumns: '4fr 8fr', gap: 64, alignItems: 'start', marginBottom: 56 }} className="two-col">
              <div>
                <SectionLabel text="07 / DEMO EN VIVO" />
                <h2 style={{ ...h2, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>Así se ve en la vida real.</h2>
              </div>
              <p style={{ fontSize: '1.0625rem', color: C.muted, lineHeight: 1.75, margin: 0, alignSelf: 'end' }}>
                Esto es exactamente lo que vería un cliente de tu negocio.
              </p>
            </div>
            <DemoChat />
          </FadeUp>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────── */}
      <section id="contacto" style={secWrap(C.navy)}>
        <div style={{ ...secInner, textAlign: 'center' }}>
          <FadeUp>
            <div style={{ marginBottom: 16 }}>
              <span className="mono" style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
                08 / HABLEMOS
              </span>
            </div>
            <h2 style={{ ...h2, color: '#ffffff', fontSize: 'clamp(2.2rem, 5vw, 4rem)', marginBottom: 20 }}>
              Cada negocio es distinto.{' '}
              <span className="serif" style={{ color: C.accent }}>Hablemos.</span>
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.6)', maxWidth: 480, margin: '0 auto 48px', lineHeight: 1.7 }}>
              Cuéntanos qué necesita tu operación en 5 minutos y te armamos una solución a tu medida.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
              <a href={WA} target="_blank" rel="noreferrer"
                style={btnPrimary({ padding: '15px 36px', fontSize: 15 })}
                onMouseEnter={e => (e.currentTarget.style.background = C.accentH)}
                onMouseLeave={e => (e.currentTarget.style.background = C.accent)}>
                Escríbenos por WhatsApp <ArrowRight size={17} />
              </a>
              <a href={`${WA}?text=Hola,%20quiero%20agendar%20una%20llamada`} target="_blank" rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: 'rgba(255,255,255,0.85)', borderRadius: 0, padding: '15px 36px', fontSize: 15, fontWeight: 500, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)', transition: 'border-color 0.2s, color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = 'rgba(255,255,255,0.85)' }}>
                Agenda una llamada
              </a>
            </div>
            <div style={{ display: 'flex', gap: 40, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Sin permanencia', 'Setup 7-10 días', 'Soporte directo'].map(b => (
                <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>
                  <Check size={13} color={C.accent} /> {b}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────── */}
      <footer style={{ borderTop: `1px solid ${C.border}`, padding: '52px 48px 32px', background: '#ffffff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 32, marginBottom: 40 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <img src="/logo.png" alt="Digitaliza" style={{ height: 26, width: 'auto' }} onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
                <span style={{ fontWeight: 800, fontSize: 16, color: C.navy, letterSpacing: '-0.03em' }}>Digitaliza</span>
              </div>
              <div className="mono" style={{ color: C.muted, fontSize: 11 }}>Mérida, Yucatán · México</div>
            </div>
            <div style={{ display: 'flex', gap: 32 }}>
              {['Nosotros', 'Servicios', 'Demo', 'Contacto'].map(l => (
                <a key={l} href={`#${l.toLowerCase()}`}
                  className="nav-link"
                  style={{ color: C.muted, fontSize: 13, fontWeight: 400, transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = C.navy)}
                  onMouseLeave={e => (e.currentTarget.style.color = C.muted)}>
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div className="mono" style={{ color: C.muted, fontSize: 11 }}>© 2026 Digitaliza · Hecho en Mérida, para negocios reales.</div>
            <div className="mono" style={{ color: C.muted, fontSize: 11 }}>Emilio Bustani · Marcelo Macías</div>
          </div>
        </div>
      </footer>
      <style>{`
        .solution-card-dark { transition: transform 0.3s ease; }
        .solution-card-dark:hover { transform: translateY(-4px); }
        .solution-card-light { transition: transform 0.3s ease, border-color 0.3s ease; }
        .solution-card-light:hover { transform: translateY(-4px); border-color: #2563eb !important; }
        @keyframes pulse-dot { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }
        .pulse-dot { animation: pulse-dot 2s ease-in-out infinite; }
      `}</style>
    </div>
  )
}
