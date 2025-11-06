import { ArrowRight, Star } from 'lucide-react';

export default function Hero({ onOrderNow }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-amber-50 to-orange-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <div className="mb-4 inline-flex items-center gap-1 rounded-full border border-amber-200 bg-white/60 px-3 py-1 text-xs text-amber-700 backdrop-blur">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            Top-rated delivery • 4.9/5
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
            Crave it? Get it. Lightning-fast food delivery.
          </h1>
          <p className="mt-4 text-neutral-600 sm:text-lg">
            Order from your favorite local spots and trending kitchens. Fresh, hot, and at your door in minutes.
          </p>
          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row">
            <button
              onClick={onOrderNow}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-neutral-900/10 transition hover:-translate-y-0.5 hover:bg-neutral-800 active:translate-y-0"
            >
              Order now <ArrowRight className="h-4 w-4" />
            </button>
            <a href="#menu" className="rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-700 hover:bg-neutral-50">
              Browse popular
            </a>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-4 text-sm text-neutral-600 sm:grid-cols-3">
            <li>• Live order tracking</li>
            <li>• No hidden fees</li>
            <li>• 24/7 support</li>
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-100 via-amber-100 to-rose-100 shadow-inner">
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop"
              alt="Delicious burgers and fries"
              className="h-full w-full object-cover object-center"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
