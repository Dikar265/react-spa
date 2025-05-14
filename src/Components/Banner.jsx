import { IconArrowRight } from "@tabler/icons-react";
import { Button } from "./Button";

export default function Banner({ h1, p }) {
  return (
    <section className="bg-gradient-to-r from-red-700 to-black min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl md:text-8xl font-extrabold text-white uppercase tracking-wider">
        {h1}
      </h1>
      <p className="text-lg md:text-2xl text-gray-200 mt-6 max-w-3xl">{p}</p>

      <div className="flex flex-wrap justify-center gap-6 mt-8">
        <Button text={'Get Started'} icon={<IconArrowRight className="hidden md:block text-black" size={24} />}/>
      </div>
    </section>
  );
}
