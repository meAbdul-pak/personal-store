import { useContext } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import CartContext from "../ContextApi/CartContext";

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  const product = products.find((item) => {
    return item.id === Number(id);
  });

  if (!product) {
    return <h1>Product nahi mila</h1>;
  }

  return (
    <>
      <div className="product-details-page">
        <div className="product-details-container">
          <div className="product-details-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-details-info">
            <p className="product-category">{product.category}</p>
            <h1>{product.name}</h1>
            <p className="product-details-price">Rs. {product.price}</p>
            <p className="product-description">
              This is a high-quality product available at
              Personal Store. Get the best quality at the best price.
            </p>

            <button
              className="details-cart-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;