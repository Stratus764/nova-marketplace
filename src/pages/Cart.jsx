import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(saved);
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleQuantityChange = (index, delta) => {
    const copy = [...cart];
    copy[index].quantity += delta;
    if (copy[index].quantity <= 0) {
      copy.splice(index, 1);
    }
    updateCart(copy);
  };

  const handleRemove = (index) => {
    const copy = [...cart];
    copy.splice(index, 1);
    updateCart(copy);
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.title} />
                <div>
                  <div className="cart-item-title">{item.title}</div>
                  <div>${item.price.toFixed(2)} each</div>
                </div>
                <div className="cart-item-controls">
                  <div className="qty-row">
                    <button
                      className="qty-btn"
                      onClick={() => handleQuantityChange(index, -1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => handleQuantityChange(index, 1)}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button
                    className="secondary-btn"
                    style={{ padding: "4px 10px", fontSize: 13 }}
                    onClick={() => handleRemove(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="cart-summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="cart-summary-row">
              <span>Estimated shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="cart-summary-total">
              Total: ${subtotal.toFixed(2)}
            </div>

            <button
              className="primary-btn"
              style={{ marginTop: 16 }}
              onClick={() => navigate("/checkout")}
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
