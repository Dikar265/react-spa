export default function Banner({ h1, p }) {
  return (
    <section className="bg-gradient-to-r from-red-700 to-black min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 space-y-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-white uppercase tracking-wide leading-tight">
        {h1}
      </h1>
      <p className="text-base sm:text-lg md:text-2xl text-gray-200 max-w-2xl">
        {p}
      </p>
    </section>
  );
}
