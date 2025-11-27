import React from 'react'

const Result = () => {
  return (
    <section className="relative bg-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10 sm:mb-12 text-xs sm:text-sm">
          <span className="font-semibold text-white">MyTrip Nature Travel</span>
          <span className="text-orange-500 font-medium">Mobile Application Design</span>
        </div>

        <div className="max-w-3xl">
          <h2 className="text-white font-black tracking-tight leading-tight text-4xl sm:text-5xl md:text-6xl">
            The result of the design
          </h2>
          <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed">
            The result of the MyTrip Nature Travel project was a well-designed, user-friendly mobile application
            that effectively provides a quick, pleasurable travel booking experience, with a particular emphasis on
            environmentally friendly and nature-touring destinations.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Result