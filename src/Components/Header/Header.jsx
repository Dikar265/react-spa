import { Button } from "../Button";
import MenuLinks from "./MenuLinks/MenuLinks";
import Logo from "/src/assets/react.svg";
import { IconArrowRight } from "@tabler/icons-react";

export default function Header() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-gray-900 shadow-md sticky top-0 z-10">
      {/* Logo */}
      <div className="flex items-center">
        <img src={Logo} className="w-12 h-12" alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div className="rounded-md">
        <MenuLinks />
      </div>

      {/* Explore Button */}
      <div>
        <Button text={'Explore'} icon={<IconArrowRight className="hidden md:block text-black" size={24} />}/>
        
      </div>
    </nav>
  );
}
