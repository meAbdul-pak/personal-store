
import { useParams } from "react-router-dom";
import products from "../data/products";
import useCartStore from "../store/cartStore";

const ProductDetails = () => {

  const { id } = useParams();

  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product nahi mila</h1>;
  }

  return (
    <>
      <div className="product-details-page">

        <div className="product-details-container">

          <div className="product-details-image">
            <img
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="product-details-info">

            <p className="product-category">
              {product.category}
            </p>

            <h1>{product.name}</h1>

            <p className="product-details-price">
              Rs. {product.price}
            </p>

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

