import { Star } from 'lucide-react';

const dishes = [
  {
    id: 1,
    name: 'Truffle Burger',
    restaurant: 'Burger Lab',
    rating: 4.9,
    price: 14.99,
    image:
      'https://images.unsplash.com/photo-1606756790138-26105ce2b462?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Margherita Pizza',
    restaurant: 'Roma Pizzeria',
    rating: 4.8,
    price: 12.5,
    image:
      'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Dragon Roll',
    restaurant: 'Sushi Go',
    rating: 4.7,
    price: 16.0,
    image:
      'https://images.unsplash.com/photo-1604908554027-6bd101c2d3f1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    restaurant: 'Sweet Spot',
    rating: 4.9,
    price: 8.75,
    image:
      'https://images.unsplash.com/photo-1541781286675-9c3c53b47416?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function PopularDishes() {
  return (
    <section id="menu" className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900">Popular near you</h2>
          <p className="text-sm text-neutral-600">Loved by foodies in your area</p>
        </div>
        <a href="#" className="text-sm font-medium text-red-600 hover:text-red-700">See all</a>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {dishes.map((dish) => (
          <div key={dish.id} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={dish.image}
                alt={dish.name}
                className="h-full w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
            <div className="p-3">
              <div className="mb-1 flex items-center justify-between gap-2">
                <h3 className="truncate text-sm font-semibold text-neutral-900">{dish.name}</h3>
                <div className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-700">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" /> {dish.rating}
                </div>
              </div>
              <p className="truncate text-xs text-neutral-500">{dish.restaurant}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-neutral-900">${dish.price.toFixed(2)}</span>
                <button className="rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs font-medium text-neutral-700 hover:bg-neutral-50">Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
