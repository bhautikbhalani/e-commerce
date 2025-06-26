const BestSelling = () => {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-center text-lg font-semibold mb-8">Best Selling</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Product Card Example */}
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img
              src="https://i.imgur.com/1.png"
              alt="Classic Monochrome Tees"
              className="w-32 h-32 object-contain mb-2"
            />
            <div className="text-xs text-gray-500 mb-2 rounded-full px-3 py-1 border border-gray-300 ">
              IN STOCK
            </div>
            <div className="font-medium mb-1">Classic Monochrome Tees</div>
            <div className="text-gray-700 font-semibold">$35.00</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img
              src="https://i.imgur.com/2.png"
              alt="Monochromatic Wardrobe"
              className="w-32 h-32 object-contain mb-2"
            />
            <div className="text-xs text-gray-500 mb-2 rounded-full px-3 py-1 border border-gray-300 ">
              IN STOCK
            </div>
            <div className="font-medium mb-1">Monochromatic Wardrobe</div>
            <div className="text-gray-700 font-semibold">$27.00</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img
              src="https://i.imgur.com/3.png"
              alt="Essential Neutrals"
              className="w-32 h-32 object-contain mb-2"
            />
            <div className="text-xs text-gray-500 mb-2 rounded-full px-3 py-1 border border-gray-300 ">
              IN STOCK
            </div>
            <div className="font-medium mb-1">Essential Neutrals</div>
            <div className="text-gray-700 font-semibold">$22.00</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img
              src="https://i.imgur.com/4.png"
              alt="UTRAANET Black"
              className="w-32 h-32 object-contain mb-2"
            />
            <div className="text-xs text-gray-500 mb-2 rounded-full px-3 py-1 border border-gray-300 ">
              IN STOCK
            </div>
            <div className="font-medium mb-1">UTRAANET Black</div>
            <div className="text-gray-700 font-semibold">$43.00</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
