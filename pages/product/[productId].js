import { useRouter } from "next/router";
import React from "react";

export default function ProductDetails() {
  const {
    query: { productId },
  } = useRouter();
  return (
    <div>
      <div>
        <h2> This is {productId} route</h2>
      </div>
    </div>
  );
}
