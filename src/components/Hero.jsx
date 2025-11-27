import React from 'react'
import { FiArrowUpRight, FiChevronDown } from 'react-icons/fi'

const BulbGraphic = () => (
  <svg
    role="img"
    aria-label="Light bulb"
    viewBox="0 0 256 256"
    className="h-[70%] w-auto drop-shadow-[0_0_30px_rgba(245,158,11,0.6)]"
  >
    <defs>
      <radialGradient id="glow" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#FFF9C2" />
        <stop offset="45%" stopColor="#FDE68A" />
        <stop offset="80%" stopColor="#F59E0B" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="glass" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="55%" stopColor="#FFE59E" />
        <stop offset="100%" stopColor="#F59E0B" />
      </radialGradient>
      <linearGradient id="base" x1="0%" x2="100%">
        <stop offset="0%" stopColor="#9CA3AF" />
        <stop offset="50%" stopColor="#6B7280" />
        <stop offset="100%" stopColor="#9CA3AF" />
      </linearGradient>
    </defs>
    <circle cx="128" cy="110" r="92" fill="url(#glow)" />
    <ellipse cx="128" cy="110" rx="62" ry="78" fill="url(#glass)" opacity="0.9" />
    <ellipse cx="128" cy="110" rx="60" ry="76" fill="none" stroke="#FFFFFF" strokeOpacity="0.35" strokeWidth="2" />
    <path d="M108 120 L128 104 L148 120" fill="none" stroke="#F59E0B" strokeWidth="2" />
    <line x1="128" y1="104" x2="128" y2="92" stroke="#FBBF24" strokeWidth="2" />
    <g transform="translate(88,176)">
      <rect x="0" y="0" width="80" height="20" rx="4" fill="url(#base)" />
      <rect x="6" y="6" width="68" height="8" rx="2" fill="#111827" opacity="0.25" />
      <rect x="0" y="20" width="80" height="10" rx="4" fill="#374151" />
    </g>
  </svg>
)

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center" style={{ fontFamily: 'TerminaTest, system-ui, sans-serif' }}>
      <div className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            <div className="text-center md:text-left">
              <h1 className="font-black tracking-tight leading-tight text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                <span className="block">Shaping the future,</span>
                <span className="block">one pixel at a time</span>
              </h1>
              <p className="mt-4 sm:mt-6 text-sm xs:text-base sm:text-lg text-gray-300 max-w-lg mx-auto md:mx-0">
                I'm a product designer passionate about creating intuitive and beautiful digital experiences that solve real problems.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <a
                  href="#work"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 border border-transparent text-sm xs:text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200"
                >
                  View My Work
                  <FiArrowUpRight className="ml-2 flex-shrink-0" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-700 text-sm xs:text-base font-medium rounded-md text-white hover:bg-gray-900 transition-colors duration-200"
                >
                  Get In Touch
                </a>
              </div>
            </div>

            <div className="relative h-56 xs:h-64 sm:h-80 md:h-96 lg:h-[32rem] flex items-center justify-center mt-8 md:mt-0">
              <div className="w-full h-full max-w-md mx-auto flex items-center justify-center">
                <BulbGraphic />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
          <a
            href="#about"
            className="flex flex-col items-center text-gray-400 hover:text-yellow-400 transition-colors duration-200 group"
            aria-label="Scroll down"
          >
            <span className="text-xs sm:text-sm mb-1 group-hover:text-yellow-400 transition-colors">Scroll Down</span>
            <FiChevronDown className="animate-bounce w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero