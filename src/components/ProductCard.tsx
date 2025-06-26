import React from "react";
import type { ProductCardProps } from "../utils/types";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="min-w-[200px] bg-white rounded-lg shadow p-4 flex flex-col items-center mx-2">
      <img
        src={product.image}
        alt={product.title}
        className="w-32 h-32 object-contain mb-2"
        onError={(e) => (e.currentTarget.src = "/fallback.png")}
      />
      <div className="text-xs text-gray-500 mb-2 rounded-full px-3 py-1 border border-gray-300">
        IN STOCK
      </div>
      <div className="font-medium mb-1 text-center line-clamp-2">
        {product.title}
      </div>
      <div className="text-gray-700 font-semibold">
        ${product.price.toFixed(2)}
      </div>
    </div>
  );
};

export default ProductCard;
