import React, { useEffect } from "react";
import type { ProductCardProps } from "../utils/types";

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      onViewDetails(product);
    }
  };

  useEffect(() => {
    document.title = "Shop Products | Your Store Name";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Browse our wide selection of products. Find the best deals on fashion, electronics, and more."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Browse our wide selection of products. Find the best deals on fashion, electronics, and more.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <button
      type="button"
      aria-label={`View details for ${product.title}`}
      className="bg-white rounded-md shadow flex flex-col items-stretch cursor-pointer hover:shadow-lg transition-shadow duration-300 h-100 focus:outline-none focus:ring-2 focus:ring-primary-400 w-full text-left p-0 border-0"
      onClick={() => onViewDetails(product)}
      onKeyDown={handleKeyDown}
    >
      <div className="flex-1 flex items-center justify-center bg-gray-100 rounded-t-md m-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-40 h-40 object-contain"
        />
      </div>
      <div className="px-6 py-4">
        <div
          className="font-medium text-center truncate w-full min-h-[1.5rem] mb-4"
          title={product.title}
        >
          {product.title}
        </div>
        <div className="flex items-center gap-3 justify-center">
          <div className="text-xs text-gray-700 border border-gray-400 rounded-full px-3 py-1">
            IN STOCK
          </div>
          <div className="text-gray-700 font-semibold">${product.price}</div>
        </div>
      </div>
    </button>
  );
};

export default ProductCard;
