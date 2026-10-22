import { Video, Wifi, Lock, MapPin, CalendarCheck, Home } from 'lucide-react';
import { whatsappLink } from '@/react-app/config/site';

const requirements = [
  {
    icon: Wifi,
    title: 'Internet estável',
    description: 'Celular, tablet ou computador com câmera e uma conexão razoável já bastam.',
  },
  {
    icon: Lock,
    title: 'Um lugar reservado',
    description: 'Um ambiente em que você possa falar à vontade, sem ser interrompida.',
  },
  {
    icon: CalendarCheck,
    title: 'Horário combinado',
    description: 'Marcamos juntas um horário fixo, e o link da sessão chega antes pelo WhatsApp.',
  },
];

export default function OnlineCare() {
  return (
    <section id="atendimento" className="py-20 md:py-28 bg-gradient-to-b from-white to-brand-50/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-revelar>
          <span className="text-brand-600 font-medium text-sm tracking-wide uppercase">Atendimento</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-800 mt-3 mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Terapia online, de onde você estiver
          </h2>
          <p className="text-slate-600 text-lg">
            O atendimento é feito por videochamada, com a mesma seriedade e o mesmo sigilo
            de uma sessão presencial — e sem o deslocamento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Why online */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mb-5">
              <Video className="text-brand-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Por que online funciona</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-600 rounded-full mt-2 flex-shrink-0" />
                <span>Modalidade reconhecida e regulamentada pelo Conselho Federal de Psicologia.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-600 rounded-full mt-2 flex-shrink-0" />
                <span>Você faz a sessão de casa, sem perder tempo no trânsito.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-600 rounded-full mt-2 flex-shrink-0" />
                <span>Mais flexibilidade de horários para quem estuda ou trabalha.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-600 rounded-full mt-2 flex-shrink-0" />
                <span>Continuidade garantida mesmo se você mudar de cidade.</span>
              </li>
            </ul>

            <div className="mt-6 flex items-start gap-3 p-4 bg-azure-50 rounded-xl border border-azure-200">
              <Home className="text-azure-600 flex-shrink-0 mt-0.5" size={20} />
              <p className="text-sm text-slate-600">
                <strong className="text-slate-800">Atendimento domiciliar:</strong> disponível
                em alguns casos específicos. Me chame no WhatsApp para avaliarmos juntas.
              </p>
            </div>
          </div>

          {/* What you need */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Do que você precisa</h3>
            {requirements.map((item, i) => (
              <div
                key={item.title}
                data-revelar
                style={{ animationDelay: `${i * 80}ms` }}
                className="flex items-start gap-4 bg-white p-5 rounded-xl border border-slate-100 shadow-sm"
              >
                <div className="w-11 h-11 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-brand-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}

            <div className="flex items-start gap-4 bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-slate-500" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Atendo todo o Brasil</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Por ser online, não importa a cidade em que você está.
                </p>
              </div>
            </div>

            <a
              href={whatsappLink('Olá, Eduarda! Gostaria de saber mais sobre o atendimento online.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary block w-full bg-brand-600 hover:bg-brand-700 text-white text-center py-4 rounded-xl font-medium mt-2"
            >
              Tirar dúvidas no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
