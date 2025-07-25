import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import type { ProductCardProps } from "../utils/types";
import useCart from "../context/useCart";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

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
    <div className="bg-white rounded-md shadow flex flex-col items-stretch hover:shadow-lg transition-shadow duration-300 h-100 focus:outline-none focus:ring-2 focus:ring-primary-400 w-full text-left p-0 border-0">
      <Link
        to={`/product/${product.id}`}
        aria-label={`View details for ${product.title}`}
        className="flex-1 flex items-center justify-center bg-gray-100 rounded-t-md m-0 w-full cursor-pointer"
        style={{ border: "none", background: "none", padding: 0, margin: 0 }}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-40 h-40 object-contain"
        />
      </Link>

      <div className="px-6 py-4 flex flex-col gap-2">
        <Link to={`/product/${product.id}`}>
          <div
            className="text-black no-underline hover:underline"
            title={product.title}
          >
            {product.title}
          </div>
        </Link>

        <div className="flex items-center gap-3 justify-center mb-2">
          <div className="text-xs text-gray-700 border border-gray-400 rounded-full px-3 py-1">
            IN STOCK
          </div>
          <div className="text-gray-700 font-semibold">${product.price}</div>
        </div>

        <button
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition font-semibold cursor-pointer"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
