import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import PopularDishes from './components/PopularDishes';
import HowItWorks from './components/HowItWorks';

function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearch = (q) => setSearch(q);
  const handleSelectCategory = (c) => setSelectedCategory(c);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Navbar onSearch={handleSearch} />
      <Hero onOrderNow={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })} />
      <CategoryGrid onSelect={handleSelectCategory} />
      <PopularDishes key={`${search}-${selectedCategory}`} />
      <HowItWorks />
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center text-sm text-neutral-600">
          © {new Date().getFullYear()} SwiftEats — Delivering happiness.
        </div>
      </footer>
    </div>
  );
}

export default App;
