import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Blogs = () => {
  return (
    <div>
      <Link href={"/blogs/1"}>Click here</Link>
    </div>
  );
};

export default Blogs;
