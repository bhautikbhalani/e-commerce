import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useProducts } from "../../../hooks/useProducts";
import ProductCard from "../../../components/ProductCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const BestSelling = () => {
  const { products } = useProducts();

  const topProducts = [...products]
    .sort((a, b) => b.rating.count - a.rating.count)
    .slice(0, 8);

  const duplicatedProducts =
    topProducts.length > 0 ? [...topProducts, ...topProducts] : [];

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-center text-lg font-semibold mb-8">Best Selling</h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 900,
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
            <SwiperSlide key={`${product.id}-${index}`}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BestSelling;
