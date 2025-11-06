const categories = [
  {
    name: 'Burgers',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Pizza',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCdXJnZXJzfGVufDB8MHx8fDE3NjIzOTYwMjl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Sushi',
    image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Desserts',
    image: 'https://images.unsplash.com/photo-1546554137-f86b9593a222?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Indian',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Healthy',
    image: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbmRpYW58ZW58MHwwfHx8MTc2MjM5NjAzMHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

export default function CategoryGrid({ onSelect }) {
  return (
    <section id="restaurants" className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900">Browse by category</h2>
          <p className="text-sm text-neutral-600">Find exactly what you’re craving</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => onSelect?.(cat.name)}
            className="group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="aspect-square w-full overflow-hidden">
              <img src={cat.image} alt={cat.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
            </div>
            <div className="flex items-center justify-between p-2">
              <span className="text-sm font-medium text-neutral-800">{cat.name}</span>
              <span className="text-xs text-neutral-500">Explore</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
