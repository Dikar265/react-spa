import { useState, useMemo, useEffect } from "react";
import { blogs } from "@/Props/Blog";
import { Link, useSearchParams } from "react-router-dom";
import { H2 } from "./Headings";

export default function BlogsCard({ selectedCategory: selectedCategoryProp }) {
  const blogsPerPage = 5;
  const [searchParams] = useSearchParams();
  const categoryFromURL = searchParams.get("category");

  const selectedCategory = selectedCategoryProp || categoryFromURL;

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const filterBlogs = useMemo(() => {
    return selectedCategory
      ? blogs.filter((blog) => blog.category === selectedCategory)
      : blogs;
  }, [selectedCategory]);

  const totalPages = Math.ceil(filterBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const selectedBlogs = filterBlogs.slice(startIndex, startIndex + blogsPerPage);

  return (
    <div className="w-3/4">
      {selectedBlogs.length > 0 ? (
        selectedBlogs.map((blog, index) => (
          <article
            className="flex flex-col gap-4 mb-8 border-b-2 border-b-aquamarine-100 pb-12"
            key={index}
          >
            <img src={blog.img} className="bg-red-300 w-full h-96" />
            <H2 text={blog.name}/>
            <p className="line-clamp-2 text-[16px]">{blog.content}</p>
            <div className="flex items-center">
            <Link
              to={`/blog/${blog.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-center p-3 pr-5 pl-5 border-2 border-aquamarine-300 text-aquamarine-400 hover:bg-aquamarine-300 hover:text-white transition-all duration-300"
            >
              See more
            </Link>
            </div>
          </article>
        ))
      ) : (
        <p>No blogs found for this category.</p>
      )}

      <div className="flex justify-center gap-4 mt-4 text-aquamarine-950">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded disabled:opacity-50 bg-aquamarine-200 transition hover:bg-aquamarine-300"
        >
          Previous
        </button>

        <span className="px-4 py-2">
          Page {currentPage} from {totalPages}
        </span>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded disabled:opacity-50 bg-aquamarine-200 transition hover:bg-aquamarine-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}
