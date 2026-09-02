
import useCartStore from "../store/cartStore";

const Cart = () => {

  const cart = useCartStore((state) => state.cart);

  const increaseQuantity = useCartStore(
    (state) => state.increaseQuantity
  );

  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
  );

  const removeFromCart = useCartStore(
    (state) => state.removeFromCart
  );

  const totalAmount = cart.reduce(
    (total, product) =>
      total + product.price * product.quantity,
    0
  );

  return (
    <div className="cart-page">

      <h1>My Cart</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">
          Your cart is empty.
        </p>
      ) : (

        <div className="cart-container">

          {cart.map((product) => (

            <div
              className="cart-item"
              key={product.id}
            >

              <img
                src={product.image}
                alt={product.name}
                className="cart-item-image"
              />

              <div className="cart-item-info">

                <h2>{product.name}</h2>

                <p>
                  Rs. {product.price}
                </p>

                <button
                  onClick={() =>
                    decreaseQuantity(product.id)
                  }
                >
                  -
                </button>

                <span>
                  {product.quantity}
                </span>

                <button
                  onClick={() =>
                    increaseQuantity(product.id)
                  }
                >
                  +
                </button>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(product.id)
                  }
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

          <div className="cart-total">
            <h2>
              Total Amount: Rs. {totalAmount}
            </h2>
          </div>

        </div>

      )}

    </div>
  );
};

export default Cart;

