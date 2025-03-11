import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function SliderCards({ cardsProps }) {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
        1280: { slidesPerView: 4, spaceBetween: 30 },
      }}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="w-full h-full py-6"
    >
      {cardsProps.map((cardsProp, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl p-6 flex flex-col items-center text-center h-[250px] shadow-xl hover:shadow-2xl mb-10">
            {/* Icon */}
            <div className="text-7xl text-red-500 mb-4">{cardsProp.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white uppercase tracking-wide">
              {cardsProp.tittle}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm mt-3 px-4">
              {cardsProp.description}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
