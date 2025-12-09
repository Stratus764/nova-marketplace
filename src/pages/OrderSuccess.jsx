import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function OrderSuccess() {
  // Optional: clear cart on success
  useEffect(() => {
    localStorage.removeItem("cart");
  }, []);

  return (
    <div className="success-page">
      <div className="success-icon">✅</div>
      <h1 className="success-title">Thank you for your order!</h1>
      <p style={{ color: "#7a6b5c" }}>
        Your payment was successful. A confirmation email from Stripe’s test
        checkout will be sent if configured.
      </p>

      <Link to="/">
        <button className="primary-btn" style={{ maxWidth: 260, marginTop: 20 }}>
          Continue shopping
        </button>
      </Link>
    </div>
  );
}
