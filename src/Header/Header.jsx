import MenuLinks from "../Header/MenuLinks/MenuLinks";
import Logo from "../../src/assets/react.svg";

export default function Header() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-gray-900 shadow-md">
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
        <button className="flex items-center gap-2 px-5 py-3 text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 transition duration-300 font-semibold text-lg tracking-wide">
          <span>Explore</span> <span className="text-xl">➡️</span>
        </button>
      </div>
    </nav>
  );
}
