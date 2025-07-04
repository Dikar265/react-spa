import { useState } from "react";
import MenuLinks from "./MenuLinks/MenuLinks";
import Logo from "/src/assets/react.svg";
import { Menu, X } from "lucide-react"; // íconos

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 md:px-20 py-4 bg-gray-900 shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src={Logo} className="w-10 h-10" alt="Logo" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:block">
        <MenuLinks />
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-800 p-4 md:hidden">
          <MenuLinks isMobile />
        </div>
      )}
    </nav>
  );
}
