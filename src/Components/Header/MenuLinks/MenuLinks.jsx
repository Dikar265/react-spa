import { Link } from "react-router-dom";
import { menuLinks } from "@/Props/MenuLinks";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { useState } from "react";

export default function MenuLinks({ isMobile = false }) {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  if (isMobile) {
    return (
      <ul className="flex flex-col gap-4">
        {menuLinks.map((menuLink, idx) => (
          <li key={menuLink.name}>
            <div
              className="flex justify-between items-center cursor-pointer text-white text-lg font-medium hover:text-aquamarine-400"
              onClick={() =>
                menuLink.submenu
                  ? setOpenSubmenu(openSubmenu === idx ? null : idx)
                  : null
              }
            >
              <Link to={menuLink.link} className="flex-grow">
                {menuLink.name}
              </Link>
              {menuLink.submenu && (
                <span className="ml-2 select-none">
                  {openSubmenu === idx ? "▲" : "▼"}
                </span>
              )}
            </div>
            {menuLink.submenu && openSubmenu === idx && (
              <ul className="ml-6 mt-2 space-y-1">
                {menuLink.submenu.map((submenu) => (
                  <li key={submenu.name}>
                    <Link
                      to={submenu.link}
                      className="block text-sm text-gray-300 hover:text-aquamarine-400"
                    >
                      {submenu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    );
  }

  // Desktop unchanged
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuLinks.map((menuLink) => (
          <NavigationMenuItem key={menuLink.name}>
            {menuLink.submenu ? (
              <>
                <Link to={menuLink.link}>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:bg-transparent px-4 py-2 font-semibold transition duration-300 tracking-wide hover:text-aquamarine-400 hover:underline">
                    {menuLink.name}
                  </NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent>
                  <ul className="list-none gap-x-2.5 w-40 ">
                    {menuLink.submenu.map((submenu) => (
                      <li key={submenu.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={submenu.link}
                            className="text-sm text-black hover:text-aquamarine-400"
                          >
                            {submenu.name}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link
                  to={menuLink.link}
                  className="bg-transparent text-white hover:bg-transparent px-4 py-2 font-semibold transition duration-300 tracking-wide hover:text-aquamarine-400 hover:underline"
                >
                  {menuLink.name}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
