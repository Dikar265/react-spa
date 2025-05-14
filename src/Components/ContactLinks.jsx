import { socialsMedia } from "@/Props/Contact";

export default function ContactLinks({ view }) {
  const isPage = view === "Page";

  return (
    <>
      <ul className={`flex flex-col gap-2`}>
        {socialsMedia.map((socialMedia) => (
          <a href={socialMedia.Link}>
            <li
              key={socialMedia.Name}
              className={`transition duration-300 hover:text-aquamarine-400 flex items-center ${
                isPage ? "bg-aquamarine-950 text-white transition rounded-xl" : "gap-3"
              }`}
            >
              <div className={`${isPage ? "p-5" : ""}`}>{socialMedia.Icon}</div>
              <div
                className={`flex items-center text-lg font-semibold ${
                  isPage ? "py-5 " : ""
                }`}
              >
                {socialMedia.Name}
              </div>
            </li>
          </a>
        ))}
      </ul>
    </>
  );
}
