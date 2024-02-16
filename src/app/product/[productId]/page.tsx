export default function ProductDetail( {
  params
} : {
  params: { productId: string }
}) {
  return (
    <h2>Product Detail for {params.productId}</h2>
  )
}
