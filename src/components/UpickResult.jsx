import React from 'react'

const UpickResult = () => {
  return (
    <section className="relative bg-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10 sm:mb-12 text-xs sm:text-sm">
          <span className="font-semibold text-white">Upick Zimbabwe</span>
          <span className="text-orange-500 font-medium">Mobile Application Design</span>
        </div>

        <div className="max-w-4xl">
          <h2 className="text-white font-black tracking-tight leading-tight text-4xl sm:text-5xl md:text-6xl">
            The result of the design
          </h2>
          <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed">
            The Upick project effectively moved from concept to a fully functional application, providing a platform that was
            easy to use and addressed the main issues that drivers and cargo owners faced. We were able to develop an
            intuitive, aesthetically pleasing, and incredibly usable interface that enabled seamless interactions and
            transactions by working closely with a group of gifted designers.
          </p>
        </div>
      </div>
    </section>
  )
}

export default UpickResult
