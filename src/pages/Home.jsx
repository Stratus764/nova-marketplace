// src/pages/Home.jsx
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const list = Array.isArray(data) ? data : [];
        setProducts(list);

        // Derive unique categories from products
        const cats = Array.from(
          new Set(
            list
              .map((p) => p.category)
              .filter(Boolean) // drop null/undefined/empty
          )
        ).sort();

        setCategories(cats);
      })
      .catch((err) => {
        console.error("Failed to load products.json", err);
      });
  }, []);

  const filteredProducts = products.filter((p) => {
    const term = searchTerm.toLowerCase().trim();

    const matchesSearch =
      !term ||
      (p.title && p.title.toLowerCase().includes(term)) ||
      (p.description && p.description.toLowerCase().includes(term));

    const productCategory = p.category || "Other";
    const matchesCategory =
      activeCategory === "All" || productCategory === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // Build a friendly result summary
  const totalProducts = products.length;
  const resultCount = filteredProducts.length;
  const hasSearch = searchTerm.trim().length > 0;
  const hasCategory = activeCategory !== "All";

  let resultSummary = "";
  if (!totalProducts) {
    resultSummary = "Loading products…";
  } else if (!hasSearch && !hasCategory) {
    resultSummary = `Showing all ${totalProducts} products`;
  } else if (hasSearch && !hasCategory) {
    resultSummary = `Showing ${resultCount} results for “${searchTerm.trim()}”`;
  } else if (!hasSearch && hasCategory) {
    resultSummary = `Showing ${resultCount} ${activeCategory} products`;
  } else {
    resultSummary = `Showing ${resultCount} ${activeCategory} results for “${searchTerm.trim()}”`;
  }

  return (
    <>
      {/* HERO WITH BACKGROUND + SEARCH INPUT */}
      <Hero onSearch={setSearchTerm} />

      {/* CATEGORY FILTER BAR + RESULT SUMMARY */}
      <div className="catalog-header">
        <div className="category-bar">
          <button
            type="button"
            className={
              "category-pill" +
              (activeCategory === "All" ? " category-pill--active" : "")
            }
            onClick={() => setActiveCategory("All")}
          >
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={
                "category-pill" +
                (activeCategory === cat ? " category-pill--active" : "")
              }
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <p className="result-summary">{resultSummary}</p>
      </div>

      {/* PRODUCT GRID */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        {filteredProducts.length === 0 && totalProducts > 0 && (
          <p>No items match your filters.</p>
        )}
      </div>
    </>
  );
}
