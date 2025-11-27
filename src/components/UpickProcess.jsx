import React from 'react'

const UpickProcess = () => {
  return (
    <section className="relative bg-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10 sm:mb-12 text-xs sm:text-sm">
          <span className="font-semibold text-white">Upick Zimbabwe</span>
          <span className="text-orange-500 font-medium">Mobile Application Design</span>
        </div>

        <div className="relative mb-8 sm:mb-10 md:mb-12">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t border-white/20" />
          <div className="absolute top-1/2 -translate-y-1/2 left-[12.5%] w-2 h-2 rounded-full bg-white" />
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 w-2 h-2 rounded-full bg-white" />
          <div className="absolute top-1/2 -translate-y-1/2 left-[87.5%] w-2 h-2 rounded-full bg-white" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          <div className="md:pr-8">
            <h3 className="text-white font-extrabold text-lg sm:text-xl mb-2">Q2 | Problem</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              The logistics and cargo transport industry, particularly in emerging markets and high-traffic regions,
              faces delivery bottlenecks, inefficient matching of cargo with drivers, and poor transparency in
              operations. These issues slow fulfillment, reduce confidence, and inflate operational costs.
            </p>
          </div>

          <div className="md:pl-8 md:border-s md:border-white/20">
            <h3 className="text-white font-extrabold text-lg sm:text-xl mb-2">Q4 | My Role</h3>
            <ul className="text-white/80 text-sm leading-relaxed list-disc pl-5 space-y-1">
              <li>UX research, competitor benchmarking, and problem definition</li>
              <li>Information architecture and end-to-end user flows</li>
              <li>Wireframes, UI design system, and interactive prototypes</li>
              <li>Usability testing, insights, and iterative improvements</li>
            </ul>
          </div>

          <div className="md:pr-8 md:pt-8 md:border-t md:border-white/20">
            <h3 className="text-white font-extrabold text-lg sm:text-xl mb-2">Q1 | Upick Project</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Cargo owners and drivers can easily interact with Upick, a mobile-based cargo booking platform. Through
              Upick, loads are posted and matched to verified drivers, with support for pricing, tracking, and simple
              communication. The goal is to enhance efficiency, transparency, and profitability across the logistics
              journey.
            </p>
          </div>

          <div className="md:pl-8 md:pt-8 md:border-s md:border-t md:border-white/20">
            <h3 className="text-white font-extrabold text-lg sm:text-xl mb-2">Q3 | Solution</h3>
            <ul className="text-white/80 text-sm leading-relaxed list-disc pl-5 space-y-1">
              <li>Fast cargo posting and intelligent driver matching</li>
              <li>Driver onboarding, KYC, and profile management</li>
              <li>Real-time trip tracking, status updates, and notifications</li>
              <li>Pricing, fees, and wallet payouts for transparent handling</li>
              <li>Ratings, reviews, and in-app chat for trust and service</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UpickProcess
