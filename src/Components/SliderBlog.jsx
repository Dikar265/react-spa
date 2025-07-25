import { Card, CardContent, CardFooter } from "@/Components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";

import { blogs } from "../Props/Blog.js";
import { Link } from "react-router-dom";
export default function SliderBlog() {
  return (
    <section className="p-12 md:p-25">
      <Carousel
        opts={{
          align: "start",
        }}
        className="flex justify-center"
      >
        <CarouselContent className="-ml-1">
          {blogs.map((blog, index) => (
            <CarouselItem key={index} className="basis-1-1 md:basis-1/5 flex justify-center">
              <div className="p-1">
                <Card className="h-full w-full">
                  <CardContent className="flex flex-col justify-center rounded-2xl overflow-hidden relative p-4 ">
                    <Link
                      to={`/blog/${blog.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      <img
                        src={blog.img}
                        className="w-full h-56 object-cover rounded-xl"
                      />
                    </Link>
                  </CardContent>
                  <CardFooter>
                    <Link
                      to={`/blog/${blog.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                    <div className="flex flex-col justify-between items-center mt-4">
                      <div className="text-lg text-aquamarine-950 font-semibold">
                        {blog.name}
                      </div>
                      <div>
                        <p className="text-aquamarine-750">
                          {blog.description}
                        </p>
                      </div>
                    </div>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
