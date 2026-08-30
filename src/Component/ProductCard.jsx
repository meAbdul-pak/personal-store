import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../ContextApi/CartContext";

const ProductCard = ({ product }) => {

  const { addToCart } = useContext(CartContext);

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