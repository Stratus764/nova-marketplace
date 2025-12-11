import heroImage from "../assets/hero-banner.png";

export default function Home() {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          filter: "brightness(65%)", // darkens for text contrast
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          Nova Marketplace
        </h1>

        <h2 className="text-2xl md:text-3xl font-medium mb-4 drop-shadow-lg">
          Discover Handmade, Home & Fashion Treasures
        </h2>

        <p className="text-lg md:text-xl max-w-2xl mb-10 drop-shadow-lg">
          Curated decor, textiles, apparel and unique artisan-crafted finds.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-xl">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-6 py-4 rounded-xl text-gray-800 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
      </div>
    </div>
  );
}
