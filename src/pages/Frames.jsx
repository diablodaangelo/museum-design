import { useState, useEffect, useRef } from 'react'
import Layout from '../components/Layout'

const videoData = [
  {
    id: 1,
    type: 'work',
    title: 'Motion I',
    description: 'A minimalist edit with film branding and clean transitions. What started as a simple idea resonated widely — and many followed the same format after.',
    videoFile: '/videos/my-video.mp4',
    thumbnail: '/videos/thumb.jpg',
    duration: '0:45',
    sourceUrl: 'https://www.tiktok.com/@diablodaangelo/video/7607827314742758674',
    sourceLabel: 'View on TikTok',
  },
  {
    id: 2,
    type: 'coming',
    title: 'Coming Soon',
    description: 'Next project in progress',
  },
  {
    id: 3,
    type: 'coming',
    title: 'Coming Soon',
    description: 'Next project in progress',
  },
]

const VideoCard = ({ item, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = () => {
    if (item.type === 'work') {
      setIsModalOpen(true)
    }
  }

  return (
    <>
      <div
        className="group cursor-pointer"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <div className="bg-[#f5f0e8] rounded-sm overflow-hidden border border-[#e0d6c8] transition-all duration-500 hover:border-[#b8a28c] hover:shadow-xl">
          
          {/* Thumbnail 16:9 */}
          <div className="relative aspect-video bg-[#e0d6c8] overflow-hidden">
            {item.type === 'work' ? (
              <>
                {item.thumbnail ? (
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#d4c9bc] to-[#c4b8a8] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full border-2 border-[#f5f0e8] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-[#f5f0e8]/20">
                        <svg className="w-6 h-6 text-[#f5f0e8] ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-[#f5f0e8]/70 text-sm font-light">click to play</p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {item.duration && (
                  <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-sm">
                    <span className="text-[#f5f0e8] text-xs font-mono">{item.duration}</span>
                  </div>
                )}
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#e8e0d5] to-[#e0d6c8]">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 border border-[#b8a28c]/30 rounded-full flex items-center justify-center">
                    <span className="text-[#b8a28c]/40 text-2xl font-serif">✧</span>
                  </div>
                  <p className="text-[#b8a28c]/50 text-sm italic">in progress</p>
                </div>
              </div>
            )}
          </div>

          {/* Label Section */}
          <div className="p-5">
            <h3 className="text-lg font-medium tracking-wide text-[#2c2418] mb-1">
              {item.title}
            </h3>
            <p className="text-[#8b7355] text-sm font-light leading-relaxed">
              {item.description}
            </p>
            <div 
              className="mt-3 h-px bg-gradient-to-r from-[#b8a28c] to-transparent transition-all duration-500"
              style={{
                width: isHovered && item.type === 'work' ? '40px' : '0px',
              }}
            />
          </div>
        </div>
      </div>

      {/* Modal untuk play video + tombol source */}
      {isModalOpen && item.type === 'work' && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" />
          
          <div 
            className="relative max-w-5xl w-full bg-[#1a1a1a] rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Video Container 16:9 */}
            <div className="relative aspect-video bg-black">
              <video
                src={item.videoFile}
                className="absolute top-0 left-0 w-full h-full"
                controls
                autoPlay
                playsInline
                poster={item.thumbnail}
              >
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Info bar dengan tombol link source */}
            <div className="p-4 bg-[#2c2418] flex items-center justify-between flex-wrap gap-3">
              <div>
                <h4 className="text-[#f5f0e8] font-light">{item.title}</h4>
                <p className="text-[#b8a28c] text-sm font-light">{item.description}</p>
              </div>
              <div className="flex items-center gap-4">
                {/* Tombol Link ke TikTok */}
                {item.sourceUrl && (
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#b8a28c] hover:text-[#f5f0e8] transition text-sm tracking-wider flex items-center gap-1"
                    onClick={(e) => e.stopPropagation()}
                    title={item.sourceLabel || 'Open source link'}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>{item.sourceLabel || 'source'}</span>
                  </a>
                )}
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-[#b8a28c] hover:text-[#f5f0e8] transition text-sm tracking-wider"
                >
                  [ close ]
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

const Frames = () => {
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
    <Layout title="FRAMES">
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
      `}</style>

      {/* Header Section */}
      <div 
        className="text-center mb-12"
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(-20px)',
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        }}
      >
        <p className="text-[#8b7355] text-sm tracking-[0.25em] uppercase font-light">
          	archive of fleeting moments
        </p>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#d4c9bc]" />
          <div className="w-1 h-1 rounded-full bg-[#b8a28c]" />
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#d4c9bc]" />
        </div>
      </div>

      {/* Grid Container */}
      <div 
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {videoData.map((item, idx) => (
          <div key={item.id} data-id={item.id}>
            <VideoCard 
              item={item} 
              index={idx}
              isVisible={visibleCards.has(item.id)}
            />
          </div>
        ))}
      </div>

      {/* Footer */}
      <div 
        className="text-center mt-16 pt-8 border-t border-[#d4c9bc]/30"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.6s ease-out 0.4s',
        }}
      >
        <p className="text-[#b8a28c]/40 text-xs tracking-wider uppercase font-light">
            more frames to come
        </p>
      </div>
    </Layout>
  )
}

export default Frames