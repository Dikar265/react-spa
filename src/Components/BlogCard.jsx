import { useState, useMemo, useEffect } from "react";
import { blogs } from "@/Props/Blog";
import { Link, useSearchParams } from "react-router-dom";
import { H2 } from "./Headings";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/Components/ui/pagination";

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
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
      {selectedBlogs.length > 0 ? (
        selectedBlogs.map((blog, index) => (
          <article
            className="flex flex-col gap-4 mb-10 border-b border-aquamarine-100 pb-8"
            key={index}
          >
            <img
              src={blog.img}
              alt={blog.name}
              className="w-full h-[200px] sm:h-[250px] md:h-96 object-cover rounded-lg"
            />
            <H2 text={blog.name} />
            <p className="line-clamp-2 text-sm sm:text-base text-gray-700">{blog.content}</p>
            <div className="mt-2">
              <Link
                to={`/blog/${blog.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="inline-block text-center px-5 py-2 border-2 border-aquamarine-300 text-aquamarine-400 hover:bg-aquamarine-300 hover:text-white transition-all duration-300 text-sm sm:text-base"
              >
                See more
              </Link>
            </div>
          </article>
        ))
      ) : (
        <p className="text-center py-10">No blogs found for this category.</p>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  isActive={currentPage === index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
