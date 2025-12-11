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
      style={{ backgroundImage: 'url("/hero-banner.jpg")' }}
    >
      {/* Only the real functional search box, no extra text */}
      <div className="hero-search-wrapper">
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
