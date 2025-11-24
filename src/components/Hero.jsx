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
    <section className="relative bg-black text-white" style={{ fontFamily: 'TerminaTest, system-ui, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h1 className="font-black tracking-tight leading-tight text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px]">
              <span className="block">Shaping the future,</span>
              <span className="block">one pixel at a time</span>
            </h1>

            <p className="mt-5 text-white/70 text-sm sm:text-base max-w-xl">
              I design thoughtful, user-first digital experiences—blending form and
              function to create products that inspire, engage, and make an impact.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <a href="#work" className="inline-flex items-center px-5 py-3 rounded bg-orange-500 hover:bg-orange-600 text-black font-medium transition-colors">
                View My Work
              </a>
              <a href="#portfolio" className="inline-flex items-center gap-2 text-white/80 hover:text-white border-b border-white/30 hover:border-white transition-colors">
                <span>Download PDF Portfolio</span>
                <FiArrowUpRight />
              </a>
            </div>
          </div>

          <div className="relative h-[260px] sm:h-[320px] md:h-[360px] lg:h-[420px] flex items-center justify-center">
            <svg
              viewBox="-20 -20 340 340"
              className="absolute inset-0 m-auto h-full w-full text-orange-400/90 z-10"
              fill="none"
              style={{ overflow: 'visible' }}
            >
              <defs>
                <path id="textCircle" pathLength="1000" d="M150,150 m-110,0 a110,150 0 1,1 220,0 a110,150 0 1,1 -220,0" />
              </defs>
              <text fill="currentColor" style={{ fontFamily: 'TerminaTest, system-ui, sans-serif', fontWeight: 700 }}>
                <textPath href="#textCircle" startOffset="0%" method="align" spacing="auto">
                  <animate attributeName="startOffset" from="0%" to="100%" dur="22s" repeatCount="indefinite" />
                  COLLIN NYAMANDE • COLLIN NYAMANDE • COLLIN NYAMANDE • COLLIN NYAMANDE • COLLIN NYAMANDE • COLLIN NYAMANDE • COLLIN NYAMANDE • COLLIN NYAMANDE • COLLIN NYAMANDE • COLLIN NYAMANDE •
                </textPath>
              </text>
              <text fill="currentColor" style={{ fontFamily: 'TerminaTest, system-ui, sans-serif', fontWeight: 700 }}>
                <textPath href="#textCircle" startOffset="-50%" method="align" spacing="auto">
                  <animate attributeName="startOffset" from="-50%" to="50%" dur="22s" repeatCount="indefinite" />
                  COLLIN NYAMANDE • COLLIN NYAMANDE • COLLIN NYAMANDE • COLLIN NYAMANDE • COLLIN NYAMANDE • COLLIN NYAMANDE • COLLIN NYAMANDE • COLLIN NYAMANDE • COLLIN NYAMANDE • COLLIN NYAMANDE •
                </textPath>
              </text>
            </svg>
            <img src="/img/light.png" alt="" className="absolute inset-0 m-auto h-[70%] w-auto drop-shadow-[0_0_35px_rgba(245,158,11,0.7)] z-0 pointer-events-none" />        
          </div>
        </div>

        <div className="mt-12 md:mt-16 flex items-center justify-center text-white/70 text-xs sm:text-sm">
          <span>Scroll down</span>
          <FiChevronDown className="ml-2" />
        </div>
      </div>
    </section>
  )
}

export default Hero