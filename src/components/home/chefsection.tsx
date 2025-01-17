// components/ChefSection.js

export default function ChefSection() {
  return (
    <section className="bg-gray-50 px-8 py-16">
      <div className="container mx-auto flex flex-col items-center lg:flex-row">
        <div className="mb-8 lg:mb-0 lg:w-1/2">
          <h2 className="mb-4 text-3xl font-bold">Our Best Chef</h2>
          <p className="mb-6 text-lg">
            Meet Daniel Adilo, a world-class chef passionate about creating
            delicious Italian dishes that will leave you craving for more. With
            years of experience and dedication, he ensures every dish is crafted
            to perfection.
          </p>
          <button className="rounded-full bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-500">
            Learn More
          </button>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <img
            src="https://via.placeholder.com/400"
            alt="Chef Daniel Adilo"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
