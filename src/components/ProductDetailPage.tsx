import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star, ShoppingCart, Heart } from "lucide-react";
import Header from "../components/layout/Heder";
import Footer from "../components/layout/Footer";
import Newsletter from "../pages/home/components/Newsletter";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import useCart from "../context/useCart";
import type { Product } from "../utils/types";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { allProducts } = useProducts();
  const { addToCart } = useCart();

  const product = allProducts.find((p: Product) => p.id === Number(id));
  const similarProducts = allProducts.filter(
    (p: Product) => p.category === product?.category && p.id !== product?.id
  );  

  const [quantity, setQuantity] = useState(1);

  if (!product)
    return <div className="text-center p-10 text-white">Product not found</div>;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, quantity);
    }

    navigate("/cart");
  };

  return (
    <div className="bg-white w-full min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="text-sm text-gray-500 mb-6">
          <span className="hover:underline cursor-pointer">Ecommerce</span>
          <span className="mx-1">/</span>
          <span className="font-semibold text-gray-700 capitalize">
            {product.title}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-100 rounded-lg p-6 flex justify-center items-center">
            <img
              src={product.image}
              alt={product.title}
              className="object-contain max-h-[400px] w-full"
            />
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {product.title}
            </h1>

            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1 text-yellow-600">
                <Star className="w-4 h-4 fill-yellow-400" />
                <span>{product.rating.rate}</span>
                <span className="text-gray-500">
                  ({product.rating.count} Reviews)
                </span>
              </div>
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                IN STOCK
              </span>
            </div>

            <div className="text-2xl font-bold text-blue-600">
              ${(product.price * quantity).toFixed(2)}
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Quantity
              </h4>
              <div className="flex items-center gap-3">
                <button
                  className="w-8 h-8 border rounded text-lg"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  −
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  className="w-8 h-8 border rounded text-lg"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-black text-white py-3 rounded-md hover:bg-gray-800 transition flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="p-3 border rounded-md text-gray-600 hover:bg-gray-100">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-1">
              — FREE SHIPPING ON ORDERS $100+
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Detail</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mb-4">
            Elevate your everyday style with our Men's Black T-Shirts, the
            ultimate wardrobe essential for modern men. Crafted with meticulous
            attention to detail and designed for comfort, these versatile black
            tees are a must-have addition to your collection.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Premium Quality</li>
            <li>Versatile Wardrobe Staple</li>
            <li>Available in Various Sizes</li>
            <li>Tailored Fit</li>
          </ul>
        </div>

        {similarProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              You might also like
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {similarProducts.slice(0, 4).map((p: Product) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
