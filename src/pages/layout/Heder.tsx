import { Link } from "react-router-dom";

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
            <Link to="/" className="hover:text-black text-gray-500">
              Home
            </Link>
            <Link to="/categories" className="hover:text-black text-gray-500">
              Categories
            </Link>
            <Link to="/about" className="hover:text-black text-gray-500">
              About
            </Link>
            <Link to="/contact" className="hover:text-black text-gray-500">
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
