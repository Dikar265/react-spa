import { Link } from "react-router-dom";
import { menuLinks } from "@/Props/MenuLinks";

export default function MenuLinks() {
  return (
    <>
      {menuLinks.map((menuLink) => (
        <div key={menuLink.name}>
          <Link
            to={menuLink.link}
            className="text-lg font-semibold hover:text-aquamarine-400 transition"
          >
            {menuLink.name}
          </Link>
        </div>
      ))}
    </>
  );
}
