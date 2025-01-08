export default async function ProductReview({
  params,
}: {
  params: Promise<{
    productId: string;
    reviewId: string;
  }>;
}) {
  const { productId, reviewId } = await params;
  return (
    <div>
      Review {reviewId} of {productId}
    </div>
  );
}
