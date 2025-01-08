import Link from "next/link";
import React from "react";

export default function PageNotFound() {
  return (
    <>
      <h2>Page Not Found</h2>
      <h2>
        <Link href={"/"}>Go to Home</Link>
      </h2>
    </>
  );
}
