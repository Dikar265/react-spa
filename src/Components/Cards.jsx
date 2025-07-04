import { useRef } from "react";
import { cards, vetServices, logos } from "@/Props/Cards.jsx";
import { IconCircleArrowRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/Components/ui/card";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

useEmblaCarousel.globalOptions = { loop: true };

export const SliderCards = () => {
  return (
    <div className="p-12 md:p-25">
    <Carousel
      opts={{
        align: "start",
      }}
      className="flex justify-center"
    >
      <CarouselContent className="-ml-1">
        {cards.map((card, index) => (
          <CarouselItem key={index} className="basis-1/1 md:basis-1/3 flex justify-center">
            <div className="p-1">
              <Card className="bg-gradient-to-b rounded-2xl p-6 flex flex-col items-center text-center h-[250px] shadow-xl mb-10 bg-aquamarine-300">
                <CardContent>
                  <div className="text-7xl mb-4 justify-center flex">
                    {card.icon}
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-wide text-aquamarine-950">
                    {card.tittle}
                  </h3>

                  <p className="text-xs md:text-sm mt-3 px-4 text-aquamarine-800">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext />
    </Carousel>
    </div>
  );
};

export const CardsServices = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 ">
      {vetServices.map((vetService, index) => (
        <div
          key={index}
          className="relative flex flex-col m-10 rounded-lg shadow-lg overflow-hidden group"
        >
          <Link to={vetService.link}>
            <img
              src={vetService.img}
              className="w-full h-98 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="p-6 text-white hover:text-aquamarine-300 transition inset-x-0 bottom-0 absolute flex justify-between bg-gradient-to-t from-slate-900 to-100%">
              <div>
                <h3 className="text-xl font-bold mb-2">{vetService.tittle}</h3>
                <p className="text-sm">{vetService.description}</p>
              </div>
              <div className="flex items-center">
                <IconCircleArrowRight size={32} />
              </div>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};

export const BandCards = () => {
  const plugin = useRef(Autoplay({ delay: 1500, stopOnInteraction: true }));
  return (
    <Carousel
      plugins={[plugin.current]}
      className="flex justify-center max-w-9/10"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {logos.map((logo, index) => (
          <CarouselItem key={index} className="basis-1/3 md:basis-1/8 flex justify-center">
              
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <a href={logo.link} target="_blanck">
                    <img className="h-auto w-80 grayscale" src={logo.img} />
                  </a>
                </CardContent>
              
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
