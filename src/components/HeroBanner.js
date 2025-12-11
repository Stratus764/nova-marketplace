import React from "react";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-overlay">
        <h1 className="hero-title">Nova Marketplace</h1>

        <h2 className="hero-subtitle">
          Discover Handmade, Home & Fashion Treasures
        </h2>

        <p className="hero-text">
          Curated decor, textiles, apparel and unique artisan-crafted finds.
        </p>

        <div className="hero-search-container">
          <input
            type="text"
            placeholder="Search for products..."
            className="hero-search-input"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
