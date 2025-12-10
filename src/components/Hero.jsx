// src/components/Hero.jsx
import React from "react";
import heroBanner from "../assets/hero-banner.jpg";

export default function Hero({ onSearch }) {
  const handleSearchChange = (e) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <section
      className="hero-fullpage"
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      <div className="hero-overlay" />
      <div className="hero-inner">
        <h1 className="hero-title">Nova Marketplace</h1>

        <h2 className="hero-subtitle">
          Discover Handmade, Home &amp; Fashion Treasures
        </h2>

        <p className="hero-text">
          Curated decor, textiles, apparel and unique artisan-crafted finds.
        </p>

        <div className="hero-search-wrapper">
          <input
            type="text"
            className="hero-search-input"
            placeholder="Search for products..."
            onChange={handleSearchChange}
          />
        </div>
      </div>
    </section>
  );
}
