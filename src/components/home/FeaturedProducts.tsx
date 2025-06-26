const FeaturedProducts = () => {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center gap-4 mb-8">
          <button className="px-4 py-2 bg-black text-white rounded text-sm font-semibold">
            Featured
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded text-sm font-semibold">
            Latest
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img
              src="https://i.imgur.com/5.png"
              alt="Elegant Ebony Sweatshirts"
              className="w-32 h-32 object-contain mb-2"
            />
            <div className="text-xs text-gray-500 mb-2 rounded-full px-3 py-1 border border-gray-300 ">
              IN STOCK
            </div>
            <div className="font-medium mb-1">Elegant Ebony Sweatshirts</div>
            <div className="text-gray-700 font-semibold">$35.00</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img
              src="https://i.imgur.com/6.png"
              alt="Sleek and Cozy Black"
              className="w-32 h-32 object-contain mb-2"
            />
            <div className="text-xs text-gray-500 mb-2 rounded-full px-3 py-1 border border-gray-300 ">
              IN STOCK
            </div>
            <div className="font-medium mb-1">Sleek and Cozy Black</div>
            <div className="text-gray-700 font-semibold">$57.00</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img
              src="https://i.imgur.com/7.png"
              alt="Raw Black Tees"
              className="w-32 h-32 object-contain mb-2"
            />
            <div className="text-xs text-gray-500 mb-2 rounded-full px-3 py-1 border border-gray-300 ">
              IN STOCK
            </div>
            <div className="font-medium mb-1">Raw Black Tees</div>
            <div className="text-gray-700 font-semibold">$19.00</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img
              src="https://i.imgur.com/8.png"
              alt="MOCKUP Black"
              className="w-32 h-32 object-contain mb-2"
            />
            <div className="text-xs text-gray-500 mb-2 rounded-full px-3 py-1 border border-gray-300 ">
              IN STOCK
            </div>
            <div className="font-medium mb-1">MOCKUP Black</div>
            <div className="text-gray-700 font-semibold">$30.00</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
