import { useState } from "react";
import { blogs } from "@/Props/Blog";
import { H3 } from "./Headings";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function BlogCategories({ onCategorySelect }) {
  const uniqueCategories = [...new Set(blogs.map((blog) => blog.category))];
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function clearFilter() {
    onCategorySelect(null);
    setShowMobileMenu(false);
  }

  function handleCategoryClick(category) {
    onCategorySelect(category);
    setShowMobileMenu(false);
  }

  return (
    <>
      <div className="block md:hidden fixed top-20 left-4 z-10 w-40">
        <button
          onClick={() => setShowMobileMenu((prev) => !prev)}
          className="flex items-center gap-2 bg-aquamarine-200 text-aquamarine-900 px-4 py-2 rounded w-full justify-between shadow-lg"
        >
          Categories
          {showMobileMenu ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {showMobileMenu && (
          <ul className="mt-2 space-y-3 bg-white rounded-lg shadow-lg p-4 max-h-80 overflow-auto">
            {uniqueCategories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => handleCategoryClick(category)}
                  className="block w-full text-left hover:text-aquamarine-700 transition"
                >
                  {category}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={clearFilter}
                className="text-sm hover:text-aquamarine-500 mt-2 text-aquamarine-800 transition"
              >
                Clear Filter
              </button>
            </li>
          </ul>
        )}
      </div>

      <aside className="hidden md:block w-1/4 px-6">
        <div className="pb-8">
          <H3 text={"Categories"} />
        </div>
        <ul className="space-y-5">
          {uniqueCategories.map((category) => (
            <li key={category}>
              <button
                onClick={() => handleCategoryClick(category)}
                className="hover:text-aquamarine-700 transition"
              >
                {category}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={clearFilter}
              className="text-sm hover:text-aquamarine-500 mt-4 text-aquamarine-800 transition"
            >
              Clear Filter
            </button>
          </li>
        </ul>
      </aside>
    </>
  );
}
