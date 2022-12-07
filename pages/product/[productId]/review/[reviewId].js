import { useRouter } from "next/router";
import React from "react";

export default function ReviewId() {
  const {
    query: { productId, reviewId },
  } = useRouter();
  console.log(productId, reviewId);

  return <div>ReviewId</div>;
}
