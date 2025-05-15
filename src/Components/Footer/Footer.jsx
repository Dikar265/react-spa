import SocialMedia from "./SocialMedia/SocialMedia";
import MenuLinks from "./MenuLinks/MenuLinks";
import ContactLinks from "../ContactLinks";
import Newsletter from "./Newsletter/Newsletter";
import { Underline } from "../Underline";
import SliderBlog from "../../Components/SliderBlog"
export default function Footer() {
  return (
    <>
    <SliderBlog />
    <Newsletter/>
    <footer className="flex flex-wrap justify-between px-24 pb-12 pt-12 relative">
      <div className="flex flex-col w-full md:w-1/4 gap-2 items-center">
        <img src="img" className="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quasi
          saepe est aspernatur, consequatur non repellat ratione, accusamus
          possimus minus maxime suscipit ea doloribus, accusantium vitae natus
          temporibus sequi explicabo!
        </p>
      </div>
      <div className="flex flex-col w-full md:w-1/4 gap-2 items-center">
        <h3 className="font-bold">Quick Links</h3>
        <MenuLinks />
      </div>
      <div className="flex flex-col w-full md:w-1/4 gap-2 items-center">
        <h3 className="font-bold">Contact Us</h3>
        <ContactLinks view={'footer'} />
      </div>
      <div className="flex flex-col w-full md:w-1/4 gap-2 items-center">
        <h3 className="font-bold">Follow Us</h3>
        <SocialMedia />
      </div>
      
    </footer>
    <div className="flex flex-col items-center w-full px-6 md:px-24">
      <Underline color={'border-gray-400'}/>
        <p className="p-4">© 2025 - All Rights Reserved</p>
      </div>
    </>
  );
}
