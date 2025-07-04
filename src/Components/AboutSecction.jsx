import { H1, H2 } from "../Components/Headings";

export function AboutSection({ h2, img, texts, customWidget }) {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-24 py-16 gap-10">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={img}
          alt="About section"
          className="md:w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg"
        />
      </div>
      {/* Texto y contenido */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <H2 text={h2} />
        <div className="py-6 space-y-4 text-sm sm:text-base leading-relaxed">
          {texts.map((text, index) => (
            <p key={index} className="text-justify">{text}</p>
          ))}
        </div>
        <div className="mt-6 w-full">
          {customWidget}
        </div>
      </div>

      {/* Imagen */}
      
    </section>
  );
}


export function AboutSection2({ h1, img, texts, customWidget }) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-20">
      <div className="md:w-1/2 flex justify-center">
        <img src={img} className="md:w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg" />
      </div>

      <div className="md:w-1/2 flex flex-col pt-5 md:pt-0">
      <H1 text={h1}></H1>
        <div className="py-6 text-base leading-7">
          {texts.map((text, index) => (
            <p key={index} className="text-justify mb-4">{text}</p>
          ))}
        </div>

        <div className="mt-6">
          {customWidget}
        </div>
      </div>
    </section>
  );
}
