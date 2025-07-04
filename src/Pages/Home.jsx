import { AboutSection } from "../Components/AboutSecction";
import Banner from "../Components/Banner";
import imgseccion2 from "../assets/pexels-caio-56733.jpg";
import { textProps } from "../Props/TextAbout";
import Testimonials from "../Components/TestimonialSecction";
import { CardsServices } from "../Components/Cards";
import { SliderCards } from "../Components/Cards";

function App() {
  const sliderCards = <SliderCards />;

  return (
    <>
      <Banner
        h1={"Welcomen"}
        p={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A nisi iure commodi odio, quaerat pariatur vel consequuntur mollitia illo?"
        }
        button1={"Get Started"}
        button2={"Try for Free"}
      />

      <AboutSection
        h2={"lorem ipsum"}
        img={imgseccion2}
        texts={textProps}
        customWidget={sliderCards}
      />

      <CardsServices />
      <Testimonials h2={"What Our Members Say"} />
    </>
  );
}

export default App;
