import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter((p) => {
    const term = searchTerm.toLowerCase();
    if (!term) return true;
    return (
      p.title.toLowerCase().includes(term) ||
      (p.description && p.description.toLowerCase().includes(term))
    );
  });

  return (
    <>
      <div className="hero">
        <h1 className="hero-title">Discover handmade & home treasures</h1>
        <p className="hero-subtitle">
          Curated décor, textiles and fashion pieces with an Etsy-inspired vibe.
        </p>

        <div className="search-bar">
          <input
            className="search-input"
            placeholder="Search for 'macrame', 'vase', 'blanket'..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="product-grid">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
        {filteredProducts.length === 0 && <p>No items match your search.</p>}
      </div>
    </>
  );
}
