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

export default function MenuLinks() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuLinks.map((menuLink) => (
          <NavigationMenuItem key={menuLink.name}>
            {menuLink.submenu ? (
              <>
                <Link to={menuLink.link}><NavigationMenuTrigger className="bg-transparent text-white hover:bg-transparent px-4 py-2 font-semibold transition duration-300 tracking-wide hover:text-aquamarine-400 hover:underline">{menuLink.name}</NavigationMenuTrigger></Link>
                <NavigationMenuContent>
                  <ul className="grid gap-2 p-4">
                    {menuLink.submenu.map((submenu) => (
                      <li key={submenu.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={submenu.link}
                            className="block px-4 py-2 text-sm text-black hover:text-aquamarine-400"
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
