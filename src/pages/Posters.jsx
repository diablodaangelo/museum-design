import { useState, useEffect, useRef } from 'react'
import Layout from '../components/Layout'

const posterData = [
  { 
    id: 1, 
    type: 'work', 
    title: 'Original Bitter-Sweet', 
    image: '/poster1.jpg', 
    description: 'Sarcastic honesty meets minimalist streetwear aesthetics. Features bold typography paired with the iconic "Period Six cherry" graphic in an authentic, earth-toned palette.',
  },
  { 
    id: 2, 
    type: 'work', 
    title: 'Cherry Six Pop', 
    image: '/poster2.jpg', 
    description: 'A bold explosion of energy and retro-pop attitude. Features impactful, oversized cherry-six graphics in vibrant red, creating an instantly iconic and playful visual.',
  },
  { 
    id: 3, 
    type: 'work', 
    title: 'When The Clover Stop', 
    image: '/poster3.jpg', 
    description: 'A dynamic blend of freshness and visual optimism. Inspired by the classic four-leaf clover and a sense of calm journey in a striking forest green composition.',
  },
  { 
    id: 4, 
    type: 'coming', 
    title: '—', 
    description: 'Moving beyond the canvas. Our next project is currently in the works.',
  },
  { 
    id: 5, 
    type: 'coming', 
    title: '—', 
    description: 'Moving beyond the canvas. Our next project is currently in the works.',
  },
  { 
    id: 6, 
    type: 'coming', 
    title: '—', 
    description: 'Moving beyond the canvas. Our next project is currently in the works.',
  },
]

