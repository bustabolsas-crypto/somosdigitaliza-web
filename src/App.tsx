import { Routes, Route } from 'react-router-dom'
import MouseGlow from './components/MouseGlow'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import SitiosWeb from './pages/SitiosWeb'
import Profesional from './pages/Profesional'

export default function App() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', position: 'relative', backgroundColor: '#ffffff' }}>
      <MouseGlow />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sitios-web" element={<SitiosWeb />} />
        <Route path="/profesional" element={<Profesional />} />
      </Routes>
    </div>
  )
}
