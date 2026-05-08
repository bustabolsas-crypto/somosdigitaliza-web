export default function SectionLabel({ text }: { text: string }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <span className="mono" style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em', color: '#2563eb', textTransform: 'uppercase' }}>
        {text}
      </span>
    </div>
  )
}
