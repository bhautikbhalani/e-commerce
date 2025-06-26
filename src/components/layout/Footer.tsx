const Footer = () => {
  return (
    <footer className="w-full bg-white border-t py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between gap-8">
        <div className="flex-1 mb-6 md:mb-0">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-lg">
              e
            </div>
            <span className="font-bold text-lg">Ecommerce</span>
          </div>
          <p className="text-xs text-gray-500 mb-2">
            DevCut is a YouTube channel for practical project-based learning.
          </p>
          <div className="flex gap-3 text-gray-400">
            <a href="#" aria-label="Instagram">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <path d="M17.5 6.5h.01" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="7" width="20" height="10" rx="5" />
                <path d="M10 9l5 3-5 3V9z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6 text-xs text-gray-700">
          <div>
            <div className="font-semibold mb-2">SUPPORT</div>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of use
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">COMPANY</div>
            <ul className="space-y-1">
              <li>
                <a href="/about" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="/career" className="hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">SHOP</div>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Checkout
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-end justify-between">
          <div className="mb-4">
            <div className="font-semibold text-xs mb-2">ACCEPTED PAYMENTS</div>
            <div className="flex gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                alt="Visa"
                className="h-6"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Amex_logo.svg"
                alt="Amex"
                className="h-6"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-8">
        © 2023 DevCut. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
