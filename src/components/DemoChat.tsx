import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const tabs = ['Consultorio médico','Salón de belleza','Inmobiliaria','Restaurante']

const convos: { from: 'user'|'bot'; text: string }[][] = [
  [
    { from: 'user', text: '¿Tienen disponibilidad con el Dr. García esta semana?' },
    { from: 'bot', text: 'Sí, el Dr. García tiene horarios disponibles el jueves a las 10:00 AM y viernes a las 3:00 PM. ¿Cuál te funciona mejor?' },
    { from: 'user', text: 'El jueves por favor' },
    { from: 'bot', text: 'Listo. Quedó agendada tu cita con el Dr. García el jueves 10:00 AM. Te llegará un recordatorio 24h antes. Llega 10 min antes para tu expediente.' },
  ],
  [
    { from: 'user', text: 'Quiero corte y tinte para el sábado' },
    { from: 'bot', text: 'Tenemos disponibilidad sábado 11:00 AM o 4:00 PM con Karina. El servicio dura 2.5 hrs aprox. ¿Cuál prefieres?' },
    { from: 'user', text: '11 AM' },
    { from: 'bot', text: 'Perfecto. Te apartamos el sábado 11:00 AM con Karina. Servicio: corte + tinte. Te recordamos un día antes.' },
  ],
  [
    { from: 'user', text: 'Vi el terreno de Cholul, ¿sigue disponible?' },
    { from: 'bot', text: 'Sí, sigue disponible. 500m², $1,850,000. Te paso fotos y ubicación. ¿Quieres agendar visita?' },
    { from: 'user', text: 'Sí, este sábado en la mañana' },
    { from: 'bot', text: 'Listo. Visita agendada sábado 10:00 AM en Cholul. Te mando ubicación y le aviso al asesor. Cualquier cosa avísame por aquí.' },
  ],
  [
    { from: 'user', text: 'Mesa para 4 mañana 8pm' },
    { from: 'bot', text: 'Tengo disponibilidad mañana 8:00 PM para 4 personas en terraza o salón. ¿Alguna preferencia?' },
    { from: 'user', text: 'Terraza' },
    { from: 'bot', text: 'Reservado. Mañana 8:00 PM, 4 personas, terraza. Te guardamos la mesa 30 min. Cancela por aquí si tu plan cambia.' },
  ],
]

export default function DemoChat() {
  const [active, setActive] = useState(0)
  const convo = convos[active]

  return (
    <div>
      {/* Tabs */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 40, borderBottom: '1px solid rgba(10,10,10,0.12)' }}>
        {tabs.map((t, i) => (
          <button key={t} onClick={() => setActive(i)}
            style={{
              padding: '10px 22px',
              fontSize: 13, fontWeight: active === i ? 600 : 400,
              cursor: 'pointer', transition: 'all 0.2s',
              background: 'transparent',
              color: active === i ? '#0f172a' : '#64748b',
              border: 'none',
              borderBottom: active === i ? '2px solid #2563eb' : '2px solid transparent',
              marginBottom: -1,
            }}>
            {t}
          </button>
        ))}
      </div>

      {/* Chat */}
      <AnimatePresence mode="wait">
        <motion.div key={active}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          style={{ margin: '0 auto', maxWidth: 420 }}>
          <div style={{ background: '#111b21', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 24px 60px rgba(0,0,0,0.5)' }}>
            {/* Header */}
            <div style={{ background: '#1f2c34', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'linear-gradient(135deg,#0fb989,#0a7a5a)', display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,color:'#fff' }}>DZ</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14, color: '#e9edef' }}>Tu Negocio</div>
                <div style={{ fontSize: 12, color: '#25D366' }}>● IA activa</div>
              </div>
            </div>
            {/* Messages */}
            <div style={{ background: '#0b141a', padding: '16px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {convo.map((m, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: m.from === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.12 }}
                  style={{ display: 'flex', justifyContent: m.from === 'user' ? 'flex-end' : 'flex-start' }}>
                  <div style={{
                    background: m.from === 'user' ? '#005c4b' : '#1f2c34',
                    borderRadius: m.from === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    padding: '9px 13px', maxWidth: '82%', fontSize: 14, color: '#e9edef', lineHeight: 1.45,
                  }}>
                    {m.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
