import { useState } from 'react';
import { ShoppingCart, MapPin, Menu as MenuIcon, Search } from 'lucide-react';

export default function Navbar({ onSearch }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(query);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-2">
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
          <a href="#" className="text-lg font-semibold tracking-tight text-neutral-900">
            SwiftEats
          </a>
        </div>

        <form onSubmit={handleSubmit} className="hidden w-full max-w-xl items-center gap-2 md:flex">
          <div className="relative w-full">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search restaurants or dishes"
              className="w-full rounded-full border border-neutral-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none ring-0 transition focus:border-neutral-300 focus:ring-2 focus:ring-red-500/20"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Search
          </button>
        </form>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 shadow-sm">
            <MapPin className="mr-2 h-4 w-4 text-red-500" />
            <span className="text-xs text-neutral-600">Deliver to: NYC</span>
          </div>
          <a href="#cart" className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800">
            <ShoppingCart className="h-4 w-4" /> Cart
          </a>
        </div>
      </div>

      {open && (
        <div className="border-t border-neutral-200 bg-white px-4 py-3 md:hidden">
          <form onSubmit={handleSubmit} className="mb-3 flex items-center gap-2">
            <div className="relative w-full">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search restaurants or dishes"
                className="w-full rounded-md border border-neutral-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none ring-0 transition focus:border-neutral-300 focus:ring-2 focus:ring-red-500/20"
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-neutral-900 px-3 py-2 text-sm text-white hover:bg-neutral-800"
            >
              Go
            </button>
          </form>
          <nav className="flex flex-col gap-2">
            <a href="#restaurants" className="py-1 text-sm text-neutral-700">Restaurants</a>
            <a href="#menu" className="py-1 text-sm text-neutral-700">Popular</a>
            <a href="#how" className="py-1 text-sm text-neutral-700">How it works</a>
          </nav>
        </div>
      )}
    </header>
  );
}
