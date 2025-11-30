class Card {
  title: string;
  description: string;
  imgUrl?: string;

  constructor(title: string, description: string, imgUrl?: string) {
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }

  render(): HTMLElement {
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1";

    card.innerHTML = `
      ${this.imgUrl ? `<img src="${this.imgUrl}" class="w-full h-48 object-cover">` : ""}
      <div class="p-5">
        <h2 class="text-xl font-bold mb-2">${this.title}</h2>
        <p class="text-gray-600">${this.description}</p>
        <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Book Now
        </button>
      </div>
    `;

    return card;
  }
}

(window as any).Card = Card;

window.onload = () => {
  const container = document.getElementById("card-container");
  if (!container) return;

  const cards = [
    new Card(
      "Paris, France",
      "Explore the romantic city of Paris! Visit the Eiffel Tower, Louvre Museum, and charming cafes along the Seine River.",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&h=200&q=80"
    ),
    new Card(
      "Kyoto, Japan",
      "Discover the serene temples, beautiful cherry blossoms, and traditional tea houses in the cultural heart of Japan.",
      "https://images.unsplash.com/photo-1551334787-21e6bd3ab135?auto=format&fit=crop&w=400&h=200&q=80"
    ),
    new Card(
      "Santorini, Greece",
      "Relax in Santorini’s stunning cliffs and blue-domed churches. Enjoy breathtaking sunsets and crystal-clear waters.",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&h=200&q=80"
    ),
  ];

  cards.forEach((c) => container.appendChild(c.render()));
};
