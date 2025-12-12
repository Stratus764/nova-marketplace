// src/pages/Home.jsx
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.error("Failed to load products.json", err);
      });
  }, []);

  const filteredProducts = products.filter((p) => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return true;

    const title = p.title ? p.title.toLowerCase() : "";
    const desc = p.description ? p.description.toLowerCase() : "";

    return title.includes(term) || desc.includes(term);
  });

  return (
    <>
      {/* Full hero with background + search input */}
      <Hero onSearch={setSearchTerm} />

      {/* Product grid below hero */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        {filteredProducts.length === 0 && (
          <p>No items match your search.</p>
        )}
      </div>
    </>
  );
}
