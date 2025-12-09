import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link className="nav-title" to="/">
        Home & Fashion Market
      </Link>

      <Link className="nav-cart" to="/cart">
        🛒 Cart
      </Link>
    </div>
  );
}
