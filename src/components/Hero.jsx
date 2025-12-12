// src/components/Hero.jsx
import React from "react";

export default function Hero({ onSearch }) {
  const handleSearchChange = (e) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: 'url("/hero-banner.jpg")' }} // from public/
    >
      <div className="hero-content">
        <h1 className="hero-brand">Nova Marketplace</h1>

        <h2 className="hero-tagline">
          Discover Home &amp; Fashion Treasures
        </h2>

        {/* Search box directly under the two lines of text */}
        <input
          type="text"
          className="hero-search"
          placeholder="Search products..."
          onChange={handleSearchChange}
        />
      </div>
    </section>
  );
}
