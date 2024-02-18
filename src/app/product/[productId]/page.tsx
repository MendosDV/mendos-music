type Props = {
  params: {
    productId: string
  }
}

export const generateMetadata = ({ params }: Props) => {
  return {
    title: `Product ${params.productId}`,
  }
}

export default function ProductDetail({ params }: Props) {
  return (
    <h2>Product Detail for {params.productId}</h2>
  )
}
