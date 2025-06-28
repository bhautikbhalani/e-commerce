import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useProducts } from "../../../hooks/useProducts";
import ProductCard from "../../../components/ProductCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const FeaturedProducts = () => {
  const { allProducts } = useProducts();
  const [activeTab, setActiveTab] = useState<"featured" | "latest">("featured");

  const featuredProducts = [...allProducts]
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 8);

  const latestProducts = [...allProducts]
    .sort((a, b) => b.id - a.id)
    .slice(0, 8);

  const displayProducts =
    activeTab === "featured" ? featuredProducts : latestProducts;

  const duplicatedProducts =
    displayProducts.length > 0 ? [...displayProducts, ...displayProducts] : [];

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("featured")}
            className={`px-4 py-2 rounded text-sm font-semibold transition-colors ${
              activeTab === "featured"
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Featured
          </button>
          <button
            onClick={() => setActiveTab("latest")}
            className={`px-4 py-2 rounded text-sm font-semibold transition-colors ${
              activeTab === "latest"
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Latest
          </button>
        </div>

        <Swiper
          key={activeTab}
          modules={[Autoplay]}
          autoplay={{
            delay: 1800,
            disableOnInteraction: false,
          }}
          speed={800}
          spaceBetween={16}
          slidesPerView={1}
          loop={duplicatedProducts.length > 4}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {duplicatedProducts.map((product, index) => (
            <SwiperSlide key={`${activeTab}-${product.id}-${index}`}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedProducts;
