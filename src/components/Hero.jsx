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
      style={{ backgroundImage: 'url("/hero-banner.jpg")' }} // uses public/hero-banner.jpg
    >
      {/* Only the functional search bar overlay – no extra headings or text */}
      <div className="hero-search-wrapper">
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
