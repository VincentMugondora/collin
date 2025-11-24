import React from 'react'

const Hero = () => {
  return (
    <section className="relative bg-black text-white" style={{ fontFamily: 'TerminaTest, system-ui, sans-serif' }}>
      <div className="flex items-center justify-center py-16 md:py-24">
        <div className="relative h-[340px] w-[340px] sm:h-[380px] sm:w-[380px] md:h-[420px] md:w-[420px]">
          <svg
            viewBox="-20 -20 340 340"
            className="absolute inset-0 m-auto h-full w-full text-[#1f1f1f] z-10"
            fill="none"
            style={{ overflow: 'visible' }}
          >
            <defs>
              <path id="textcircle" pathLength="1000" d="M150,150 m-110,0 a110,150 0 1,1 220,0 a110,150 0 1,1 -220,0" />
            </defs>
            <text fill="currentColor" style={{ fontFamily: 'TerminaTest, system-ui, sans-serif', fontWeight: 700 }}>
              <textPath href="#textcircle" startOffset="0%" method="align" spacing="auto">
                <animate attributeName="startOffset" from="0%" to="100%" dur="22s" repeatCount="indefinite" />
                collin manyande • collin manyande • collin manyande • collin manyande • collin manyande • collin manyande • collin manyande • collin manyande • collin manyande • collin manyande •
              </textPath>
            </text>
          </svg>
          <img src="/img/light.png" alt="" className="absolute inset-0 m-auto h-[70%] w-auto drop-shadow-[0_0_35px_rgba(245,158,11,0.7)] z-0 pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

export default Hero