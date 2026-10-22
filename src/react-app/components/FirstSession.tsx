import { MessageCircle, Ear, HelpCircle, Target, Clock, Tag, Users } from 'lucide-react';
import { whatsappLink } from '@/react-app/config/site';

const steps = [
  {
    icon: MessageCircle,
    title: 'Agendamento',
    description: 'Você me chama no WhatsApp e combinamos um horário que caiba na sua rotina.',
  },
  {
    icon: Ear,
    title: 'Acolhimento inicial',
    description: 'Conversamos sobre a sua história, suas demandas e o que te trouxe até aqui.',
  },
  {
    icon: HelpCircle,
    title: 'Suas dúvidas',
    description: 'Você conhece a minha forma de trabalhar e pode perguntar o que quiser.',
  },
  {
    icon: Target,
    title: 'Plano individualizado',
    description: 'A partir dessa conversa, definimos objetivos e delineamos o acompanhamento.',
  },
];

export default function FirstSession() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div data-revelar>
            <span className="text-brand-600 font-medium text-sm tracking-wide uppercase">Primeira Sessão</span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-800 mt-3 mb-6"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Como funciona a primeira sessão?
            </h2>

            <p className="text-slate-600 leading-relaxed mb-8">
              A primeira sessão é destinada ao acolhimento inicial e à compreensão do que
              te levou a buscar a psicoterapia. Também é a oportunidade de você conhecer a
              minha forma de trabalhar, esclarecer dúvidas e começar a construir o vínculo
              terapêutico — sem nenhum compromisso de continuar.
            </p>

            {/* Steps */}
            <div className="space-y-4">
              {steps.map((step, i) => (
                <div key={step.title} className="flex items-start gap-4 p-4 bg-brand-50 rounded-xl border border-brand-100" data-revelar style={{ animationDelay: `${i * 80}ms` }}>
                  <div className="w-10 h-10 bg-brand-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon className="text-brand-700" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">{step.title}</h3>
                    <p className="text-slate-500 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Highlight card */}
            <div className="bg-gradient-to-br from-brand-600 to-brand-800 text-white p-8 rounded-2xl shadow-xl">
              <Tag size={28} className="mb-4 text-azure-300" />
              <h3
                className="text-2xl font-semibold mb-3"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Valor promocional na primeira sessão
              </h3>
              <p className="text-brand-100 leading-relaxed">
                Para que o primeiro passo seja mais leve, a sessão inicial tem um valor
                acessível. Assim você conhece o processo antes de decidir seguir.
              </p>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-brand-50 p-5 rounded-xl border border-brand-100">
                <Clock className="text-brand-600 mb-3" size={24} />
                <h4 className="font-semibold text-slate-800 mb-1">Duração</h4>
                <p className="text-slate-500 text-sm">Sessões de aproximadamente 50 minutos</p>
              </div>
              <div className="bg-azure-50 p-5 rounded-xl border border-azure-200">
                <Users className="text-azure-600 mb-3" size={24} />
                <h4 className="font-semibold text-slate-800 mb-1">Público</h4>
                <p className="text-slate-500 text-sm">Mulheres e adolescentes a partir dos 13 anos</p>
              </div>
            </div>

            {/* CTA */}
            <a
              href={whatsappLink('Olá, Eduarda! Gostaria de agendar minha primeira sessão com o valor promocional.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary block w-full bg-brand-600 hover:bg-brand-700 text-white text-center py-4 rounded-xl font-medium"
            >
              Agendar primeira sessão
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
