import Link from "next/link";
import React from "react";

export default function ProductList() {
  return (
    <div>
      <h3>ProductList</h3>
      <h2>
        <Link href={"/"}>Go to Home</Link>
      </h2>

      <h2>
        <Link href={"/product/1"}>product1/</Link>
      </h2>
      <h2>
        <Link href={"/product/2"}>product2/</Link>
      </h2>
      <h2>
        <Link href={"/product/3"} replace>product3/</Link>
      </h2>
    </div>
  );
}
