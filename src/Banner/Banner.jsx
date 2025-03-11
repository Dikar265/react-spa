export default function Banner({ h1, p, button1, button2 }) {
  return (
    <section className="bg-gradient-to-r from-red-700 to-black min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl md:text-8xl font-extrabold text-white uppercase tracking-wider">
        {h1}
      </h1>
      <p className="text-lg md:text-2xl text-gray-200 mt-6 max-w-3xl">
        {p}
      </p>

      <div className="flex flex-wrap justify-center gap-6 mt-8">
        <button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg text-lg md:text-xl shadow-md hover:bg-yellow-600 transition">
          {button1}
        </button>
        <button className="bg-white text-black font-bold px-6 py-3 rounded-lg text-lg md:text-xl shadow-md hover:bg-gray-300 transition flex items-center gap-2">
          {button2} <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}
