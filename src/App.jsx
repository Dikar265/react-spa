import AboutSection from "./Components/AboutSecction/AboutSecction";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import imgseccion2 from "./assets/secction2_img.jpg";
import { textProps } from "./Props/TextAbout";
import Testimonials from "./Components/TestimonialsSecction/TestimonialSecction";
import SliderBlog from "./Components/SliderBlog/SliderBlog";
import Calendar from "./Components/Calendar/Calendar";
import Faq from "./Components/Faq/Faq";

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

      <Testimonials h2={"What Our Members Say"} />

      <section className="flex justify-center ">
        <Calendar />

        <Faq />
      </section>

      <section className="p-52">
        <SliderBlog />
      </section>
    </>
  );
}

export default App;
