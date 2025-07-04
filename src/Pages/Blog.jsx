import { useState } from "react";
import BlogsCard from "../components/BlogCard";
import BlogCategories from "../components/Categories";
import { H1 } from "../components/Headings";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="flex flex-col p-8 md:p-24">
      <H1 text={"Blog"} />
      <div className="flex flex-col md:flex-row justify-around pt-12 md:pt-24 gap-12">
        <BlogsCard selectedCategory={selectedCategory} />
        <BlogCategories onCategorySelect={setSelectedCategory} />
      </div>
    </div>
  );
}
