const FashionParadise = () => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 gap-8">
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-2">
            Browse Our Fashion Paradise!
          </h2>
          <p className="text-gray-500 mb-4">
            Step into a world of style and explore our diverse collection of
            clothing categories.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
            Start Browsing
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="https://i.imgur.com/poncho.png"
            alt="Fashion Paradise"
            className="w-48 h-48 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default FashionParadise;
