import { menuLinks } from "../../Props/MenuLinks";

export default function MenuLinks() {
  return (
    <ul className="flex space-x-8">
      {menuLinks.map((menuLink) => (
        <li key={menuLink.name}>
          <a
            href={menuLink.link}
            className="px-4 py-2 text-lg font-semibold text-white transition duration-300 tracking-wide hover:text-yellow-400 hover:underline"
          >
            {menuLink.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
