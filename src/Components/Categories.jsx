import { blogs } from "@/Props/Blog";
import { Link, useSearchParams } from "react-router-dom";
import { H3 } from "./Headings";

export default function BlogCategories({ onCategorySelect }) {
  const uniqueCategories = [...new Set(blogs.map((blog) => blog.category))];
  const [categoryfilter, SetCategoryFilter] = useSearchParams();

  function clearFilter() {
    const queryParams = categoryfilter.get("category");
    if (queryParams) {
      categoryfilter.delete("category");
      SetCategoryFilter();
    }
  }
  return (
    <aside className="w-1/4 pr-6 pl-6 ">
      <div className="pb-8">
        <H3 text={'Categories'}/>
      </div>
      <ul className="space-y-5">
        {uniqueCategories.map((category) => (
          <li key={category}>
            
              <Link
                to={`/blog?category=${encodeURIComponent(category)}`}
                className="hover:text-aquamarine-700 transition-all duration-600"
              >
                {category}
              </Link>
            
          </li>
        ))}

        {onCategorySelect && (
          <li>
            <button
              onClick={clearFilter}
              className="text-sm hover:text-aquamarine-500 mt-4 text-aquamarine-800 transition"
            >
              Clear Filter
            </button>
          </li>
        )}
      </ul>
    </aside>
  );
}
