import { IconArrowRight } from "@tabler/icons-react";

export default function Newsletter() {
  return (
    <div className="relative w-full bg-aquamarine-100 py-12 px-24 flex flex-col md:flex-row items-center justify-between gap-4">
      <h3 className="text-6xl font-semibold text-center md:text-left">
        Subscribe for more news
      </h3>
      <form className="flex items-center border border-aquamarine-300 rounded-lg overflow-hidden">
        <input
          type="email"
          placeholder="Email..."
          className="px-4 py-2 outline-none w-72 md:w-80"
        />
        <button className="bg-aquamarine-200 text-black px-4 py-2 font-semibold hover:bg-aquamarine-300 transition flex items-center gap-2">
            Subscribe
          <IconArrowRight className="hidden md:block text-black" size={24} />
        </button>
      </form>
    </div>
  );
}
