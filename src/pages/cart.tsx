import Header from "../components/layout/Heder";
import Footer from "../components/layout/Footer";
import Breadcrumb from "../components/layout/Breadcrumb";
import useCart from "../context/useCart";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const subtotal: number = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping: number = 0;
  const tax: number = subtotal > 0 ? 3 : 0;
  const total: number = subtotal + tax;

  return (
    <div className="bg-[#F9F9F9] min-h-screen flex flex-col justify-between">
      <Header />

      <div className="w-full bg-[#F4F4F4] border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="text-2xl font-semibold mb-2">Cart</div>
          <Breadcrumb
            items={[{ label: "Ecommerce", href: "/" }, { label: "Cart" }]}
          />
        </div>
      </div>

      <main className="container mx-auto flex flex-col md:flex-row gap-8 py-12 px-6 flex-1">
        <section className="flex-1 bg-white rounded shadow p-6">
          <div className="text-sm font-semibold mb-6">Your cart</div>
          <div className="border-b mb-4" />

          {cartItems.length === 0 ? (
            <div className="text-gray-500 text-center py-12">
              Your cart is empty
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 rounded bg-gray-100 object-cover"
                />

                <div className="flex-1">
                  <div className="font-medium">{item.title}</div>
                </div>

                <div className="w-24 text-right font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                <div className="flex items-center border rounded px-2">
                  <button
                    className="px-1 text-lg cursor-pointer disabled:opacity-30"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    className="px-1 text-lg cursor-pointer"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                <button
                  className="ml-4 text-gray-400 hover:text-red-500 cursor-pointer"
                  onClick={() => removeFromCart(item.id)}
                >
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </section>

        <aside className="w-full md:w-80 bg-white rounded shadow p-6 h-fit">
          <div className="font-semibold mb-4">Order Summary</div>
          <div className="flex justify-between text-sm mb-2">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span>Shipping</span>
            <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>

          <div className="border-b my-2" />
          <div className="flex justify-between font-semibold text-base mb-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button
            className="w-full bg-[#0A0D14] text-white py-2 rounded font-semibold mb-2 cursor-pointer"
            disabled={cartItems.length === 0}
          >
            Checkout
          </button>

          <button
            onClick={() => navigate("/")}
            className="w-full text-xs text-gray-500 underline cursor-pointer"
          >
            Continue Shopping
          </button>
        </aside>
      </main>

      <Footer />
    </div>
  );
};

export default CartPage;
