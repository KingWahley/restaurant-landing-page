// components/HowItWorks.js

export default function HowItWorks() {
  const steps = [
    { id: 1, title: "Browse Menu", icon: "🍝" },
    { id: 2, title: "Place Order", icon: "🛒" },
    { id: 3, title: "Enjoy Food", icon: "🍽️" },
  ];

  return (
    <section className="bg-white px-8 py-16">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-3xl font-bold">How It Works</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center rounded-lg bg-gray-100 p-6 shadow-md"
            >
              <div className="mb-4 text-4xl">{step.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
