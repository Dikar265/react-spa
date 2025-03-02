import { menuLinks } from "../../Props/MenuLinks";

export default function MenuLinks() {
  return (
    <ul className="flex space-x-6">
      {menuLinks.map((menuLink) => (
        <li key={menuLink.name}>
          <a
            href={menuLink.link}
            className="px-4 py-2 text-lg font-semibold text-gray-800 transition duration-300 hover:text-[#f45858] hover:underline"
          >
            {menuLink.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
