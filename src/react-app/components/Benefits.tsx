import { Lightbulb, TrendingUp, HeartHandshake, Shield, Compass, Smile } from 'lucide-react';

const benefits = [
  {
    icon: Lightbulb,
    title: 'Autoconhecimento',
    description: 'Compreender seus sentimentos, pensamentos e comportamentos — e de onde eles vêm.',
  },
  {
    icon: TrendingUp,
    title: 'Mais autoestima',
    description: 'Construir uma relação menos dura e mais honesta com você mesma.',
  },
  {
    icon: Shield,
    title: 'Segurança emocional',
    description: 'Ampliar seus recursos para lidar com a ansiedade e com os desafios do cotidiano.',
  },
  {
    icon: HeartHandshake,
    title: 'Relações mais saudáveis',
    description: 'Reconhecer padrões nos vínculos e lidar melhor com conflitos interpessoais.',
  },
  {
    icon: Compass,
    title: 'Autonomia',
    description: 'Decidir a partir do que você quer, e não apenas do que esperam de você.',
  },
  {
    icon: Smile,
    title: 'Espaço para respirar',
    description: 'Um lugar de escuta e acolhimento, só seu, para pensar sem pressa.',
  },
];

export default function Benefits() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-revelar>
          <span className="text-brand-600 font-medium text-sm tracking-wide uppercase">Benefícios da Terapia</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-800 mt-3 mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            O que a psicoterapia pode mudar no seu dia a dia
          </h2>
          <p className="text-slate-600 text-lg">
            A psicoterapia oferece um espaço de escuta, acolhimento e reflexão. Ao longo do
            processo, ela favorece o autoconhecimento e amplia seus recursos para lidar com
            as cobranças e os desafios de cada fase da vida.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              data-revelar
              style={{ animationDelay: `${i * 70}ms` }}
              className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mb-5 mx-auto">
                <benefit.icon className="text-brand-600" size={28} />
              </div>
              <h3 className="font-semibold text-brand-700 text-xl mb-3">{benefit.title}</h3>
              <p className="text-slate-600 text-base leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <blockquote
            className="text-xl md:text-2xl text-slate-700 italic max-w-2xl mx-auto"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            &ldquo;Não é preciso ter certeza do que você está sentindo para começar.
            O processo serve justamente para dar nome ao que ainda não tem nome.&rdquo;
          </blockquote>
          <p className="text-brand-600 mt-4 font-medium">— Eduarda Moscoso</p>
        </div>
      </div>
    </section>
  );
}
