// components/GalleryMenu.js

export default function GalleryMenu() {
  const galleryItems = [
    "https://www.simplyrecipes.com/thmb/gzOxpt7xFVqx35o5owTgyksyEY0=/2000x1333/filters:fill(auto,1)/Simply-Recipes-Pasta-Recipes-Text-5000-06112019-4-fc698c9b35b246c0bf6237b772540b7b.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Margherita_pizza_2008.jpg/600px-Margherita_pizza_2008.jpg",
    "https://www.bhg.com/thmb/WQH5AWIF_mnchhLBBtqg6N5hd8o=/2832x2832/smart/filters:no_upscale():max_bytes(150000):strip_icc()/tiramisu-df244e18a76c4f679c7cfc80d5d80d7a.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Caprese_Salad.jpg",
    "https://www.bonappetit.com/thmb/wduJ8-BzqNBt94A8ZrR1EJ0mA9I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Mushroom-Risotto-BA-Image-2017-0c9db282d6364f9cb4091aee106d33a2.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/1/1b/Lasagne_Bolognese.jpg",
  ];

  return (
    <section className="bg-gray-100 px-8 py-16">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-3xl font-bold">Our Gallery Menu</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {galleryItems.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`Gallery item ${index + 1}`}
              className="h-48 w-full rounded-lg object-cover shadow-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
