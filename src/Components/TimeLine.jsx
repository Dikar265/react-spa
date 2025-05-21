import { TimeLine } from '@/Props/TimeLine'

export default function Timeline() {
  return (
    <section className="container bg-gray-200 mx-auto w-full h-full mt-24">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-aquamarine-600 bg-opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>

        {TimeLine.map((TimeLine, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={index}
              className={`mb-8 flex justify-between items-center w-full ${
                isEven ? 'flex-row-reverse left-timeline' : 'right-timeline'
              }`}
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-aquamarine-300 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-black font-semibold text-lg">{index + 1}</h1>
              </div>
              <div
                className={`order-1 ${isEven ? 'bg-aquamarine-400' : 'bg-aquamarine-500'} rounded-lg shadow-xl w-5/12 px-6 py-4`}
              >
                <h3 className="mb-3 font-bold text-white text-xl">{TimeLine.title}</h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  {TimeLine.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
