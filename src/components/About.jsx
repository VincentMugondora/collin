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
      className="relative bg-black text-white"
      style={{ fontFamily: 'TerminaTest, system-ui, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 md:py-24">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            My Design Process
          </h2>

          <div className="relative mt-6 flex justify-center">
            <div className="h-px w-full max-w-3xl bg-white/10" />
            <div className="absolute -top-3">
              <span className="inline-block bg-orange-500 text-black text-xs sm:text-sm font-semibold px-4 sm:px-5 py-1 sm:py-1.5 rotate-[-4deg] shadow-[0_8px_20px_rgba(0,0,0,0.45)]">
                Design Thinking
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col items-start sm:items-center text-left sm:text-center"
            >
              <div className="flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-5">
                <span className="text-2xl sm:text-3xl" aria-hidden="true">
                  {step.icon}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-1.5 sm:mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-[14rem] sm:max-w-[16rem]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About