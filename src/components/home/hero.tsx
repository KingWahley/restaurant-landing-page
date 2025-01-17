// components/HeroSection.js
export default function HeroSection() {
  return (
    <section className="relative bg-green-500 px-8 py-16 text-white">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h1 className="mb-6 text-5xl font-bold">Delicious Italian Food</h1>
        <p className="mb-6 text-lg">
          Satisfy your taste buds with recipes seasoned with love & tradition.
          Experience the flavor.
        </p>
        <button className="rounded-full bg-white px-6 py-3 font-semibold text-green-500 hover:bg-gray-100">
          Get Started
        </button>
      </div>
      <div className="absolute right-0 top-0 -translate-y-10 translate-x-10 transform">
        <img
          src="https://via.placeholder.com/150"
          alt="Decorative Dish"
          className="rounded-full"
        />
      </div>
    </section>
  );
}
