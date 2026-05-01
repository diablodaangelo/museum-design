import { useState, useEffect } from 'react'
import Layout from '../components/Layout'

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

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
    <Layout title="ABOUT">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .skill-tag {
          transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }

        .skill-tag:hover {
          transform: translateY(-2px);
          background-color: #b8a28c;
          color: #f5f0e8;
        }

        .social-link {
          transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }

        .social-link:hover {
          transform: translateY(-2px);
          color: #2c2418;
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
          curator & creative
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

      {/* Content Grid */}
      <div className="max-w-4xl mx-auto">
        {/* Introduction Card */}
        <div 
          className="bg-[#f5f0e8] border border-[#e0d6c8] rounded-sm p-8 mb-8"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) 0.2s, transform 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) 0.2s`,
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-[#b8a28c]/40" />
            <span className="text-[#8b7355] text-xs tracking-[0.2em] uppercase font-light">introduction</span>
          </div>
          
          <p className="text-[#2c2418] text-lg leading-relaxed mb-4">
            Pajar Ramdani, atau lebih dikenal sebagai <span className="italic text-[#8b7355]">Pajar</span>.
          </p>
          
          <p className="text-[#5c4b38] leading-relaxed mb-4">
            Seorang siswa SMK Amaliah 1 & 2 Ciawi, Bogor, yang memiliki ketertarikan besar pada 
            dunia desain dan pengembangan web. Meski masih terbilang amatir dalam desain, 
            antusiasme untuk terus belajar dan bereksperimen tidak pernah padam.
          </p>
          
          <p className="text-[#5c4b38] leading-relaxed">
            Perjalanan kreatif dimulai sejak SD kelas 1 — saat pertama kali mencoba mengedit video. 
            Kini, keterampilan tersebut berkembang ke berbagai medium: dari poster, motion graphics, 
            hingga membangun website (walaupun seringkali dibantu AI untuk memahami alur dan logika kode).
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Interests */}
          <div 
            className="bg-[#f5f0e8] border border-[#e0d6c8] rounded-sm p-6"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateX(0)' : 'translateX(-20px)',
              transition: `opacity 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) 0.3s, transform 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) 0.3s`,
            }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[#8b7355] text-xl">*</span>
              <h3 className="text-lg font-light tracking-wide text-[#2c2418]">Interests</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-[#2c2418] font-medium text-sm mb-1">Gaming</p>
                <p className="text-[#8b7355] text-sm leading-relaxed">
                  Menikmati game dengan cerita yang kuat (story-driven), tapi sesekali bermain online untuk mabar bersama teman.
                </p>
              </div>
              <div>
                <p className="text-[#2c2418] font-medium text-sm mb-1">Design</p>
                <p className="text-[#8b7355] text-sm leading-relaxed">
                  Tertarik pada desain poster, graphic design, dan eksplorasi visual meskipun masih terus belajar.
                </p>
              </div>
              <div>
                <p className="text-[#2c2418] font-medium text-sm mb-1">Video Editing</p>
                <p className="text-[#8b7355] text-sm leading-relaxed">
                  Dimulai sejak SD kelas 1, kini sesekali tetap mengedit — sebuah keterampilan yang tetap dicintai meski jarang dipraktikkan.
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div 
            className="bg-[#f5f0e8] border border-[#e0d6c8] rounded-sm p-6"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateX(0)' : 'translateX(20px)',
              transition: `opacity 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) 0.4s, transform 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) 0.4s`,
            }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[#8b7355] text-xl">*</span>
              <h3 className="text-lg font-light tracking-wide text-[#2c2418]">Toolkit</h3>
            </div>
            
            <p className="text-[#2c2418] font-medium text-sm mb-2">Design & Editing</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {['Illustrator', 'Photoshop', 'Figma', 'Pixellab', 'Picsart', 'Kinemaster', 'CapCut', 'Alight Motion'].map((tool) => (
                <span key={tool} className="skill-tag text-[#8b7355] text-xs border border-[#d4c9bc] px-3 py-1 rounded-full transition-all duration-300 cursor-default">
                  {tool}
                </span>
              ))}
            </div>

            <p className="text-[#2c2418] font-medium text-sm mb-2">Web Development</p>
            <div className="flex flex-wrap gap-2">
              {['Laravel', 'JavaScript', 'PHP Native', 'MySQL', 'React.js'].map((tool) => (
                <span key={tool} className="skill-tag text-[#8b7355] text-xs border border-[#d4c9bc] px-3 py-1 rounded-full transition-all duration-300 cursor-default">
                  {tool}
                </span>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-[#e0d6c8]">
              <p className="text-[#b8a28c]/60 text-xs italic flex items-center gap-1">
                <span></span> 
                Seringkali dibantu AI untuk memahami alur dan logika kode — karena percaya bahwa belajar tidak harus sendirian.
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div 
          className="bg-[#f5f0e8]/50 border border-[#e0d6c8] rounded-sm p-6 text-center mb-8"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) 0.5s, transform 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) 0.5s`,
          }}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-px bg-[#b8a28c]/30" />
            <span className="text-[#8b7355] text-xs tracking-[0.2em] uppercase font-light">note</span>
            <div className="w-8 h-px bg-[#b8a28c]/30" />
          </div>
          <p className="text-[#5c4b38] text-sm italic leading-relaxed">
            "Tidak perlu menjadi ahli untuk mulai berkarya. Cukup punya rasa ingin tahu, 
            keberanian untuk mencoba, dan kemauan untuk terus belajar — AI pun bisa menjadi teman perjalanan."
          </p>
          <p className="text-[#b8a28c]/50 text-xs mt-3 tracking-wider">
            — Pajar Ramdani
          </p>
        </div>

        {/* Social Links Section */}
        <div 
          className="text-center pt-4 pb-8"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: `opacity 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) 0.6s`,
          }}
        >
          <p className="text-[#8b7355] text-[10px] tracking-[0.2em] uppercase font-light mb-4">
            find me elsewhere
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
                  transition: `opacity 0.4s ease-out ${0.6 + idx * 0.05}s, transform 0.4s ease-out ${0.6 + idx * 0.05}s`,
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
      </div>

      {/* Footer */}
      <div 
        className="text-center mt-8 pt-8 border-t border-[#d4c9bc]/30"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: `opacity 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) 0.7s`,
        }}
      >
        <p className="text-[#b8a28c]/40 text-[10px] tracking-[0.25em] uppercase font-light">
          currently based in Bogor • smk amaliah 1 & 2 ciawi
        </p>
      </div>
    </Layout>
  )
}

export default About