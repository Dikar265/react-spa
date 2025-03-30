import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../../Props/Testimonials";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function Testimonials() {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 2, spaceBetween: 30 },
        1280: { slidesPerView: 2, spaceBetween: 30 },
      }}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000, // Change slide every 3 seconds
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="w-full h-full py-6"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="mb-12  shadow-xl rounded-2xl p-6 border max-w-md mx-auto flex flex-col justify-around h-50">
            {/* Review Text */}
            <p className="italic  text-lg">"{testimonial.review}"</p>

            {/* User Info */}
            <div className="mt-6 flex items-center space-x-4">
              {/* Avatar Placeholder */}
              <div className="w-12 h-12  rounded-full flex items-center justify-center  text-lg font-bold">
                {testimonial.name.charAt(0)}
              </div>
              <p className="font-semibold  text-lg">{testimonial.name}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
