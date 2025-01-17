// components/PromoSection.js

export default function PromoSection() {
  return (
    <section className="bg-yellow-300 px-8 py-16 text-gray-800">
      <div className="container mx-auto flex flex-col items-center lg:flex-row lg:justify-between">
        <div className="mb-8 lg:mb-0 lg:w-1/2">
          <h2 className="mb-4 text-4xl font-bold">Order Now and Get 50% Off</h2>
          <p className="mb-6 text-lg">
            Don't miss out on this limited-time offer! Enjoy authentic Italian
            dishes at half the price.
          </p>
          <button className="rounded-full bg-gray-800 px-6 py-3 font-semibold text-yellow-300 hover:bg-gray-700">
            Order Now
          </button>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <img
            src="https://via.placeholder.com/400"
            alt="Promotional Offer"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
