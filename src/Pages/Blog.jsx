import { useState } from "react";
import BlogsCard from "../Components/BlogCard";
import BlogCategories from "../Components/Categories";
import { H1 } from "../Components/Headings";

export default function Blog() {
  const [selectedCategory, setselectedCategory] = useState(null);
  return (
    <div className="flex flex-col p-24 pr-64 pl-64">
      <H1 text={'Blog'}></H1>
      <div className="flex justify-around pt-24 gap-12">
        <BlogsCard selectedCategory={selectedCategory}/>

        <BlogCategories onCategorySelect={setselectedCategory}/>
      </div>
    </div>
  );
}
