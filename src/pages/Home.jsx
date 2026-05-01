import { useState, useEffect } from 'react'
import Layout from '../components/Layout'

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hoveredId, setHoveredId] = useState(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const menuItems = [
    {
      id: 1,
      title: 'Posters',
      description: 'poster designs & visual explorations',
      href: '/posters',
    },
    {
      id: 2,
      title: 'Frames',
      description: '	archive of fleeting moments',
      href: '/frames',
    },
    {
      id: 3,
      title: 'Journal',
      description: 'process notes & creative thinking',
      href: '/journal',
    },
    {
      id: 4,
      title: 'About',
      description: 'curator background & methodology',
      href: '/about',
    },
  ]

  return (
    <Layout title="">
      <style>{`
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

        @keyframes lineDraw {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 40px;
            opacity: 1;
          }
        }

        .menu-card {
          transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }

        .menu-card:hover {
          transform: translateY(-8px);
        }

        .hover-underline {
          position: relative;
        }

        .hover-underline::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: #8b7355;
          transition: width 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }

        .menu-card:hover .hover-underline::after {
          width: 100%;
        }

        .arrow-icon {
          transition: transform 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }

        .menu-card:hover .arrow-icon {
          transform: translateX(6px);
        }

        .card-number {
          transition: all 0.3s ease;
        }

        .menu-card:hover .card-number {
          color: #8b7355;
          letter-spacing: 2px;
        }
      `}</style>

      {/* Hero Section */}
      <div 
        className="text-center mb-20"
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
        }}
      >
        <p className="text-[#8b7355] text-xs tracking-[0.3em] uppercase font-light mb-3">
          welcome to
        </p>
        <h1 className="text-6xl md:text-7xl font-light tracking-wide text-[#2c2418] mb-4">
          Studio Archive
        </h1>
        <div 
          className="h-px bg-gradient-to-r from-transparent via-[#b8a28c] to-transparent mx-auto"
          style={{
            width: isLoaded ? '60px' : '0',
            transition: 'width 0.8s ease-out 0.3s',
          }}
        />
      </div>

      {/* Menu Grid */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItems.map((item, index) => (
            <a
              key={item.id}
              href={item.href}
              className="menu-card group block bg-[#f5f0e8] rounded-sm overflow-hidden border border-[#e0d6c8] hover:border-[#b8a28c] transition-all duration-300"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`,
              }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="p-8">
                {/* Index Number */}
                <div className="flex items-center justify-end mb-4">
                  <span className="card-number text-[#d4c9bc] text-sm font-mono tracking-wider transition-all duration-300">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title with underline animation */}
                <div className="hover-underline inline-block mb-2">
                  <h3 className="text-2xl font-light tracking-wide text-[#2c2418] transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[#8b7355] text-sm font-light leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Arrow with animation */}
                <div className="flex items-center gap-2">
                  <span className="arrow-icon text-[#b8a28c] text-base transition-transform duration-300">
                    →
                  </span>
                  <span className="text-[#b8a28c]/50 text-[11px] uppercase tracking-[0.15em] font-light">
                    explore
                  </span>
                </div>

                {/* Decorative line at bottom (appears on hover) */}
                <div 
                  className="mt-5 h-px bg-gradient-to-r from-[#b8a28c] to-transparent transition-all duration-500"
                  style={{
                    width: hoveredId === item.id ? '30%' : '0%',
                    opacity: hoveredId === item.id ? 1 : 0,
                  }}
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div 
        className="text-center mt-20 pt-8 border-t border-[#d4c9bc]/30"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.6s ease-out 0.5s',
        }}
      >
        <p className="text-[#0000]/40 text-[10px] tracking-[0.2em] uppercase font-light">
          bound collection • edition one
        </p>
      </div>
    </Layout>
  )
}

export default Home