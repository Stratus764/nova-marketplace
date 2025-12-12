// src/components/Hero.jsx
import React from "react";

function Hero({ onSearch }) {
  const handleSearchChange = (event) => {
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <section
      className="hero-banner"
      // Image is loaded from the public folder
      style={{ backgroundImage: 'url("/hero-banner.jpg")' }}
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
          placeholder="Type to search..."
          onChange={handleSearchChange}
        />
      </div>
    </section>
  );
}

export default Hero;

}
