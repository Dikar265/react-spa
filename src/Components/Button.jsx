export const Button = ({ text, icon }) => {
  //<IconArrowRight className="hidden md:block text-black" size={24} />
  return (
    <button className="flex items-center gap-2 px-5 py-3 text-black bg-aquamarine-200 rounded-lg shadow-md hover:bg-aquamarine-300 transition duration-300 font-semibold text-lg tracking-wide">
      {text}
      {icon ? <span aria-hidden="true">{icon}</span> : ""}
    </button>
  );
};

export const AButton = ({ text, href, icon }) => {
  return (
    <a
      className="text-center p-3 pr-5 pl-5 border-2 border-aquamarine-300 text-aquamarine-400 hover:bg-aquamarine-300 hover:text-white transition-all duration-300"
      href={href}
    >
      {text}
      {icon ? <span aria-hidden="true">{icon}</span> : ""}
    </a>
  );
};
