import { Card, CardContent, CardFooter } from "@/Components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
import { testimonials } from "../Props/Testimonials";

export default function Testimonials() {
  return (
    <div className="p-12 md:p-25">
    <Carousel
      opts={{
        align: "start",
      }}
      className="flex justify-center "
    >
      <CarouselContent className="-ml-1">
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="basis-1/1 md:basis-1/3 flex justify-center">
            <div className="p-1">
              <Card className="h-full w-full bg-aquamarine-200  rounded-2xl p-6 border border-aquamarine-300 max-w-md mx-auto flex flex-col justify-around ">
                <CardContent className="flex flex-col justify-center rounded-2xl overflow-hidden relative p-4 ">
                  <p className="italic text-lg text-aquamarine-950">
                    "{testimonial.review}"
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="font-semibold text-lg text-aquamarine-800">
                    {testimonial.name}
                  </p>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  );
}
