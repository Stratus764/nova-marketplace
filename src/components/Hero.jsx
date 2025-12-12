// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section
      className="hero-banner"
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

        {/* ONE real search box only */}
        <input
          type="text"
          className="hero-search"
          placeholder="Type to search..."
        />
      </div>
    </section>
  );
}
