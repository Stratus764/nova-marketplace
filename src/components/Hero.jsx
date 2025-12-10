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
      className="hero-banner"
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      <div className="hero-content">
        <h1 className="hero-brand">Nova Marketplace</h1>

        <h2 className="hero-tagline">
          Discover Handmade, Home &amp; Fashion Treasures
        </h2>

        <p className="hero-subtext">
          Curated decor, textiles, apparel and unique artisan-crafted finds.
        </p>

        <input
          type="text"
          className="hero-search"
          placeholder="Search for products..."
          onChange={handleSearchChange}
        />
      </div>
    </section>
  );
}
