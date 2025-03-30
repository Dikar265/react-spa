import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { blogs } from "../../Props/Blog.js";

export default function SliderBlog() {
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
      className="w-full h-full"
    >
      {blogs.map((blog, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          <div className="flex flex-col justify-center card-shadow rounded-2xl h-96 border overflow-hidden relative p-4">
            <img
              src={blog.img}
              className="w-full h-56 object-cover rounded-xl"
            />

            <div className="flex flex-col justify-between items-center mt-4">
              <div className="text-lg font-semibold">{blog.name}</div>
              <div>
                <p>{blog.description}</p>
              </div>
              <div className="cursor-pointer text-xl">🚀</div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
