import { H1, H2 } from "../Components/Headings";

export function AboutSection({ h2, img, texts, customWidget }) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-20">
      <div className="md:w-1/2 flex justify-center">
        <img src={img} className="h-auto max-w-lg rounded-lg shadow-lg" />
      </div>

      <div className="md:w-1/2 flex flex-col">
      <H2 text={h2}/>
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

export function AboutSection2({ h1, img, texts, customWidget }) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-20">
      <div className="md:w-1/2 flex justify-center">
        <img src={img} className="h-auto max-w-lg rounded-lg shadow-lg" />
      </div>

      <div className="md:w-1/2 flex flex-col">
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
