import { Check } from 'lucide-react';
import { whatsappLink } from '@/react-app/config/site';

const pains = [
  'A ansiedade e a insegurança aparecem até nas decisões pequenas do dia a dia.',
  'Você sente dificuldade de reconhecer e expressar o que está sentindo.',
  'Existe uma necessidade constante de aprovação para se sentir suficiente.',
  'Conflitos familiares ou amorosos se repetem sempre do mesmo jeito.',
  'As expectativas das outras pessoas pesam mais do que as suas próprias vontades.',
  'Você tem dúvidas sobre suas escolhas pessoais e profissionais e não sabe por onde começar.',
];

export default function Pains() {
  return (
    <section className="py-20 md:py-28 bg-brand-700 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-500/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-azure-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12" data-revelar>
          <span className="text-azure-300 font-medium text-sm tracking-wide uppercase">Você se reconhece?</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mt-3 mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Talvez você esteja se sentindo assim
          </h2>
          <p className="text-brand-100 text-lg">
            Essas são as queixas que mais escuto no consultório. Se alguma delas soa
            familiar, saiba que não é frescura e não é exagero — é algo que pode ser cuidado.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 gap-4 mb-12">
          {pains.map((pain, i) => (
            <li
              key={pain}
              data-revelar
              style={{ animationDelay: `${i * 70}ms` }}
              className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/15"
            >
              <span className="w-7 h-7 rounded-full bg-azure-300/90 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="text-brand-800" size={16} strokeWidth={3} />
              </span>
              <p className="text-brand-50 leading-relaxed">{pain}</p>
            </li>
          ))}
        </ul>

        <div className="text-center">
          <a
            href={whatsappLink('Olá, Eduarda! Me identifiquei com o que li no seu site e gostaria de conversar.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-full font-semibold hover:bg-brand-50"
          >
            Quero conversar sobre isso
          </a>
        </div>
      </div>
    </section>
  );
}