const PosterCard = ({ item, index, isVisible }) => {
  const [hoveredId, setHoveredId] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    
    setMousePosition({ x, y })
    setHoveredId(item.id)
  }

  const handleMouseLeave = () => {
    setHoveredId(null)
    setMousePosition({ x: 0.5, y: 0.5 })
  }

  const isHovered = hoveredId === item.id

  return (
    <div
      ref={cardRef}
      className="relative group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${index * 0.1}s`,
        transitionDuration: '0.6s',
        transitionProperty: 'opacity, transform',
      }}
    >
      {/* Background Glow efek mengikuti mouse */}
      <div
        className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(184, 162, 140, 0.2) 0%, transparent 70%)`,
        }}
      />

      {/* Card Container */}
      <div
        className="bg-[#f5f0e8] p-4 rounded-sm transition-all duration-500"
        style={{
          transform: isHovered 
            ? `translate(${(mousePosition.x - 0.5) * 3}px, ${(mousePosition.y - 0.5) * 3}px) scale(1.01)` 
            : 'translate(0, 0) scale(1)',
          boxShadow: isHovered 
            ? '0 30px 60px rgba(44, 36, 24, 0.12), 0 10px 25px rgba(44, 36, 24, 0.06)' 
            : '0 8px 20px rgba(44, 36, 24, 0.04)',
        }}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-sm">
          <div className="aspect-square bg-[#e0d6c8] overflow-hidden relative">
            {item.type === 'work' ? (
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#e8e0d5] to-[#e0d6c8]">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 border border-[#b8a28c]/30 flex items-center justify-center rounded-sm transition-all duration-500 group-hover:border-[#b8a28c]/60 group-hover:shadow-lg">
                    <span className="text-[#b8a28c]/40 text-3xl font-serif group-hover:text-[#b8a28c]/70 transition-colors duration-500">✧</span>
                  </div>
                  <p className="text-[#b8a28c]/50 text-sm italic group-hover:text-[#b8a28c]/80 transition-colors duration-500">vacat</p>
                </div>
              </div>
            )}

            {/* Shimmer effect saat hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none overflow-hidden"
              style={{
                background: `linear-gradient(115deg, transparent 30%, rgba(255,255,245,0.6) 50%, transparent 70%)`,
                backgroundSize: '200% 100%',
                animation: isHovered ? 'shimmer 2.5s infinite' : 'none',
              }}
            />

            {/* Corner shine effect */}
            <div className="absolute bottom-2 right-2 w-8 h-8 bg-gradient-to-tl from-transparent to-[#f5f0e8]/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Top-left corner accent */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#b8a28c]/10 rounded-tl-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        {/* Label Section */}
        <div className="mt-5 text-center">
          {/* Title */}
          <div className="relative inline-block">
            <span className="text-lg font-medium tracking-wide text-[#2c2418]">
              {item.title}
            </span>
            <div 
              className="absolute -bottom-1 left-1/2 h-px bg-gradient-to-r from-transparent via-[#b8a28c] to-transparent transition-all duration-500"
              style={{
                width: isHovered ? '70%' : '0%',
                transform: 'translateX(-50%)',
              }}
            />
          </div>

          {/* Description */}
          <p 
            className="text-[#5c4b38] text-sm mt-3 leading-relaxed max-w-[220px] mx-auto italic font-light transition-all duration-500"
            style={{
              opacity: isHovered ? 1 : 0.7,
            }}
          >
            {item.description}
          </p>

          {/* Decorative line */}
          <div 
            className="h-px bg-gradient-to-r from-transparent via-[#b8a28c]/40 to-transparent mx-auto mt-4 transition-all duration-500"
            style={{
              width: isHovered ? '30%' : '15%',
            }}
          />

          {/* Page number */}
          <p 
            className="text-[#d4c9bc] text-xs mt-3 font-mono tracking-wider transition-all duration-500"
            style={{
              opacity: isHovered ? 0.9 : 0.5,
            }}
          >
            fol. {String(item.id).padStart(2, '0')}
          </p>
        </div>
      </div>
    </div>
  )
}

const Posters = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [visibleCards, setVisibleCards] = useState(new Set())
  const containerRef = useRef(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.dataset.id)
            setVisibleCards((prev) => new Set(prev).add(id))
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    const cards = containerRef.current?.querySelectorAll('[data-id]')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <Layout title="POSTERS">
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%); }
          100% { transform: translateX(150%); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>

      {/* Header */}
      <div 
        className="text-center mb-12 transition-all duration-700"
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(-20px)',
        }}
      >
        <p className="text-[#8b7355] text-sm tracking-[0.25em] uppercase font-light">
          illustrator - photoshop 
        </p>
        
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-3 mt-5">
          <div 
            className="h-px bg-gradient-to-r from-transparent to-[#d4c9bc] transition-all duration-700"
            style={{ width: isLoaded ? '30px' : '0px', transitionDelay: '0.2s' }}
          />
          <div 
            className="w-1 h-1 rounded-full bg-[#b8a28c] transition-all duration-700"
            style={{ opacity: isLoaded ? 1 : 0, transitionDelay: '0.3s' }}
          />
          <div 
            className="h-px bg-gradient-to-l from-transparent to-[#d4c9bc] transition-all duration-700"
            style={{ width: isLoaded ? '30px' : '0px', transitionDelay: '0.2s' }}
          />
        </div>
      </div>

      {/* Grid Container */}
      <div 
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {posterData.map((item, idx) => (
          <div key={item.id} data-id={item.id}>
            <PosterCard 
              item={item} 
              index={idx}
              isVisible={visibleCards.has(item.id)}
            />
          </div>
        ))}
      </div>

      {/* Footer */}
      <div 
        className="text-center mt-16 pt-8 border-t border-[#d4c9bc]/30 transition-all duration-700"
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
          transitionDelay: '0.5s',
        }}
      >
        <div className="space-y-2">
          <p className="text-[#8b7355] text-xs tracking-[0.2em] uppercase font-light">
            Beyond Edition One. Currently exploring new dimensions.
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-6 bg-gradient-to-r from-transparent to-[#d4c9bc]/50" />
            <p className="text-[#b8a28c]/40 text-[10px] font-mono">
              printed on archival paper
            </p>
            <div className="h-px w-6 bg-gradient-to-l from-transparent to-[#d4c9bc]/50" />
          </div>
        </div>

        {/* Ambient dots */}
        <div className="mt-5 flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1 h-1 rounded-full bg-[#d4c9bc]/50"
              style={{
                animation: `glow-pulse 3s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Posters