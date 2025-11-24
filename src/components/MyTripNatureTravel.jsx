import React from 'react'

const MyTripNatureTravel = () => {
  return (
    <main
      className="bg-black text-white min-h-screen"
      style={{ fontFamily: 'TerminaTest, system-ui, sans-serif' }}
    >
      {/* Top hero band */}
      <section className="bg-white text-black py-20 sm:py-24 md:py-28 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            MyTrip Nature Travel
          </h1>
          <p className="mt-3 text-xs sm:text-sm md:text-base font-semibold text-orange-500 uppercase tracking-[0.25em]">
            Mobile Application Design
          </p>
        </div>
      </section>

      {/* Dark case-study body */}
      <section className="relative bg-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-10 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Top row: label + CTA */}
          <div className="flex items-center justify-between mb-10 sm:mb-12 text-xs sm:text-sm">
            <span className="font-semibold text-white">MyTrip Nature Travel</span>
            <span className="text-orange-500 font-medium">Mobile Application Design</span>
          </div>

          {/* Center title & CTA */}
          <div className="text-center mb-12 sm:mb-16">
            <p className="inline-flex items-center justify-center px-5 py-2 border border-white/40 rounded-full text-xs sm:text-sm mb-4 hover:bg-white hover:text-black transition-colors cursor-pointer">
              Click Here
            </p>
            <h2 className="text-[2.4rem] sm:text-5xl md:text-6xl font-black leading-tight">
              MyTrip Nature Travel
            </h2>
          </div>

          {/* Phone mockup row (flex + responsive) */}
          <div className="flex flex-wrap items-end justify-center gap-4 sm:gap-6 md:gap-8">
            {/* Left phone */}
            <div className="w-[38%] max-w-[180px] sm:max-w-[200px] md:max-w-[230px] aspect-[9/19] rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-slate-900 to-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.75)] overflow-hidden flex items-center justify-center text-xs text-white/70">
              <span className="px-3 text-center">Sydney Harbour • Light UI</span>
            </div>

            {/* Second phone */}
            <div className="hidden sm:flex w-[38%] max-w-[180px] sm:max-w-[200px] md:max-w-[230px] aspect-[9/19] rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-slate-950 to-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.85)] overflow-hidden items-center justify-center text-xs text-white/70">
              <span className="px-3 text-center">Explore screen • Cards & tabs</span>
            </div>

            {/* Center diamond / logo */}
            <div className="w-[26%] max-w-[140px] sm:max-w-[160px] md:max-w-[190px] aspect-[9/19] rounded-[2.5rem] border border-cyan-500/40 bg-gradient-to-b from-black via-slate-900 to-black shadow-[0_20px_60px_rgba(0,0,0,0.9)] flex items-center justify-center relative overflow-hidden">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rotate-45 border-4 border-cyan-400/80 bg-gradient-to-br from-cyan-500 to-blue-600 shadow-[0_0_40px_rgba(56,189,248,0.9)]" />
            </div>

            {/* Fourth phone */}
            <div className="hidden sm:flex w-[38%] max-w-[180px] sm:max-w-[200px] md:max-w-[230px] aspect-[9/19] rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 shadow-[0_20px_50px_rgba(0,0,0,0.85)] overflow-hidden items-center justify-center text-xs text-white/70">
              <span className="px-3 text-center">Dark mode • Trip details</span>
            </div>

            {/* Right phone */}
            <div className="w-[38%] max-w-[180px] sm:max-w-[200px] md:max-w-[230px] aspect-[9/19] rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-slate-800 to-slate-950 shadow-[0_20px_50px_rgba(0,0,0,0.85)] overflow-hidden flex items-center justify-center text-xs text-white/70">
              <span className="px-3 text-center">Sydney Harbour • Full image</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MyTripNatureTravel
