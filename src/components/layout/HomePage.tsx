
const HomePage = () => {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col">
      {/* Top Banner */}
      <div className="w-full bg-gray-900 text-white text-center py-2 text-xs md:text-sm">
        Get 25% OFF on your first order. <span className="font-semibold">Order <span className="underline">Now</span></span>
      </div>
      {/* Header */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-8">
          <div className="flex items-center gap-2">
            <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-lg">e</div>
            <span className="font-bold text-lg">Ecommerce</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-700">
            <a href="#" className="hover:text-black">Home</a>
            <div className="relative group">
              <button className="hover:text-black flex items-center gap-1">Categories <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg></button>
            </div>
            <a href="#" className="hover:text-black">About</a>
            <a href="#" className="hover:text-black">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input type="text" placeholder="Search products" className="border rounded-full px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-black" />
              <svg className="absolute right-2 top-1.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            </div>
            <button className="hover:text-black"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg></button>
            <button className="hover:text-black"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a7.5 7.5 0 0115 0"/></svg></button>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="w-full bg-gray-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 gap-8">
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Fresh Arrivals Online</h1>
            <p className="text-gray-500 mb-6">Discover Our Newest Collection Today.</p>
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">View Collection</button>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center">
              <div className="absolute -top-4 -right-4 w-56 h-56 md:w-72 md:h-72 bg-gray-200 rounded-full z-0"></div>
              <img src="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/DCTM_Penguin_UK_DK_AL625978_tqkq2v.jpg" alt="Hero" className="relative z-10 w-48 h-56 md:w-64 md:h-72 object-cover rounded" />
            </div>
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="w-full py-10 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-0">
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 3h18v18H3V3z"/><path d="M16 3v4a4 4 0 01-8 0V3"/></svg>
            </div>
            <h3 className="font-semibold mb-1">Free Shipping</h3>
            <p className="text-xs text-gray-500">Upgrade Your Style Today And Get FREE Shipping On All Orders! Don't Miss Out.</p>
          </div>
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            </div>
            <h3 className="font-semibold mb-1">Satisfaction Guarantee</h3>
            <p className="text-xs text-gray-500">Shop confidently with our Satisfaction Guarantee: Love it or get a refund.</p>
          </div>
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17v-6"/><path d="M5 12h14"/><circle cx="12" cy="12" r="10"/></svg>
            </div>
            <h3 className="font-semibold mb-1">Secure Payment</h3>
            <p className="text-xs text-gray-500">Your security is our priority. Your payments are secure with us.</p>
          </div>
        </div>
      </section>
      {/* Best Selling */}
      <section className="w-full py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-center text-lg font-semibold mb-8">Best Selling</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Product Card Example */}
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img src="https://i.imgur.com/1.png" alt="Classic Monochrome Tees" className="w-32 h-32 object-contain mb-2" />
              <div className="text-xs text-gray-500 mb-1">IN STOCK</div>
              <div className="font-medium mb-1">Classic Monochrome Tees</div>
              <div className="text-gray-700 font-semibold">$35.00</div>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img src="https://i.imgur.com/2.png" alt="Monochromatic Wardrobe" className="w-32 h-32 object-contain mb-2" />
              <div className="text-xs text-gray-500 mb-1">IN STOCK</div>
              <div className="font-medium mb-1">Monochromatic Wardrobe</div>
              <div className="text-gray-700 font-semibold">$27.00</div>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img src="https://i.imgur.com/3.png" alt="Essential Neutrals" className="w-32 h-32 object-contain mb-2" />
              <div className="text-xs text-gray-500 mb-1">IN STOCK</div>
              <div className="font-medium mb-1">Essential Neutrals</div>
              <div className="text-gray-700 font-semibold">$22.00</div>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img src="https://i.imgur.com/4.png" alt="UTRAANET Black" className="w-32 h-32 object-contain mb-2" />
              <div className="text-xs text-gray-500 mb-1">IN STOCK</div>
              <div className="font-medium mb-1">UTRAANET Black</div>
              <div className="text-gray-700 font-semibold">$43.00</div>
            </div>
          </div>
        </div>
      </section>
      {/* Fashion Paradise */}
      <section className="w-full py-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 gap-8">
          <div className="flex-1">
            <h2 className="text-lg font-semibold mb-2">Browse Our Fashion Paradise!</h2>
            <p className="text-gray-500 mb-4">Step into a world of style and explore our diverse collection of clothing categories.</p>
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">Start Browsing</button>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="https://i.imgur.com/poncho.png" alt="Fashion Paradise" className="w-48 h-48 object-contain" />
          </div>
        </div>
      </section>
      {/* Featured Products */}
      <section className="w-full py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-4 mb-8">
            <button className="px-4 py-2 bg-black text-white rounded text-sm font-semibold">Featured</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded text-sm font-semibold">Latest</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img src="https://i.imgur.com/5.png" alt="Elegant Ebony Sweatshirts" className="w-32 h-32 object-contain mb-2" />
              <div className="text-xs text-gray-500 mb-1">IN STOCK</div>
              <div className="font-medium mb-1">Elegant Ebony Sweatshirts</div>
              <div className="text-gray-700 font-semibold">$35.00</div>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img src="https://i.imgur.com/6.png" alt="Sleek and Cozy Black" className="w-32 h-32 object-contain mb-2" />
              <div className="text-xs text-gray-500 mb-1">IN STOCK</div>
              <div className="font-medium mb-1">Sleek and Cozy Black</div>
              <div className="text-gray-700 font-semibold">$57.00</div>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img src="https://i.imgur.com/7.png" alt="Raw Black Tees" className="w-32 h-32 object-contain mb-2" />
              <div className="text-xs text-gray-500 mb-1">IN STOCK</div>
              <div className="font-medium mb-1">Raw Black Tees</div>
              <div className="text-gray-700 font-semibold">$19.00</div>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img src="https://i.imgur.com/8.png" alt="MOCKUP Black" className="w-32 h-32 object-contain mb-2" />
              <div className="text-xs text-gray-500 mb-1">IN STOCK</div>
              <div className="font-medium mb-1">MOCKUP Black</div>
              <div className="text-gray-700 font-semibold">$30.00</div>
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter */}
      <section className="w-full py-10 bg-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-0">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="font-semibold mb-2">Join Our Newsletter</h3>
            <p className="text-gray-500 text-sm">We love to surprise our subscribers with occasional gifts.</p>
          </div>
          <form className="flex-1 flex gap-2 w-full max-w-md">
            <input type="email" placeholder="Your email address" className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black" />
            <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">Subscribe</button>
          </form>
        </div>
      </section>
      {/* Footer */}
      <footer className="w-full bg-white border-t py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-1 mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-lg">e</div>
              <span className="font-bold text-lg">Ecommerce</span>
            </div>
            <p className="text-xs text-gray-500 mb-2">DevCut is a YouTube channel for practical project-based learning.</p>
            <div className="flex gap-3 text-gray-400">
              <a href="#" aria-label="Instagram"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></svg></a>
              <a href="#" aria-label="YouTube"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="5"/><path d="M10 9l5 3-5 3V9z"/></svg></a>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6 text-xs text-gray-700">
            <div>
              <div className="font-semibold mb-2">SUPPORT</div>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">FAQ</a></li>
                <li><a href="#" className="hover:underline">Terms of use</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">COMPANY</div>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">About us</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">SHOP</div>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">My Account</a></li>
                <li><a href="#" className="hover:underline">Checkout</a></li>
                <li><a href="#" className="hover:underline">Cart</a></li>
              </ul>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end justify-between">
            <div className="mb-4">
              <div className="font-semibold text-xs mb-2">ACCEPTED PAYMENTS</div>
              <div className="flex gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Amex_logo.svg" alt="Amex" className="h-6" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-8">© 2023 DevCut. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default HomePage; 