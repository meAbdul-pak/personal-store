import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";

const ProductCard = ({ product }) => {

  const  addToCart  = useCartStore((state) => state.addToCart);

  return (
    <div className="product-card">

      <Link
        to={`/products/${product.id}`}
        className="product-link"
      >

        <div className="product-image">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        <h2>{product.name}</h2>

        <p>Rs : {product.price}</p>

        <p>Product Id : {product.id}</p>

      </Link>

      <button
        type="button"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>

    </div>
  );
};

export default ProductCard;