import Testimonials from "./Testimonials";


export default function AboutSecction({h2}) {
  return (
    <section className="py-20 text-center flex flex-col items-center bg-gradient-to-b  ">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-wide">
        {h2}
      </h2>

      <div className="max-w-7xl w-full">
        <Testimonials />
      </div>
    </section>
  );
}
