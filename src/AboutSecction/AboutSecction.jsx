import SliderCards from '../SliderCards/Cards';
import { cards } from '../Props/Cards.jsx';

export default function AboutSection({ h2, img, texts }) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-20 bg-[#1a1a1a] text-white">
      <div className="md:w-1/2 flex justify-center">
        <img src={img} className="h-auto max-w-lg rounded-lg shadow-lg" />
      </div>

      <div className="md:w-1/2 flex flex-col">
        <h2 className="text-4xl md:text-6xl capitalize font-bold">{h2}</h2>
        <div className="py-6 text-gray-300 text-base leading-7">
          {texts.map((text, index) => (
            <p key={index} className="text-justify mb-4">{text}</p>
          ))}
        </div>

        <div className="mt-6">
          <SliderCards cardsProps={cards} />
        </div>
      </div>
    </section>
  );
}
