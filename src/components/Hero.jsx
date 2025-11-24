import React from 'react'

const Hero = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden" style={{ fontFamily: 'TerminaTest, system-ui, sans-serif' }}>
      <div className="flex items-center justify-center py-16 md:py-24">
        <div className="relative h-[340px] w-[340px] sm:h-[380px] sm:w-[380px] md:h-[420px] md:w-[420px]">
          <svg
            viewBox="0 0 300 300"
            className="absolute inset-0 m-auto h-full w-full text-[#1f1f1f]"
            fill="none"
          >
            <defs>
              <path id="textCircle" d="M150,150 m-135,0 a135,135 0 1,1 270,0 a135,135 0 1,1 -270,0" />
            </defs>
            <text fill="currentColor" style={{ fontFamily: 'TerminaTest, system-ui, sans-serif', fontWeight: 700, letterSpacing: '0.35em' }}>
              <textPath href="#textCircle" startOffset="0%">
                collin manyande collin manyande collin manyande
              </textPath>
            </text>
          </svg>
          <img src="/img/light.png" alt="Light bulb" className="absolute inset-0 m-auto h-[70%] w-auto drop-shadow-[0_0_35px_rgba(245,158,11,0.7)]" />
        </div>
      </div>
    </section>
  )
}

export default Hero