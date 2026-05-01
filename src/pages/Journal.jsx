import { useState, useEffect, useRef } from 'react'
import Layout from '../components/Layout'

const journalData = [
  {
    id: 1,
    type: 'coming',
    title: 'Process Notes',
    description: 'Design thinking, color studies, and editing experiments.',
    icon: '✧',
  },
  {
    id: 2,
    type: 'coming',
    title: 'Behind the Scenes',
    description: 'Visual research, mood boards, and early drafts.',
    icon: '✧',
  },
  {
    id: 3,
    type: 'coming',
    title: 'Creative Diary',
    description: 'Daily observations and creative reflections.',
    icon: '✧',
  },
]

const JournalCard = ({ item, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group cursor-default"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1) ${index * 0.12}s, transform 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1) ${index * 0.12}s`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="bg-[#f5f0e8] rounded-sm overflow-hidden border border-[#e0d6c8] transition-all duration-500 hover:border-[#b8a28c] hover:shadow-2xl"
        style={{
          transitionTimingFunction: 'cubic-bezier(0.2, 0.9, 0.4, 1.1)',
          transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
        }}
      >
        {/* Top section with icon */}
        <div className="relative p-8 pb-4">
          <div className="flex items-center justify-between mb-4">
            <div 
              className="w-12 h-12 rounded-full border border-[#d4c9bc] flex items-center justify-center transition-all duration-500"
              style={{
                transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0)',
                transitionTimingFunction: 'cubic-bezier(0.2, 0.9, 0.4, 1.1)',
              }}
            >
              <span className="text-[#b8a28c] text-xl font-serif transition-all duration-500">
                {item.icon}
              </span>
            </div>
            <span className="text-[#d4c9bc] text-sm font-mono tracking-wider">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Decorative line */}
          <div 
            className="h-px bg-gradient-to-r from-[#b8a28c]/20 to-transparent transition-all duration-500"
            style={{
              width: isHovered ? '40%' : '20%',
              transitionTimingFunction: 'cubic-bezier(0.2, 0.9, 0.4, 1.1)',
            }}
          />
        </div>

        {/* Content */}
        <div className="p-8 pt-0">
          <h3 className="text-xl font-light tracking-wide text-[#2c2418] mb-2 transition-all duration-300">
            {item.title}
          </h3>
          <p className="text-[#8b7355] text-sm font-light leading-relaxed mb-4">
            {item.description}
          </p>
          
          {/* Status indicator */}
          <div className="flex items-center gap-2 mt-4">
            <div 
              className="w-2 h-2 rounded-full bg-[#b8a28c]/40 transition-all duration-500"
              style={{
                backgroundColor: isHovered ? '#b8a28c' : '#d4c9bc',
              }}
            />
            <span className="text-[#b8a28c]/60 text-xs tracking-wider uppercase font-light">
              coming soon
            </span>
          </div>

          {/* Decorative line on hover */}
          <div 
            className="mt-4 h-px bg-gradient-to-r from-[#b8a28c] to-transparent transition-all duration-500"
            style={{
              width: isHovered ? '50px' : '0px',
              transitionTimingFunction: 'cubic-bezier(0.2, 0.9, 0.4, 1.1)',
            }}
          />
        </div>
      </div>
    </div>
  )
}

const Journal = () => {
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
    <Layout title="JOURNAL">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes subtlePulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>

      {/* Header Section */}
      <div 
        className="text-center mb-12"
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(-25px)',
          transition: `opacity 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1), transform 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1)`,
        }}
      >
        <p className="text-[#8b7355] text-sm tracking-[0.3em] uppercase font-light">
          process & creative thinking
        </p>
        <div className="flex items-center justify-center gap-4 mt-5">
          <div 
            className="h-px bg-gradient-to-r from-transparent to-[#d4c9bc] transition-all duration-1000"
            style={{ width: isLoaded ? '30px' : '0px', transitionDelay: '0.2s' }}
          />
          <div 
            className="w-1 h-1 rounded-full bg-[#b8a28c] transition-all duration-700"
            style={{ opacity: isLoaded ? 1 : 0, transitionDelay: '0.3s' }}
          />
          <div 
            className="h-px bg-gradient-to-l from-transparent to-[#d4c9bc] transition-all duration-1000"
            style={{ width: isLoaded ? '30px' : '0px', transitionDelay: '0.2s' }}
          />
        </div>
      </div>

      {/* Coming Soon Notice - Elegant */}
      <div 
        className="max-w-md mx-auto text-center mb-12"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: `opacity 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1) 0.3s`,
        }}
      >
        <div className="bg-[#f5f0e8]/50 border border-[#e0d6c8] rounded-sm p-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-px bg-[#b8a28c]/30" />
            <span className="text-[#8b7355] text-xs tracking-[0.2em] uppercase font-light">notebook</span>
            <div className="w-8 h-px bg-[#b8a28c]/30" />
          </div>
          <p className="text-[#2c2418]/50 text-sm italic font-light">
            Archives are being organized.
          </p>
          <p className="text-[#b8a28c]/40 text-xs mt-2 font-light tracking-wide">
            process notes, sketches & reflections will appear here
          </p>
        </div>
      </div>

      {/* Grid Container */}
      <div 
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {journalData.map((item, idx) => (
          <div key={item.id} data-id={item.id}>
            <JournalCard 
              item={item} 
              index={idx}
              isVisible={visibleCards.has(item.id)}
            />
          </div>
        ))}
      </div>

      {/* Footer */}
      <div 
        className="text-center mt-16 pt-8 border-t border-[#d4c9bc]/30 transition-all duration-1000"
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(15px)',
          transition: `opacity 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1) 0.5s, transform 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1) 0.5s`,
        }}
      >
        <p className="text-[#b8a28c]/40 text-xs tracking-[0.25em] uppercase font-light">
          more entries to be added
        </p>
        <div className="flex items-center justify-center gap-2 mt-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1 h-1 rounded-full bg-[#d4c9bc]/40"
              style={{
                animation: `fadeIn 1.5s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Journal