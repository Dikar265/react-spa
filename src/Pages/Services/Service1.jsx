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
        <div className="text-center text-2xl md:text-8xl h-[60vh] content-center items-center space-y-6 bg-center bg-[url(https://companionpetmagazine.com/hs-fs/hubfs/Winter%202024/9769A_Img2.jpg?width=1800&height=1000&name=9769A_Img2.jpg)] bg-cover bg-black/50 bg-blend-darken">
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
          <p className="text-3xl md:text-5xl">lorem imstup</p>
        </div>
        <div className="flex justify-center">
          <BandCards />
        </div>
      </section>
      <section className="bg-aquamarine-100 p-5 md:p-36">
        <div className="m-1 md:m-9 bg-white p-10 md:p-25 space-y-10 md:space-y-28 gap-5">
          <h2 className="text-center text-xl md:text-9xl">lorem impsu</h2>
          <div className="flex flex-col md:grid md:grid-cols-2 sm:space-y-5 md:px-20 md:gap-10">
            <div className="md:text-left space-y-2 md:space-y-6">
              {servicetext1.map((servicetext, index) => (
                <p key={index}>{servicetext}</p>
              ))}
            </div>
            <div>
              <img
                src="/pexels-christy-rice-1208544-2353413.jpg"
                className="w-auto h-full"
              />
            </div>
          </div>
          <Underline color={"border-gray-400"} />
        </div>
      </section>
      <section className="py-10 md:py-20 divide-y-1 md:divide-x-1">
        <NumberGrid props={petBlogStats} />
      </section>
      <section className="py-10 md:py-20 px-10 md:px-20 divide-x-1 flex justify-center">
        <Acordion props={faqs} />
      </section>
    </>
  );
}
