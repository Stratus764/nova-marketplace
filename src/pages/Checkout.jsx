import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { startCheckout } from "../lib/api";

export default function Checkout() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(saved);
  }, []);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePay = () => {
    if (cart.length === 0) return;
    startCheckout(cart);
  };

  return (
    <div className="checkout-page">
      <div className="checkout-panel">
        <h2>Shipping & contact</h2>
        <p style={{ color: "#7a6b5c" }}>
          For demo purposes, no real address form is required. When you click
          “Pay with Stripe”, you’ll be taken to a test checkout session.
        </p>
      </div>

      <div className="order-summary-panel">
        <h2>Order summary</h2>
        {cart.length === 0 ? (
          <p>No items in your cart.</p>
        ) : (
          <>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {cart.map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}
                >
                  <span>
                    {item.title} × {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 16,
                fontWeight: 600,
              }}
            >
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <button
              className="primary-btn"
              style={{ marginTop: 20 }}
              onClick={handlePay}
            >
              Pay with Stripe
            </button>

            <button
              className="secondary-btn"
              style={{ marginTop: 10 }}
              onClick={() => navigate("/cart")}
            >
              ← Back to cart
            </button>
          </>
        )}
      </div>
    </div>
  );
}
