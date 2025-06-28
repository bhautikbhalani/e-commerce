import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchBarRef = useRef<HTMLDivElement>(null);

  // Prevent background scroll when search is open (now removed, since no overlay)
  useEffect(() => {
    document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [searchOpen]);

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
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-sm text-gray-700">
            <Link to="/" className="hover:text-black text-gray-500">
              Home
            </Link>
            <Link to="/products" className="hover:text-black text-gray-500">
              Product List
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
          <div className="flex items-center gap-4">
            {/* Search input for md+ */}
            <div className="relative hidden md:block">
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
            {/* Search icon for mobile/tablet */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-100 cursor-pointer"
              aria-label="Open search"
              onClick={() => setSearchOpen(true)}
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
            <Link to="/cart" className="hover:text-black">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 6h15l-1.5 9h-13z" />
                <circle cx="9" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
              </svg>
            </Link>
            <button className="hover:text-black cursor-pointer">
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
            {/* Hamburger Icon (moved after user icon) */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 border rounded cursor-pointer"
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </button>
          </div>
        </div>
        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-end md:hidden">
            <div className="bg-white w-64 h-full shadow-lg flex flex-col p-6 relative animate-slide-in">
              <button
                className="absolute top-4 right-4 text-2xl cursor-pointer"
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
              >
                &times;
              </button>
              <nav className="flex flex-col gap-6 mt-12 text-lg text-gray-700">
                <Link
                  to="/"
                  className="hover:text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className="hover:text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Product List
                </Link>
                <Link
                  to="/categories"
                  className="hover:text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Categories
                </Link>
                <Link
                  to="/about"
                  className="hover:text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="hover:text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  to="/cart"
                  className="hover:text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Cart
                </Link>
              </nav>
            </div>
          </div>
        )}
        {/* Mobile Search Popup - no overlay, just search bar below header */}
        {searchOpen && (
          <div className="absolute left-0 right-0 top-[72px] mx-auto w-full max-w-md px-4 md:hidden z-50">
            {/* Arrow pointer */}
            <div className="absolute left-1/2 -top-3 transform -translate-x-1/2">
              <div className="w-6 h-3 overflow-hidden inline-block">
                <div
                  className="bg-white w-6 h-6 rotate-45 transform origin-bottom-left shadow-md"
                  style={{ marginTop: "-12px" }}
                ></div>
              </div>
            </div>
            <div
              ref={searchBarRef}
              className="bg-white rounded-full shadow-2xl flex items-center px-2 py-1 w-full relative"
              style={{
                boxShadow:
                  "0 8px 32px 0 rgba(60,60,60,0.18), 0 1.5px 8px 0 rgba(60,60,60,0.10)",
              }}
            >
              {/* Close button on left */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black text-white rounded-full text-xl cursor-pointer shadow"
                aria-label="Close search"
                onClick={() => setSearchOpen(false)}
                style={{ zIndex: 2 }}
              >
                &times;
              </button>
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 bg-transparent outline-none px-4 py-2 text-base pl-12"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                autoFocus
                style={{ color: "#222" }}
              />
              <button className="p-2 ml-2 rounded-full hover:bg-gray-100 cursor-pointer">
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
