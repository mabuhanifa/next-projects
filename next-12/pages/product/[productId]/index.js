import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function ProductDetails() {
  const {
    query: { productId },
  } = useRouter();
  return (
    <div>
      <div>
        <h2>
          <Link href={"/"}>Go to Home</Link>
        </h2>
        <h2> This is route {productId}</h2>
      </div>
    </div>
  );
}
