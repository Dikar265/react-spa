import AboutSection from "./AboutSecction/AboutSecction";
import Banner from "./Banner/Banner";
import Header from "./Header/Header";
import imgseccion2 from "./assets/secction2_img.jpg";
import { textProps } from "./Props/TextAbout";
import Testimonials from "./SliderTestimonial/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Banner
        h1={"Track. Train. Transform"}
        p={"The ultimate fitness widgets to enhance your workout experience."}
        button1={"Get Started"}
        button2={"Try for Free"}
      />
      <AboutSection h2={"lorem ipsum"} img={imgseccion2} texts={textProps} />

      <section className="py-20 px-6 text-center flex flex-col items-center bg-gradient-to-b from-gray-900 to-black text-white">
  <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-wide">
    What Our Members Say
  </h2>

  <div className="max-w-4xl w-full">
    <Testimonials />
  </div>
</section>

    </>
  );
}

export default App;
