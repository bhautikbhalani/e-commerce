import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";
import CartPage from "./pages/cart";
import ProductListing from "./pages/product/productListing";
import HomePage from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Categories from "./pages/categories";
import ProductDetailPage from "./components/ProductDetailPage";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
