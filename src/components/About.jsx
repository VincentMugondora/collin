import React from 'react'

const steps = [
  {
    title: 'Discover',
    icon: '💡',
    desc: 'Research users and gather insights.',
  },
  {
    title: 'Define',
    icon: '🎯',
    desc: 'Pinpoint the core problem and set clear design goals.',
  },
  {
    title: 'Ideate',
    icon: '🧠',
    desc: 'Explore creative ideas and brainstorm possible solutions.',
  },
  {
    title: 'Prototype',
    icon: '📐',
    desc: 'Build quick models to test concepts and interactions.',
  },
  {
    title: 'Deliver',
    icon: '🚀',
    desc: 'Refine, finalize, and hand over polished designs.',
  },
]

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-black text-white py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32"
      style={{ fontFamily: 'TerminaTest, system-ui, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">
            My Design Process
          </h2>

          <div className="relative mt-6 sm:mt-8 flex justify-center">
            <div className="h-px w-full max-w-3xl bg-white/10" />
            <div className="absolute -top-3">
              <span className="inline-block bg-yellow-400 text-black text-xs xs:text-sm font-semibold px-4 xs:px-5 py-1 xs:py-1.5 -rotate-2 transform shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
                Design Thinking
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative p-5 sm:p-6 md:p-7 lg:p-6 xl:p-8 bg-gray-900/50 rounded-xl border border-white/5 hover:border-yellow-400/30 transition-all duration-300 group hover:shadow-[0_8px_30px_rgba(245,158,11,0.1)]"
            >
              <div className="absolute -top-3 -right-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-yellow-400 flex items-center justify-center text-black text-sm sm:text-base font-bold">
                {index + 1}
              </div>
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{step.title}</h3>
              <p className="text-gray-300/90 text-sm sm:text-[15px] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About