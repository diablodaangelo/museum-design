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
      title: 'Video',
      description: 'moving image works',
      href: '/video',
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

  const socialLinks = [
    {
      name: 'GitHub',
      username: 'diablodaangelo',
      url: 'https://github.com/diablodaangelo',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.201 2.393.099 2.646.64.698 1.03 1.591 1.03 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      username: 'pajarrmdn_',
      url: 'https://instagram.com/pajarrmdn_',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      )
    },
    {
      name: 'TikTok',
      username: 'diablodaangelo',
      url: 'https://tiktok.com/@diablodaangelo',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 015.2-1.74V9.02a8.11 8.11 0 004.68 1.44v-3.5a4.83 4.83 0 002.54 1.73z"/>
        </svg>
      )
    },
    {
      name: 'Email',
      username: 'ofcoursediablo@gmail.com',
      url: 'mailto:ofcoursediablo@gmail.com',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      )
    }
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

        .menu-card {
          transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }

        .menu-card:hover {
          transform: translateY(-6px);
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

        .social-link {
          transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }

        .social-link:hover {
          transform: translateY(-2px);
          color: #8b7355;
        }
      `}</style>

      {/* Hero Section */}
      <div 
        className="text-center mb-16"
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

                {/* Title */}
                <div className="hover-underline inline-block mb-2">
                  <h3 className="text-2xl font-light tracking-wide text-[#2c2418] transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[#8b7355] text-sm font-light leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-2">
                  <span className="arrow-icon text-[#b8a28c] text-base transition-transform duration-300">
                    →
                  </span>
                  <span className="text-[#b8a28c]/50 text-[11px] uppercase tracking-[0.15em] font-light">
                    explore
                  </span>
                </div>

                {/* Decorative line */}
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

      {/* Social Links Section */}
      <div 
        className="max-w-2xl mx-auto mt-20 pt-8 border-t border-[#d4c9bc]/30 text-center"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: `opacity 0.6s ease-out 0.4s`,
        }}
      >
        <p className="text-[#8b7355] text-xs tracking-[0.2em] uppercase font-light mb-5">
          connect
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {socialLinks.map((social, idx) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link flex items-center gap-2 text-[#8b7355] hover:text-[#2c2418] transition-all duration-300 group"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(10px)',
                transition: `opacity 0.4s ease-out ${0.5 + idx * 0.05}s, transform 0.4s ease-out ${0.5 + idx * 0.05}s`,
              }}
            >
              <span className="text-[#b8a28c] group-hover:scale-110 transition-transform duration-300">
                {social.icon}
              </span>
              <span className="text-xs tracking-wide font-light">
                {social.username}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div 
        className="text-center mt-12 pt-8 border-t border-[#d4c9bc]/30"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: `opacity 0.6s ease-out 0.5s`,
        }}
      >
        <p className="text-[#b8a28c]/40 text-[10px] tracking-[0.25em] uppercase font-light">
          bound collection • edition one
        </p>
      </div>
    </Layout>
  )
}

export default Home