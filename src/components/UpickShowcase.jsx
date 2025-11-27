import React, { useMemo } from 'react'

const UpickShowcase = () => {
  // Phone mockup component
  const PhoneMockup = ({
    className = '',
    style = {},
    children,
    screenBg = 'bg-white',
    notch = true,
  }) => (
    <div
      className={`
        relative rounded-[2.5rem] bg-white
        shadow-[0_30px_80px_rgba(0,0,0,0.2)]
        overflow-hidden ${className}
      `}
      style={{
        aspectRatio: '9 / 19',
        ...style,
      }}
    >
      <div className={`h-full w-full ${screenBg}`}>{children}</div>
      {notch && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-2 rounded-full bg-neutral-300" />
      )}
    </div>
  )

  // Phone positions data
  const phonePositions = useMemo(
    () => [
      // Center phone - Main focus
      {
        id: 'center',
        className: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10',
        size: 'w-[70%] sm:w-[60%] md:w-[45%] max-w-[320px]',
        rotation: '',
        screenBg: 'bg-yellow-400',
        children: (
          <div className="h-full flex items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white/90" />
          </div>
        ),
      },
      // Top Left
      {
        id: 'top-left',
        className: 'top-[6%] left-[4%]',
        size: 'w-[32%] sm:w-[26%] md:w-[22%] min-w-[110px] max-w-[190px]',
        rotation: 'rotate-12',
        children: (
          <div className="h-full p-3 sm:p-4 space-y-2 sm:space-y-3">
            <div className="h-4 sm:h-5 w-3/4 rounded-md bg-neutral-200" />
            <div className="h-3 rounded bg-neutral-200" />
            <div className="h-8 sm:h-10 rounded-lg bg-neutral-200 mt-3" />
          </div>
        ),
      },
      // Top Right
      {
        id: 'top-right',
        className: 'top-[10%] right-[4%]',
        size: 'w-[34%] sm:w-[28%] md:w-[24%] min-w-[120px] max-w-[200px]',
        rotation: '-rotate-12',
        children: (
          <>
            <div className="h-14 sm:h-16 bg-yellow-400" />
            <div className="p-3 space-y-2">
              <div className="h-4 rounded bg-neutral-200" />
              <div className="h-3 rounded bg-neutral-200 w-3/4" />
            </div>
          </>
        ),
      },
      // Middle Left
      {
        id: 'middle-left',
        className: 'top-[40%] left-[2%]',
        size: 'w-[34%] sm:w-[28%] md:w-[24%] min-w-[120px] max-w-[210px]',
        rotation: '-rotate-6',
        screenBg: 'bg-yellow-100',
        children: (
          <div className="p-3">
            <div className="h-16 sm:h-20 bg-yellow-400 rounded-lg" />
            <div className="mt-3 space-y-2">
              <div className="h-3 rounded bg-yellow-200" />
              <div className="h-3 rounded bg-yellow-200 w-5/6" />
            </div>
          </div>
        ),
      },
      // Middle Right
      {
        id: 'middle-right',
        className: 'top-[36%] right-[2%]',
        size: 'w-[36%] sm:w-[30%] md:w-[26%] min-w-[130px] max-w-[230px]',
        rotation: 'rotate-8',
        children: (
          <div className="p-3 sm:p-4">
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="aspect-square rounded-lg bg-neutral-200" />
              ))}
            </div>
          </div>
        ),
      },
      // Bottom Left
      {
        id: 'bottom-left',
        className: 'bottom-[10%] left-[10%]',
        size: 'w-[32%] sm:w-[26%] md:w-[22%] min-w-[120px] max-w-[200px]',
        rotation: '-rotate-12',
        children: (
          <div className="p-3 sm:p-4">
            <div className="h-16 sm:h-20 bg-neutral-200 rounded-lg mb-2 sm:mb-3" />
            <div className="space-y-2">
              <div className="h-3 rounded bg-neutral-200" />
              <div className="h-3 rounded bg-neutral-200 w-5/6" />
            </div>
          </div>
        ),
      },
      // Bottom Right
      {
        id: 'bottom-right',
        className: 'bottom-[9%] right-[10%]',
        size: 'w-[30%] sm:w-[24%] md:w-[20%] min-w-[110px] max-w-[180px]',
        rotation: 'rotate-12',
        screenBg: 'bg-yellow-400',
        children: (
          <div className="h-full flex items-center justify-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/90" />
          </div>
        ),
      },
    ],
    [],
  )

  return (
    <section
      className="relative bg-neutral-200 py-12 sm:py-16 md:py-20 px-4 overflow-hidden"
      id="showcase"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="relative w-full"
          style={{
            height: 'min(100vh, 860px)',
            minHeight: '480px',
          }}
        >
          {phonePositions.map((phone) => (
            <div
              key={phone.id}
              className={`
                absolute ${phone.className} ${phone.size} ${phone.rotation}
                transition-all duration-500 ease-in-out
              `}
            >
              <PhoneMockup
                className={`
                  ${
                    phone.id === 'center'
                      ? 'shadow-[0_40px_100px_rgba(0,0,0,0.35)]'
                      : 'shadow-[0_25px_70px_rgba(0,0,0,0.25)]'
                  }
                  hover:scale-105 transition-transform duration-300
                `}
                screenBg={phone.screenBg}
              >
                {phone.children}
              </PhoneMockup>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UpickShowcase
