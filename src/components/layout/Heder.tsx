const Header = () => {
  return (
    <>
      <div className="w-full bg-gray-900 text-white text-center py-2 text-xs md:text-sm">
        Get 25% OFF on your first order.{" "}
        <span className="font-semibold underline cursor-pointer">
          Order Now
        </span>
      </div>
      <header className="w-full bg-white shadow-sm sticky top-0 z-1000">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-8">
          <div className="flex items-center gap-2">
            <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-lg">
              e
            </div>
            <span className="font-bold text-lg">Ecommerce</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-700">
            <a href="/home" className="hover:text-black text-gray-500">
              Home
            </a>
            <a href="/categories" className="hover:text-black text-gray-500">
              Categories
            </a>
            <a href="/about" className="hover:text-black text-gray-500">
              About
            </a>
            <a href="/contact" className="hover:text-black text-gray-500">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products"
                className="border rounded-full px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
              <svg
                className="absolute right-2 top-1.5 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </div>
            <button className="hover:text-black">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
              </svg>
            </button>
            <button className="hover:text-black">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="7" r="4" />
                <path d="M5.5 21a7.5 7.5 0 0115 0" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
