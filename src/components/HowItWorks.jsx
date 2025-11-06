import { Clock, Bike, BadgeCheck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    { icon: BadgeCheck, title: 'Choose', desc: 'Pick from thousands of menus and cuisines nearby.' },
    { icon: Clock, title: 'Track', desc: 'Follow your order in real-time from kitchen to door.' },
    { icon: Bike, title: 'Enjoy', desc: 'Delivered hot and fresh by our vetted couriers.' },
  ];

  return (
    <section id="how" className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="mb-2 text-center text-2xl font-bold text-neutral-900">How it works</h2>
      <p className="mb-8 text-center text-sm text-neutral-600">Get great food in three simple steps</p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {steps.map((s) => (
          <div key={s.title} className="rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-1 text-lg font-semibold text-neutral-900">{s.title}</h3>
            <p className="text-sm text-neutral-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
