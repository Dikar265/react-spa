import { BandCards } from "../../Components/Cards";
import { Underline } from "../../Components/Underline";
import NumberGrid from "../../Components/NumberGrid";
import petBlogStats from "../../Props/Numbers";
import { servicetext1 } from "../../Props/TextAbout";
import { Acordion } from "../../Components/Accordion";
import { faqs } from "@/Props/Faq";

export default function Service1() {
  return (
    <>
      <section>
        <div className="text-center text-8xl px-96 h-[60vh] content-center space-y-6">
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
          <p className="text-5xl">lorem imstup</p>
        </div>
        <div className="flex justify-center">
          <BandCards />
        </div>
      </section>
      <section className="bg-aquamarine-100 p-36">
        <div className="m-9 bg-white p-25 space-y-28 gap-5">
          <h2 className="text-center text-9xl">lorem impsu</h2>
          <div className="grid grid-cols-2 px-20 gap-10">
            <div className="text-left space-y-6">
              {servicetext1.map((servicetext, index) => (
                <p key={index}>{servicetext}</p>
              ))}
            </div>
            <div>
              <img
                src="/src/assets/pexels-christy-rice-1208544-2353413.jpg"
                className="w-auto h-full "
              />
            </div>
          </div>
          <Underline color={"border-gray-400"} />
        </div>
      </section>
      <section className="py-20 divide-x-1">
        <NumberGrid props={petBlogStats} />
      </section>
      <section className="py-20 px-20 divide-x-1 flex justify-center">
        <Acordion props={faqs} />
      </section>
    </>
  );
}
