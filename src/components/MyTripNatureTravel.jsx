import React from 'react'

const MyTripNatureTravel = () => {
  return (
    <main
      id="mytrip"
      className="bg-black text-white min-h-screen scroll-mt-20 md:scroll-mt-24"
      style={{ fontFamily: 'TerminaTest, system-ui, sans-serif' }}
    >
      {/* Top hero band */}
      <section className="relative bg-white text-black py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-4 sm:px-6">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
            MyTrip Nature Travel
          </h1>
          <p className="mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base font-semibold text-yellow-500 uppercase tracking-[0.2em] sm:tracking-[0.25em]">
            Mobile Application Design
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-white opacity-90"></div>
      </section>

      {/* Dark case-study body */}
      <section className="relative bg-black py-14 sm:py-18 md:py-22 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Top row: label + CTA */}
          <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between mb-10 sm:mb-12 md:mb-16 text-xs xs:text-sm">
            <span className="font-semibold text-white mb-2 xs:mb-0">MyTrip Nature Travel</span>
            <span className="text-yellow-400 font-medium">Mobile Application Design</span>
          </div>

          {/* Center title & CTA */}
          <div className="text-center mb-14 sm:mb-18 md:mb-20">
            <button className="group inline-flex items-center justify-center px-5 sm:px-6 py-2 sm:py-2.5 border border-white/40 rounded-full text-xs xs:text-sm sm:text-base mb-5 sm:mb-6 hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black">
              <span>Click Here</span>
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
              MyTrip Nature Travel
            </h2>
          </div>

          {/* Phone mockup row (flex + responsive) */}
          <div className="flex flex-wrap items-end justify-center gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10">
            {/* Left phone */}
            <div className="w-[36%] xs:w-[32%] sm:w-[28%] md:w-[24%] lg:w-[20%] max-w-[140px] xs:max-w-[160px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[220px] xl:max-w-[240px] aspect-[9/19] rounded-[2.2rem] xs:rounded-[2.4rem] sm:rounded-[2.6rem] md:rounded-[2.8rem] border border-white/10 bg-gradient-to-b from-slate-900 to-slate-800 shadow-[0_15px_40px_rgba(0,0,0,0.7)] overflow-hidden flex items-center justify-center text-[10px] xs:text-xs sm:text-sm text-white/70 transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_50px_rgba(245,158,11,0.15)] hover:border-yellow-400/30">
              <span className="px-2 xs:px-3 text-center">Sydney Harbour • Light UI</span>
            </div>

            {/* Second phone */}
            <div className="hidden xs:flex w-[36%] xs:w-[32%] sm:w-[28%] md:w-[24%] lg:w-[20%] max-w-[140px] xs:max-w-[160px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[220px] xl:max-w-[240px] aspect-[9/19] rounded-[2.2rem] xs:rounded-[2.4rem] sm:rounded-[2.6rem] md:rounded-[2.8rem] border border-white/10 bg-gradient-to-b from-slate-950 to-slate-800 shadow-[0_15px_40px_rgba(0,0,0,0.8)] overflow-hidden items-center justify-center text-[10px] xs:text-xs sm:text-sm text-white/70 transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_50px_rgba(245,158,11,0.15)] hover:border-yellow-400/30">
              <span className="px-2 xs:px-3 text-center">Explore screen • Cards & tabs</span>
            </div>

            {/* Center phone (slightly larger) */}
            <div className="w-[44%] xs:w-[40%] sm:w-[36%] md:w-[32%] lg:w-[28%] max-w-[180px] xs:max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[360px] aspect-[9/19] rounded-[2.4rem] xs:rounded-[2.6rem] sm:rounded-[2.8rem] md:rounded-[3rem] border-2 border-white/20 bg-gradient-to-b from-slate-800 to-slate-900 shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden flex items-center justify-center text-[10px] xs:text-xs sm:text-sm md:text-base text-white/70 transition-all duration-300 hover:scale-105 hover:shadow-[0_30px_60px_rgba(245,158,11,0.2)] hover:border-yellow-400/40 z-10">
              <span className="px-3 sm:px-4 text-center">Home screen • Featured destinations</span>
            </div>

            {/* Fourth phone */}
            <div className="hidden sm:flex w-[36%] xs:w-[32%] sm:w-[28%] md:w-[24%] lg:w-[20%] max-w-[140px] xs:max-w-[160px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[220px] xl:max-w-[240px] aspect-[9/19] rounded-[2.2rem] xs:rounded-[2.4rem] sm:rounded-[2.6rem] md:rounded-[2.8rem] border border-white/10 bg-gradient-to-b from-slate-800 to-slate-700 shadow-[0_15px_40px_rgba(0,0,0,0.75)] overflow-hidden items-center justify-center text-[10px] xs:text-xs sm:text-sm text-white/70 transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_50px_rgba(245,158,11,0.15)] hover:border-yellow-400/30">
              <span className="px-2 xs:px-3 text-center">Trip details • Booking flow</span>
            </div>

            {/* Right phone */}
            <div className="hidden md:flex w-[36%] xs:w-[32%] sm:w-[28%] md:w-[24%] lg:w-[20%] max-w-[140px] xs:max-w-[160px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[220px] xl:max-w-[240px] aspect-[9/19] rounded-[2.2rem] xs:rounded-[2.4rem] sm:rounded-[2.6rem] md:rounded-[2.8rem] border border-white/10 bg-gradient-to-b from-slate-900 to-slate-800 shadow-[0_15px_40px_rgba(0,0,0,0.7)] overflow-hidden items-center justify-center text-[10px] xs:text-xs sm:text-sm text-white/70 transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_50px_rgba(245,158,11,0.15)] hover:border-yellow-400/30">
              <span className="px-2 xs:px-3 text-center">Profile & settings</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MyTripNatureTravel
