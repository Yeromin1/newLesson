import { Link, useLocation, useParams } from "react-router-dom";
import { getProductById } from "../../fakeApi";

// const ProductDetails = () => {
//   const { productId } = useParams();
//   return <div>Now showing product with id - {productId}</div>;
// };

// export default ProductDetails;

export default function ProductDetails() {
  const { id } = useParams();
  const product = getProductById(id);

  const location = useLocation();
  const backLinkHref = location.state ?? "/products";

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <main>
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        alt=""
      />
      <div>
        <h2>
          Product - {product.name} - {id}
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
      </div>

      <Link to={backLinkHref}>Back to products</Link>
    </main>
  );
}
