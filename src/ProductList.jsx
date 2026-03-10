import { Link } from "react-router-dom";
import s from "./ProductList.module.css";

export const ProductList = ({ products }) => {
  return (
    <div className={s.list}>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`${product.id}`}>
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt=""
            />
            <h3>{product.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};
