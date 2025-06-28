// src/pages/ProductListing.tsx
import React, { useState, useEffect, useMemo } from "react";
import Header from "../../components/layout/Heder";
import Footer from "../../components/layout/Footer";
import Newsletter from "../home/components/Newsletter";
import FilterSidebar from "../../components/FilterSidebar";
import ProductCard from "../../components/ProductCard";
import Pagination from "../../components/Pagination";
import { useProducts } from "../../hooks/useProducts";
import { Link } from "react-router-dom";
import { Funnel } from "lucide-react";

const ProductListing: React.FC = () => {
  const {
    loading,
    error,
    allProducts,
    categories,
    priceRange,
    setPriceRange,
    sortBy,
    setSortBy,
  } = useProducts();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories, search, priceRange, sortBy]);

  const filteredProducts = useMemo(() => {
    const filtered = allProducts.filter((product) => {
      const inCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      const inSearch =
        !search || product.title.toLowerCase().includes(search.toLowerCase());
      const inPriceRange =
        product.price >= priceRange.min && product.price <= priceRange.max;

      return inCategory && inSearch && inPriceRange;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "popularity":
          return b.rating.count - a.rating.count;
        case "rating":
          return b.rating.rate - a.rating.rate;
        default:
          return a.title.localeCompare(b.title);
      }
    });

    return filtered;
  }, [allProducts, selectedCategories, priceRange, sortBy, search]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedFilteredProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const productGridContent = loading ? (
    <div className="flex justify-center items-center h-64">Loading...</div>
  ) : error ? (
    <div className="flex justify-center items-center h-64 text-red-500">
      {error}
    </div>
  ) : filteredProducts.length === 0 ? (
    <div className="flex justify-center items-center h-64 text-gray-500">
      No products found.
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {paginatedFilteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );

  return (
    <div className="bg-white w-full min-h-screen flex flex-col">
      <Header />
      <div className="w-full bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Link to="/" className="hover:underline">
              Ecommerce
            </Link>
            <span>/</span>
            <span className="font-semibold text-gray-700">Search</span>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search products"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded-full px-3 py-2 text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>
      </div>
      <main className="flex-1 w-full max-w-7xl mx-auto px-2 md:px-8 py-8 flex flex-col lg:flex-row gap-8">
        <div className="w-full top-0 left-0 h-full z-50 lg:static lg:w-64 lg:h-auto lg:z-auto">
          <FilterSidebar
            categories={categories}
            selectedCategories={selectedCategories}
            onCategoryChange={setSelectedCategories}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            selectedSort={sortBy}
            onSortChange={setSortBy}
            isOpen={isMobile ? sidebarOpen : true}
            onClose={() => setSidebarOpen(false)}
          />
        </div>
        <section className="flex-1 min-w-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div className="flex items-center gap-2 w-full md:w-auto justify-between md:justify-start">
              <span className="text-xs text-gray-500">Sort by</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded px-2 py-1 text-xs focus:outline-none"
                aria-label="Sort By"
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="popularity">Popularity</option>
                <option value="rating">Rating</option>
              </select>
              <button
                className="lg:hidden ml-auto px-2 py-2 bg-gray-200 rounded text-gray-700 cursor-pointer flex items-center"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open Filters"
                style={{ minWidth: 40 }}
              >
                <Funnel size={20} />
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {selectedCategories.map((category) => (
                <span
                  key={category}
                  className="bg-gray-200 px-2 py-1 rounded-full flex items-center gap-1"
                >
                  {category}
                  <button
                    onClick={() =>
                      setSelectedCategories(
                        selectedCategories.filter((c) => c !== category)
                      )
                    }
                    className="ml-1 cursor-pointer"
                  >
                    &times;
                  </button>
                </span>
              ))}
              {search && (
                <span className="bg-gray-200 px-2 py-1 rounded-full flex items-center gap-1">
                  {search}
                  <button
                    onClick={() => setSearch("")}
                    className="ml-1 cursor-pointer"
                  >
                    &times;
                  </button>
                </span>
              )}
              {(selectedCategories.length > 0 || !!search) && (
                <button
                  className="text-xs text-blue-600 hover:underline ml-2 cursor-pointer"
                  onClick={() => {
                    setSelectedCategories([]);
                    setSearch("");
                  }}
                >
                  Clear All
                </button>
              )}
            </div>
          </div>
          {productGridContent}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </section>
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductListing;
