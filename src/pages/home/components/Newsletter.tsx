const Newsletter = () => {
  return (
    <section className="w-full py-10 bg-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-0">
        <div className="flex-1 mb-4 md:mb-0">
          <h3 className="font-semibold mb-2">Join Our Newsletter</h3>
          <p className="text-gray-500 text-sm">
            We love to surprise our subscribers with occasional gifts.
          </p>
        </div>
        <form className="flex-1 flex gap-2 w-full max-w-md">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
