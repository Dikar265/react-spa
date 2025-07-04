import { IconArrowRight } from "@tabler/icons-react";

export default function Newsletter() {
  return (
    <div className="relative w-full bg-aquamarine-100 py-12 px-6 md:px-24 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
    
      <h3 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-center ">
        Subscribe for more news
      </h3>
      <form className="flex w-full md:max-w-md max-w-none items-center border border-aquamarine-300 rounded-lg overflow-hidden">
        <input
          type="email"
          placeholder="Email..."
          className="flex-grow px-4 py-2 outline-none text-base md:text-lg"
        />
        <button className="bg-aquamarine-200 text-black px-4 py-3 font-semibold hover:bg-aquamarine-300 transition flex">
          Subscribe
          <IconArrowRight className="hidden md:block text-black" size={24} />
        </button>
      </form>
    </div>
  );
}
