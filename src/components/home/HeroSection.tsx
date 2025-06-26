const HeroSection = () => {
  return (
    <section className="w-full bg-gray-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 gap-8">
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Fresh Arrivals Online
          </h1>
          <p className="text-gray-500 mb-6">
            Discover Our Newest Collection Today.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
            View Collection
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center">
            <div className="absolute -top-4 -right-4 w-56 h-56 md:w-72 md:h-72 bg-gray-200 rounded-full z-0"></div>
            <img
              src="/Hero-Image.png"
              alt="Hero"
              className="relative z-10 w-48 h-56 md:w-64 md:h-72 object-cover rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
