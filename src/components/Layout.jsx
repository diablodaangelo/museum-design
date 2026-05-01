const Layout = ({ title, children }) => {
  return (
    <div className="max-w-5xl mx-auto px-6 relative binding-line">
      {title && (
        <div className="mb-14 text-center animate-page-flip">
          {/* Dekorasi atas ala buku tua */}
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-8 h-px bg-[#b8a28c]/40"></div>
            <div className="w-12 h-px bg-[#b8a28c]/60"></div>
            <div className="w-8 h-px bg-[#b8a28c]/40"></div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-light tracking-wide text-[#2c2418]">
            {title}
          </h1>
          
          <div className="manuscript-divider mt-6">
            <span className="text-[#b8a28c] text-sm italic">folio</span>
          </div>
        </div>
      )}
      <div className="animate-fade">
        {children}
      </div>
    </div>
  )
}

export default Layout