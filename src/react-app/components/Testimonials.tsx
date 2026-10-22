import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

type Testimonial = {
  name: string;
  text: string;
  rating: number;
};

/**
 * TODO: preencher com os depoimentos reais (feedbacks autorizados, avaliações do Google).
 * Enquanto a lista estiver vazia, a seção inteira não é renderizada.
 */
const testimonials: Testimonial[] = [];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  if (testimonials.length === 0) return null;

  const active = testimonials[activeIndex];

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-revelar>
          <span className="text-brand-600 font-medium text-sm tracking-wide uppercase">Depoimentos</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-800 mt-3 mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            O que dizem as pacientes
          </h2>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12" data-revelar>
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
            <Quote className="absolute top-6 left-6 text-brand-100" size={48} />

            <div className="relative">
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6 italic">
                &ldquo;{active.text}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-azure-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  {active.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-800">{active.name}</p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: active.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-azure-400 text-azure-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        {testimonials.length > 1 && (
          <div className="flex justify-center gap-3 flex-wrap">
            {testimonials.map((t, index) => (
              <button
                key={t.name}
                onClick={() => setActiveIndex(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  index === activeIndex
                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/25'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-300'
                }`}
              >
                {t.name.split(' ')[0]}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
