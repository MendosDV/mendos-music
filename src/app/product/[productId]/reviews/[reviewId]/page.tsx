export default function ProductReviewsDetail({
  params,
}: {
  params: {
    productId: string,
    reviewId: string
  }
}) {
  return (
    <h2>Product { params.productId } Reviews { params.reviewId }</h2>
  )
}
