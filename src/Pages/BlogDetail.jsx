import { useParams } from "react-router-dom";
import { blogs } from "@/Props/Blog";
import BlogCategories from "../Components/Categories";
import { Link } from "react-router-dom";
import { H1, H2 } from "../Components/Headings";

export default function BlogDetail() {
  const { slug } = useParams();

  const blog = blogs.find(
    (b) => b.name.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!blog) return <p>Blog not found</p>;

  return (
    <>
      <div
        className={`flex justify-center items-center h-[30vw] bg-[url(${blog.img})] bg-cover bg-center`}
      >
        <H1 text={blog.name}/>
      </div>
      <div className="flex w-full bg-aquamarine-100 p-9 max-w-7xl ml-auto mr-auto -mt-12 rounded-lg mb-16">
        <article className="p-9 w-3/4 ">
        <H2 text={blog.name}/>
        <div className="flex items-center gap-2 mt-1.5">
          <Link
            to={`/blog?category=${encodeURIComponent(blog.category)}`}
            className="rounded-full px-2 py-0.5 text-xs font-medium bg-aquamarine-950 text-aquamarine-100 border-aquamarine-800"
          >
            {blog.category}
          </Link>
          
          </div>
          <p className="text-gray-700 mt-4">{blog.content}</p>
        </article>
        <BlogCategories />
      </div>
    </>
  );
}
