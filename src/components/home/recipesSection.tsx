// components/RecipesSection.js

export default function RecipesSection() {
  const recipes = [
    {
      id: 1,
      title: "Pasta",
      price: "$10",
      img: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      title: "Pizza",
      price: "$15",
      img: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      title: "Hamburger",
      price: "$12",
      img: "https://via.placeholder.com/200",
    },
  ];

  return (
    <section className="bg-gray-100 px-8 py-16">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-3xl font-bold">Most Popular Recipes</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="overflow-hidden rounded-lg bg-white shadow-md"
            >
              <img
                src={recipe.img}
                alt={recipe.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold">{recipe.title}</h3>
                <p className="font-bold text-green-600">{recipe.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
