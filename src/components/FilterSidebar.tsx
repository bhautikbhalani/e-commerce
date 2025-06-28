import React from "react";
import { X } from "lucide-react";
import type { FilterSidebarProps } from "../utils/types";

interface MultiCategoryFilterSidebarProps
  extends Omit<FilterSidebarProps, "selectedCategory" | "onCategoryChange"> {
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
}

const FilterSidebar: React.FC<MultiCategoryFilterSidebarProps> = ({
  categories,
  selectedCategories = [],
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  isOpen,
  onClose,
}) => {
  const handleCategoryChange = (category: string) => {
    if (selectedCategories?.includes(category)) {
      onCategoryChange(selectedCategories.filter((c) => c !== category));
    } else {
      onCategoryChange([...selectedCategories, category]);
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full lg:h-auto w-80 lg:w-full z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } overflow-y-auto bg-white lg:bg-transparent`}
        aria-label="Product Filters"
      >
        <div className="bg-white rounded-lg shadow p-6 m-4 flex flex-col gap-6 items-center lg:items-stretch h-full lg:h-auto">
          {/* Mobile Close Button */}
          <div className="flex justify-between items-center mb-6 w-full lg:hidden">
            <h2 className="text-xl font-bold text-gray-800">Filters</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded"
              aria-label="Close Filters"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Desktop Title */}
          <h2 className="text-xl font-bold text-gray-800 mb-6 hidden lg:block w-full">
            Filters
          </h2>

          {/* Categories */}
          <section className="mb-6 w-full" aria-labelledby="filter-categories">
            <h3
              id="filter-categories"
              className="font-semibold text-primary-700 mb-3"
            >
              Categories
            </h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <label
                  key={category}
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name="category"
                    checked={selectedCategories?.includes(category) || false}
                    onChange={() => handleCategoryChange(category)}
                    className="mr-2 accent-black h-4 w-4"
                  />
                  <span className="capitalize">{category}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Price Range */}
          <section className="mb-6 w-full" aria-labelledby="filter-price">
            <h3
              id="filter-price"
              className="font-semibold text-primary-700 mb-3"
            >
              Price Range
            </h3>
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <label
                  htmlFor="min-price"
                  className="text-xs text-gray-500 mb-1"
                >
                  Min
                </label>
                <input
                  id="min-price"
                  type="number"
                  min={0}
                  max={priceRange.max}
                  value={priceRange.min}
                  onChange={(e) =>
                    onPriceRangeChange({
                      ...priceRange,
                      min: Math.min(Number(e.target.value), priceRange.max),
                    })
                  }
                  className="w-16 border border-primary-200 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary-400 text-sm"
                  aria-label="Minimum Price"
                />
              </div>
              <span className="mx-1 text-gray-400">-</span>
              <div className="flex flex-col">
                <label
                  htmlFor="max-price"
                  className="text-xs text-gray-500 mb-1"
                >
                  Max
                </label>
                <input
                  id="max-price"
                  type="number"
                  min={priceRange.min}
                  max={1000}
                  value={priceRange.max}
                  onChange={(e) =>
                    onPriceRangeChange({
                      ...priceRange,
                      max: Math.max(Number(e.target.value), priceRange.min),
                    })
                  }
                  className="w-16 border border-primary-200 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary-400 text-sm"
                  aria-label="Maximum Price"
                />
              </div>
            </div>
          </section>
        </div>
      </aside>
    </>
  );
};

export default FilterSidebar;
