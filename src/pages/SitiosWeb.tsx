import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, ChevronDown, ChevronUp, Globe, Server, Smartphone, MessageCircle, Shield, Clock, ArrowLeft } from 'lucide-react'
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

const faqs = [
  { q: '¿Y si no me gusta el diseño que hacen?', a: 'Te mostramos el diseño antes de publicar. Tienes 2 rondas de cambios incluidas para ajustarlo a lo que quieres.' },
  { q: '¿Y si quiero cambios después de la entrega?', a: 'Bugs técnicos los primeros 15 días sin costo. Cambios de contenido o diseño se cotizan aparte.' },
  { q: '¿Cómo funciona el pago?', a: '50% al firmar para arrancar, 50% al entregar antes de publicar.' },
  { q: '¿Qué pasa si no tengo logo o fotos?', a: 'Te ayudamos. Podemos diseñarte un logo simple sin costo y orientarte sobre fotos. Para sesiones profesionales te recomendamos un fotógrafo.' },
  { q: '¿Y si mi sitio se cae?', a: 'Mientras tengas la renovación anual al día, monitoreamos uptime y respondemos rápido. La mayoría de caídas se resuelven en menos de 1 hora.' },
  { q: '¿Puedo cambiar de Nivel 1 a Nivel 2 después?', a: 'Sí, en cualquier momento. Solo pagas la diferencia y agregamos las secciones extra.' },
]

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: `1px solid ${C.border}` }}>
      <button onClick={() => setOpen(!open)}
        style={{ width: '100%', background: 'transparent', border: 'none', padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', color: C.ink, fontSize: 15, fontWeight: 600, textAlign: 'left', gap: 16 }}>
        {q}
        {open ? <ChevronUp size={16} color={C.muted} /> : <ChevronDown size={16} color={C.muted} />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
            <div style={{ paddingBottom: 20, color: C.muted, fontSize: 14, lineHeight: 1.7 }}>{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function SitiosWeb() {
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
              DESARROLLO WEB · DIGITALIZA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#ffffff', margin: '0 0 24px', maxWidth: 720 }}>
            La primera impresión hoy{' '}
            <span className="serif" style={{ color: C.accent }}>es tu página web.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: 520, margin: '0 0 40px' }}>
            Tu Instagram no basta. Un sitio profesional convierte curiosos en clientes y te separa del que improvisa.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}
            style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center', marginBottom: 40 }}>
            <a href={WA} target="_blank" rel="noreferrer"
              style={btnPrimary({ padding: '14px 32px', fontSize: 15 })}
              onMouseEnter={e => (e.currentTarget.style.background = C.accentH)}
              onMouseLeave={e => (e.currentTarget.style.background = C.accent)}>
              Hablar con nosotros →
            </a>
            <a href="#paquetes"
              style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.85)', borderRadius: 0, padding: '14px 24px', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.8)'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'rgba(255,255,255,0.85)' }}>
              Ver paquetes
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
            {['Mismo equipo de Digitaliza', 'Base en Mérida, Yucatán', 'Acompañamiento por WhatsApp'].map(s => (
              <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>
                <Check size={13} color={C.accent} /> {s}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PAQUETES ────────────────────────────────────────────────── */}
      <section id="paquetes" style={{ background: '#ffffff' }}>
        <div style={{ ...secInner, borderTop: `1px solid ${C.border}` }}>
          <FadeUp>
            <SectionLabel text="01 / PAQUETES" />
            <h2 style={{ ...h2, marginBottom: 56 }}>Elige tu punto de partida.</h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }} className="two-col">

              {/* Nivel 1 */}
              <div style={{ background: '#ffffff', border: `1px solid ${C.border}`, borderRadius: 0, padding: '48px 40px' }}>
                <div className="mono" style={{ fontSize: '0.65rem', letterSpacing: '0.1em', color: C.muted, marginBottom: 20, textTransform: 'uppercase' }}>Para arrancar bien</div>
                <div><span style={{ fontSize: 13, color: C.muted, textDecoration: 'line-through' }}>$4,200</span></div>
                <div style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, color: C.navy, letterSpacing: '-0.04em', lineHeight: 1, margin: '4px 0' }}>
                  $3,500 <span style={{ fontSize: 16, fontWeight: 500, color: C.muted }}>MXN</span>
                </div>
                <div className="mono" style={{ fontSize: 11, color: C.muted, marginBottom: 20 }}>(precio de lanzamiento)</div>
                <div style={{ fontWeight: 600, fontSize: 15, color: C.ink, marginBottom: 28, paddingBottom: 24, borderBottom: `1px solid ${C.border}` }}>Una página, todo lo esencial</div>
                {['Diseño moderno y responsive', 'Hero + 3-4 secciones', 'Formulario de contacto + WhatsApp directo', 'Dominio .com (1 año incluido)', 'Hosting + SSL (1 año incluido)', 'Garantía de 15 días', 'Entrega en máximo 3 días hábiles'].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12, fontSize: 13, color: C.muted }}>
                    <Check size={13} color={C.accent} style={{ flexShrink: 0, marginTop: 2 }} /> {f}
                  </div>
                ))}
                <div style={{ margin: '24px 0 28px', padding: '14px 18px', background: C.surface, fontSize: 13, color: C.muted, lineHeight: 1.6 }}>
                  <strong style={{ color: C.ink }}>Ideal para:</strong> Consultorios, salones, gestorías, profesionales independientes.
                </div>
                <a href={WA} target="_blank" rel="noreferrer"
                  style={{ display: 'block', textAlign: 'center', background: C.navy, color: '#ffffff', borderRadius: 0, padding: '14px', fontSize: 14, fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.background = C.accent)}
                  onMouseLeave={e => (e.currentTarget.style.background = C.navy)}>
                  Quiero este paquete →
                </a>
              </div>

              {/* Nivel 2 */}
              <div style={{ background: '#ffffff', border: `2px solid ${C.accent}`, borderRadius: 0, padding: '48px 40px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 20, right: 20, background: C.accent, color: '#ffffff', borderRadius: 0, padding: '4px 12px', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em' }}>MÁS COMPLETO</div>
                <div className="mono" style={{ fontSize: '0.65rem', letterSpacing: '0.1em', color: C.muted, marginBottom: 20, textTransform: 'uppercase' }}>Sitio web completo</div>
                <div><span style={{ fontSize: 13, color: C.muted, textDecoration: 'line-through' }}>$8,200</span></div>
                <div style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, color: C.navy, letterSpacing: '-0.04em', lineHeight: 1, margin: '4px 0' }}>
                  $6,500 <span style={{ fontSize: 16, fontWeight: 500, color: C.muted }}>MXN</span>
                </div>
                <div className="mono" style={{ fontSize: 11, color: C.muted, marginBottom: 20 }}>(precio de lanzamiento)</div>
                <div style={{ fontWeight: 600, fontSize: 15, color: C.ink, marginBottom: 28, paddingBottom: 24, borderBottom: `1px solid ${C.border}` }}>Sitio completo para negocios establecidos</div>
                {['Todo lo del Nivel 1', '4-6 secciones (incluye galería/catálogo)', 'Integración con Google Maps', 'Optimización SEO básica', 'Dominio .com (1 año incluido)', 'Hosting + SSL (1 año incluido)', 'Garantía de 15 días'].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12, fontSize: 13, color: C.muted }}>
                    <Check size={13} color={C.accent} style={{ flexShrink: 0, marginTop: 2 }} /> {f}
                  </div>
                ))}
                <div style={{ margin: '24px 0 28px', padding: '14px 18px', background: C.surface, fontSize: 13, color: C.muted, lineHeight: 1.6 }}>
                  <strong style={{ color: C.ink }}>Ideal para:</strong> Constructoras, clínicas con varios servicios, restaurantes, comercios con catálogo.
                </div>
                <a href={WA} target="_blank" rel="noreferrer"
                  style={{ display: 'block', textAlign: 'center', background: C.accent, color: '#ffffff', borderRadius: 0, padding: '14px', fontSize: 14, fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.background = C.accentH)}
                  onMouseLeave={e => (e.currentTarget.style.background = C.accent)}>
                  Quiero este paquete →
                </a>
              </div>
            </div>

            <p className="mono" style={{ textAlign: 'center', color: C.muted, fontSize: 11, marginTop: 16 }}>
              Cupos limitados: solo los primeros 10 clientes entran a precio de lanzamiento.
            </p>
          </FadeUp>

          {/* Custom */}
          <FadeUp delay={0.2}>
            <div style={{ marginTop: 56, border: `1px solid ${C.border}`, borderTop: `4px solid ${C.accent}`, padding: '48px 44px' }}>
              <SectionLabel text="¿ALGO MÁS COMPLEJO?" />
              <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', fontWeight: 700, color: C.navy, margin: '16px 0 16px', letterSpacing: '-0.02em' }}>Si tu idea no cabe en un paquete, la cotizamos.</h3>
              <p style={{ fontSize: '1rem', color: C.muted, lineHeight: 1.75, marginBottom: 32, maxWidth: 640 }}>
                E-commerce, sitios con varios idiomas, integraciones a CRM, paneles internos, reservaciones online... Si tienes algo más ambicioso, mándanos un mensaje y armamos una propuesta a tu medida.
              </p>
              <a href={WA} target="_blank" rel="noreferrer"
                style={btnPrimary()}
                onMouseEnter={e => (e.currentTarget.style.background = C.accentH)}
                onMouseLeave={e => (e.currentTarget.style.background = C.accent)}>
                Cotizar proyecto a medida <ArrowRight size={15} />
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ───────────────────────────────────────────── */}
      <section style={{ background: C.surface }}>
        <div style={{ ...secInner, borderTop: `1px solid ${C.border}` }}>
          <FadeUp>
            <SectionLabel text="02 / CÓMO FUNCIONA" />
            <h2 style={{ ...h2, marginBottom: 56 }}>De cero a online en tres movimientos.</h2>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0 }} className="three-col">
            {[
              { num: '01', title: 'Brief inicial', desc: 'Te pasamos un cuestionario corto. Nos mandas tu logo, contenido, fotos y referencias. Pagas el 50% y arrancamos.' },
              { num: '02', title: 'Diseño y desarrollo', desc: 'En máximo 3 días hábiles tu sitio está listo. Te lo mostramos antes de publicar para tu aprobación.' },
              { num: '03', title: 'Publicación', desc: 'Pagas el 50% restante, publicamos en tu dominio. 15 días de garantía para corregir cualquier bug técnico sin costo.' },
            ].map((s, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div style={{ padding: '40px 40px', borderLeft: i > 0 ? `1px solid ${C.border}` : 'none' }}>
                  <div className="mono" style={{ fontSize: '0.65rem', color: C.accent, marginBottom: 20, letterSpacing: '0.1em' }}>{s.num}</div>
                  <div style={{ fontWeight: 700, fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', color: C.navy, marginBottom: 12, letterSpacing: '-0.02em' }}>{s.title}</div>
                  <div style={{ fontSize: '0.9rem', color: C.muted, lineHeight: 1.7 }}>{s.desc}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUÉ INCLUYE SIEMPRE ─────────────────────────────────────── */}
      <section style={{ background: '#ffffff' }}>
        <div style={{ ...secInner, borderTop: `1px solid ${C.border}` }}>
          <FadeUp>
            <SectionLabel text="03 / SIEMPRE INCLUIDO" />
            <h2 style={{ ...h2, marginBottom: 56 }}>Todo viene incluido. Sin sorpresas.</h2>
          </FadeUp>
          <div style={{ borderTop: `1px solid ${C.border}` }}>
            {[
              { icon: <Globe size={18} strokeWidth={1.5} />, title: 'Dominio .com', sub: '1 año incluido' },
              { icon: <Server size={18} strokeWidth={1.5} />, title: 'Hosting + SSL', sub: '1 año incluido' },
              { icon: <Smartphone size={18} strokeWidth={1.5} />, title: 'Diseño 100% responsive', sub: 'Mobile, tablet, desktop' },
              { icon: <MessageCircle size={18} strokeWidth={1.5} />, title: 'Botón WhatsApp directo', sub: 'Conversaciones inmediatas' },
              { icon: <Shield size={18} strokeWidth={1.5} />, title: 'Garantía de 15 días', sub: 'Bugs técnicos sin costo' },
              { icon: <Clock size={18} strokeWidth={1.5} />, title: 'Entrega en 3 días hábiles', sub: 'Scope cerrado, sin demoras' },
            ].map((f, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr 1fr', gap: 32, padding: '24px 0', borderBottom: `1px solid ${C.border}`, alignItems: 'center' }}>
                  <span style={{ color: C.muted }}>{f.icon}</span>
                  <span style={{ fontWeight: 700, fontSize: 14, color: C.navy, letterSpacing: '-0.01em' }}>{f.title}</span>
                  <span style={{ fontSize: 13, color: C.muted }}>{f.sub}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── RENOVACIÓN ──────────────────────────────────────────────── */}
      <section style={{ background: C.surface }}>
        <div style={{ ...secInner, borderTop: `1px solid ${C.border}` }}>
          <FadeUp>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="two-col">
              <div>
                <SectionLabel text="04 / DESPUÉS DEL PRIMER AÑO" />
                <div style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, color: C.navy, letterSpacing: '-0.04em', lineHeight: 1, margin: '16px 0 8px' }}>
                  $1,500 <span style={{ fontSize: 18, fontWeight: 500, color: C.muted }}>MXN/año</span>
                </div>
              </div>
              <p style={{ fontSize: '1.0625rem', color: C.muted, lineHeight: 1.75, margin: 0 }}>
                Para mantener tu sitio vivo. Incluye hosting, dominio, SSL, monitoreo y hasta 2 ajustes menores al año (cambiar un teléfono, un horario, una foto). Cambios mayores o secciones nuevas se cotizan aparte.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section style={{ background: '#ffffff' }}>
        <div style={{ ...secInner, borderTop: `1px solid ${C.border}` }}>
          <FadeUp>
            <SectionLabel text="05 / PREGUNTAS FRECUENTES" />
            <h2 style={{ ...h2, marginBottom: 56 }}>Lo que solemos aclarar antes de arrancar.</h2>
            <div style={{ borderTop: `1px solid ${C.border}` }}>
              {faqs.map((f, i) => <FAQ key={i} q={f.q} a={f.a} />)}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA FINAL ───────────────────────────────────────────────── */}
      <section style={{ background: C.navy }}>
        <div style={{ ...secInner, textAlign: 'center' }}>
          <FadeUp>
            <div style={{ marginBottom: 16 }}>
              <span className="mono" style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
                06 / HABLEMOS
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#ffffff', margin: '0 0 20px' }}>
              ¿Listo para tener un sitio que sí{' '}
              <span className="serif" style={{ color: C.accent }}>vende?</span>
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.6)', maxWidth: 480, margin: '0 auto 48px', lineHeight: 1.7 }}>
              Cupos abiertos para los primeros 10 clientes a precio de lanzamiento. Después, el precio sube.
            </p>
            <a href={WA} target="_blank" rel="noreferrer"
              style={btnPrimary({ padding: '15px 36px', fontSize: 15 })}
              onMouseEnter={e => (e.currentTarget.style.background = C.accentH)}
              onMouseLeave={e => (e.currentTarget.style.background = C.accent)}>
              Empezar por WhatsApp <ArrowRight size={17} />
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
          .three-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
