import { useRouter } from "next/router";
import React from "react";

export default function ReviewId() {
  const {
    query: { productId, reviewId },
  } = useRouter();

  return <div>Review for {reviewId} for product{productId}</div>;
}
