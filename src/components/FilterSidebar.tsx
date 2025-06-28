import React from "react";
import { X } from "lucide-react";
import type { FilterSidebarProps } from "../utils/types";

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  selectedSort,
  onSortChange,
  isOpen,
  onClose,
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      {isOpen && (
        <div
          className={`fixed lg:static top-0 left-0 h-full lg:h-auto w-80 lg:w-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          } overflow-y-auto`}
        >
          <div className="p-6">
            {/* Mobile Close Button */}
            <div className="flex justify-between items-center mb-6 lg:hidden">
              <h2 className="text-xl font-bold text-gray-800">Filters</h2>
              <button onClick={onClose} className="p-2">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Desktop Title */}
            <h2 className="text-xl font-bold text-gray-800 mb-6 hidden lg:block">
              Filters
            </h2>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-3">Categories</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === ""}
                    onChange={() => onCategoryChange("")}
                    className="mr-2"
                    aria-label="All Categories"
                  />
                  All Categories
                </label>
                {categories.map((category) => (
                  <label key={category} className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === category}
                      onChange={() => onCategoryChange(category)}
                      className="mr-2"
                      aria-label={category}
                    />
                    <span className="capitalize">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-3">Price Range</h3>
              <div className="space-y-3">
                <div>
                  <label
                    htmlFor="min-price"
                    className="block text-sm text-gray-600 mb-1"
                  >
                    Min Price: ${priceRange?.min}
                  </label>
                  <input
                    id="min-price"
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange?.min}
                    onChange={(e) =>
                      onPriceRangeChange({
                        ...priceRange,
                        min: parseInt(e.target.value, 10),
                      })
                    }
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="max-price"
                    className="block text-sm text-gray-600 mb-1"
                  >
                    Max Price: ${priceRange?.max}
                  </label>
                  <input
                    id="max-price"
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange?.max}
                    onChange={(e) =>
                      onPriceRangeChange({
                        ...priceRange,
                        max: parseInt(e.target.value, 10),
                      })
                    }
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Sort By */}
            <div className="mb-6">
              <label
                htmlFor="sort-select"
                className="block font-semibold text-gray-700 mb-3"
              >
                Sort By
              </label>
              <select
                id="sort-select"
                value={selectedSort}
                onChange={(e) => onSortChange(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
              >
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterSidebar;
