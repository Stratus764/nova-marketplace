import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => String(p.id) === String(id));
        setProduct(found || null);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    const existing = JSON.parse(localStorage.getItem("cart") || "[]");

    const index = existing.findIndex((item) => item.id === product.id);
    if (index >= 0) {
      existing[index].quantity += 1;
    } else {
      existing.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(existing));
    navigate("/cart");
  };

  if (!product) {
    return <div style={{ padding: 40 }}>Loading product…</div>;
  }

  return (
    <div className="product-page">
      <img
        src={product.image}
        alt={product.title}
        className="product-page-image"
      />

      <div className="product-page-details">
        <h1 className="product-page-title">{product.title}</h1>
        <p className="product-page-price">${product.price.toFixed(2)}</p>
        <p className="product-page-desc">{product.description}</p>

        <button className="primary-btn" onClick={handleAddToCart}>
          Add to cart
        </button>

        <button
          className="secondary-btn"
          style={{ marginTop: 10 }}
          onClick={() => navigate("/")}
        >
          ← Continue shopping
        </button>
      </div>
    </div>
  );
}
