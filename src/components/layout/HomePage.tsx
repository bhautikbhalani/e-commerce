import BestSelling from "../home/BestSelling";
import FashionParadise from "../home/FashionParadise";
import FeaturedProducts from "../home/FeaturedProducts";
import Features from "../home/Features";
import HeroSection from "../home/HeroSection";
import Newsletter from "../home/Newsletter";
import Footer from "./Footer";
import Header from "./Heder";

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