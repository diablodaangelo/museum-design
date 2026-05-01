import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Posters from './pages/Posters'
import Frames from './pages/Frames'
import Journal from './pages/Journal'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <div className="paper-texture min-h-screen">
        <div className="min-h-screen">
          
          {/* Navigation dengan gaya vintage */}
          <nav className="sticky top-0 z-50 bg-[#f5f0e8]/90 backdrop-blur-sm border-b border-[#d4c9bc]">
            <div className="max-w-5xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <Link to="/" className="text-sm tracking-[0.2em] uppercase text-[#2c2418] hover:text-[#8b7355] transition font-light">
                  Studio Archive
                </Link>
                <div className="hidden md:flex gap-8 text-sm text-[#2c2418]/70">
                  <Link to="/" className="hover:text-[#8b7355] transition">Home</Link>
                  <Link to="/posters" className="hover:text-[#8b7355] transition">Posters</Link>
                  <Link to="/frames" className="hover:text-[#8b7355] transition">Frames</Link>
                  <Link to="/journal" className="hover:text-[#8b7355] transition">Journal</Link>
                  <Link to="/about" className="hover:text-[#8b7355] transition">About</Link>
                </div>
                <div className="w-16"></div>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="pt-16 pb-20 px-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posters" element={<Posters />} />
              <Route path="/frames" element={<Frames />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App