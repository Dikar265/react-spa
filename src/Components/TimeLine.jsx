import { TimeLine } from '@/Props/TimeLine'

export default function Timeline() {
  return (
    <section className="container mx-auto w-full h-full mt-24 px-4">
  <div className="relative z-0 wrap overflow-hidden py-10 h-full">
    
    <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-aquamarine-600 bg-opacity-20 z-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>

    {TimeLine.map((step, index) => {
      const isEven = index % 2 === 1;
      return (
        <div
          key={index}
          className={`mb-8 flex flex-col md:flex-row justify-between items-center w-full ${
            isEven ? 'md:flex-row-reverse' : ''
          }`}
        >
          <div className="hidden md:block md:w-5/12"></div>

          <div className="z-10 flex items-center justify-center bg-aquamarine-300 shadow-xl w-8 h-8 rounded-full order-1 md:order-none mb-4 md:mb-0">
            <h1 className="text-black font-semibold text-lg">{index + 1}</h1>
          </div>

          <div
            className={`z-10 bg-aquamarine-${isEven ? '400' : '500'} rounded-lg shadow-xl px-6 py-4 w-full md:w-5/12`}
          >
            <h3 className="mb-3 font-bold  text-xl">{step.title}</h3>
            <p className="text-sm font-medium leading-snug tracking-wide  text-opacity-100">
              {step.description}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</section>


  )
}
