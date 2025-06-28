import BestSelling from "./components/BestSelling";
import FashionParadise from "./components/FashionParadise";
import FeaturedProducts from "./components/FeaturedProducts";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import Newsletter from "./components/Newsletter";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Heder";

const HomePage = () => {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <Features />
      <BestSelling />
      <FashionParadise />
      <FeaturedProducts />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;
