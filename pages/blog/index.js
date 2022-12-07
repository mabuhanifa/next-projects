import Link from "next/link";
import React from "react";

export default function Blog() {
  return (
    <div>
      <h2>
        <Link href={"/"}>Go to Home</Link>
      </h2>
      Blog
    </div>
  );
}
