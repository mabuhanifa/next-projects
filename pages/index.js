import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <h2>home</h2>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <br />
      <Link href="/product">
        <a>product</a>
      </Link>
    </div>
  );
}
