import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </Link>

      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>

        <Link to={`/product/${product.id}`}>
          <button className="view-btn">View Item</button>
        </Link>
      </div>
    </div>
  );
}
