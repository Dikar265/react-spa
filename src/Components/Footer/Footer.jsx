import SocialMedia from "./SocialMedia/SocialMedia";
import MenuLinks from "./MenuLinks/MenuLinks";
import ContactLinks from "../ContactLinks";
import Newsletter from "./Newsletter/Newsletter";
import { Underline } from "../Underline";
import SliderBlog from "../../Components/SliderBlog";

export default function Footer() {
  return (
    <>
      <SliderBlog />
      <Newsletter />
      <footer className="flex flex-col md:flex-row flex-wrap justify-between px-6 md:px-24 pb-12 pt-12 relative gap-10 md:gap-0">
        <div className="flex flex-col w-full md:w-1/4 gap-4 items-center md:items-start text-center md:text-left">
          <img src="img" alt="Logo" className="max-w-xs" />
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quasi
            saepe est aspernatur, consequatur non repellat ratione, accusamus
            possimus minus maxime suscipit ea doloribus, accusantium vitae natus
            temporibus sequi explicabo!
          </p>
        </div>

        <div className="flex flex-col w-full md:w-1/4 gap-4 items-center md:items-start text-center md:text-left">
          <h3 className="font-bold text-lg">Quick Links</h3>
          <MenuLinks />
        </div>

        <div className="flex flex-col w-full md:w-1/4 gap-4 items-center md:items-start text-center md:text-left">
          <h3 className="font-bold text-lg">Contact Us</h3>
          <ContactLinks view={"footer"} />
        </div>

        <div className="flex flex-col w-full md:w-1/4 gap-4 items-center md:items-start text-center md:text-left">
          <h3 className="font-bold text-lg">Follow Us</h3>
          <SocialMedia />
        </div>
      </footer>

      <div className="flex flex-col items-center w-full px-6 md:px-24">
        <Underline color={"border-gray-400"} />
        <p className="p-4 text-center text-sm md:text-base">
          © 2025 - All Rights Reserved
        </p>
      </div>
    </>
  );
}
