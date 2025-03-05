import MenuLinks from "../Header/MenuLinks/MenuLinks";
import Logo from "../../src/assets/react.svg";

export default function Header () {

    return(
        <nav className="flex items-center justify-between px-10 py-6 bg-white shadow-md">
              <div className="flex items-center">
                <img src={Logo} className="w-12 h-12" alt="Logo" />
              </div>
        
              <div className="rounded-md">
                <MenuLinks />
              </div>
        
              <div>
                <button className="flex items-center gap-2 px-4 py-2 text-white bg-[#f45858] rounded-lg shadow-md hover:bg-[#d84646] transition duration-300">
                  <span className="text-lg">Explore</span> <span>➡️</span>
                </button>
              </div>
            </nav>
    )
}