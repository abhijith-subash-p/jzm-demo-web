import { Cards } from "@/components/blocks/Card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const blogs = [
  {
    id: 1,
    title: "NOEX-CLI new version is launched with game changing features",
    subtitle: "Modern problem can solve with modern Tech",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    id: 2,
    title: "NOEX-CLI new version is launched with game changing features",
    subtitle: "Modern problem can solve with modern Tech",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    id: 2,
    title: "NOEX-CLI new version is launched with game changing features",
    subtitle: "Modern problem can solve with modern Tech",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
];

const Blogs = () => {
  return (
    <div className="container mx-auto ">
      {/* <Link href={"/blogs/1"}>Click here</Link> */}
      <div className="grid grid-cols-3 gap-4 my-10">
        {blogs.map((blog, index) => (
          <Cards key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
