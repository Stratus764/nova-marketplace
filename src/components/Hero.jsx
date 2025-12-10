export default function Hero({ onSearch }) {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1 className="hero-brand">Nova-Marketplace</h1>
        <h2 className="hero-tagline">Discover Handmade, Home & Fashion Treasures</h2>

        <p className="hero-subtext">
          Curated décor, textiles, apparel and unique artisan-crafted finds.
        </p>

        <input
          className="hero-search"
          placeholder="Search for products..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
