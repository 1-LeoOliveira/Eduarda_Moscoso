import {
  Brain,
  Heart,
  HeartHandshake,
  Sparkles,
  Puzzle,
  GraduationCap,
  Users,
  Compass,
} from 'lucide-react';
import { whatsappLink } from '@/react-app/config/site';

const services = [
  {
    icon: Brain,
    title: 'Ansiedade',
    description: 'Acompanhamento para quem convive com preocupação constante, insegurança e tensão.',
  },
  {
    icon: Compass,
    title: 'Autoconhecimento',
    description: 'Compreender sua história, reconhecer padrões e dar nome ao que você sente.',
  },
  {
    icon: Heart,
    title: 'Autoestima',
    description: 'Trabalho com a autocrítica excessiva e a necessidade constante de aprovação.',
  },
  {
    icon: HeartHandshake,
    title: 'Relacionamentos',
    description: 'Conflitos familiares e amorosos, vínculos e a relação que você tem consigo.',
  },
  {
    icon: Puzzle,
    title: 'Neurodesenvolvimento',
    description: 'Demandas relacionadas a TDAH, TEA e outras questões do desenvolvimento.',
  },
  {
    icon: Users,
    title: 'Pressão familiar',
    description: 'Lidar com cobranças e expectativas externas sem se perder de si.',
  },
  {
    icon: Sparkles,
    title: 'Transições de carreira',
    description: 'Dúvidas sobre escolhas profissionais e momentos de virada na vida.',
  },
  {
    icon: GraduationCap,
    title: 'Vida acadêmica',
    description: 'Desafios dos estudos, desempenho, prazos e a cobrança por resultados.',
  },
];

export default function Services() {
  return (
    <section id="atuacao" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-revelar>
          <span className="text-brand-600 font-medium text-sm tracking-wide uppercase">Áreas de Atuação</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-800 mt-3 mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Como posso te ajudar
          </h2>
          <p className="text-slate-600 text-lg">
            Atendimento psicológico para mulheres e adolescentes a partir dos 13 anos,
            nas dificuldades emocionais que surgem em diferentes fases da vida.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              data-revelar
              style={{ animationDelay: `${i * 70}ms` }}
              className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-brand-200 transition-all duration-300 hover:shadow-xl hover:shadow-brand-100/50 hover:-translate-y-1 text-center"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors bg-brand-100 text-brand-600 group-hover:bg-brand-600 group-hover:text-white mx-auto">
                <service.icon size={26} />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-500 mb-4">Atendimento particular • Online</p>
          <a
            href={whatsappLink('Olá, Eduarda! Gostaria de saber mais sobre os atendimentos.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-600 font-medium hover:text-brand-700 transition-colors"
          >
            Tire suas dúvidas pelo WhatsApp
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
