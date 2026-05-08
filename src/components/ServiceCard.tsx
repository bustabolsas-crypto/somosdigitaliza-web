import { ReactNode } from 'react'

interface Props { icon: ReactNode; title: string; description: string }

// CSS hover via className — evita el bug donde Framer Motion anima el elemento
// hasta quedar bajo el cursor sin disparar mouseleave, dejando el glow fijo.
const css = `
  .service-card {
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 20px;
    padding: 28px 24px;
    background: rgba(255,255,255,0.02);
    transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
    cursor: default;
    height: 100%;
    box-sizing: border-box;
  }
  .service-card:hover {
    transform: translateY(-4px);
    border-color: rgba(15,185,137,0.4) !important;
    box-shadow: 0 8px 40px rgba(15,185,137,0.12);
  }
`

export default function ServiceCard({ icon, title, description }: Props) {
  return (
    <>
      <style>{css}</style>
      <div className="service-card">
        <div style={{ marginBottom: 16, color: '#0fb989' }}>{icon}</div>
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: '#f5f5f5' }}>{title}</div>
        <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{description}</div>
      </div>
    </>
  )
}
