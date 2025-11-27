import React from 'react'

const Process = () => {
  return (
    <section className="relative bg-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10 sm:mb-12 text-xs sm:text-sm">
          <span className="font-semibold text-white">MyTrip Nature Travel</span>
          <span className="text-orange-500 font-medium">Mobile Application Design</span>
        </div>

        <div className="relative mb-8 sm:mb-10 md:mb-12">
          <div className="hidden md:block absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t border-white/20" />
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-1/4 w-2 h-2 rounded-full bg-white" />
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-1/2 w-2 h-2 rounded-full bg-white" />
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-3/4 w-2 h-2 rounded-full bg-white" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-8">
            <h3 className="text-white font-extrabold text-lg sm:text-xl mb-2">Q2 | Problem</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Modern travelers often face decision fatigue when gathering inspiration, comparing options, and booking trips
              across multiple apps. This increases time-to-book and reduces confidence in their choices.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-8">
            <h3 className="text-white font-extrabold text-lg sm:text-xl mb-2">Q4 | My Role</h3>
            <ul className="text-white/80 text-sm leading-relaxed list-disc pl-5 space-y-1">
              <li>UX Research and competitive analysis</li>
              <li>Information architecture and user flows</li>
              <li>UI design, prototyping, and usability testing</li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-8">
            <h3 className="text-white font-extrabold text-lg sm:text-xl mb-2">Q1 | Upick Project</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              A mobile experience that lets users explore curated destinations, view highlights, and plan nature-focused trips
              with clarity. The goal is to streamline discovery and planning in one cohesive flow.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-8">
            <h3 className="text-white font-extrabold text-lg sm:text-xl mb-2">Q3 | Solution</h3>
            <ul className="text-white/80 text-sm leading-relaxed list-disc pl-5 space-y-1">
              <li>Card-based exploration with rich imagery</li>
              <li>Clear trip details and itinerary structure</li>
              <li>Consistent UI patterns for faster decisions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process