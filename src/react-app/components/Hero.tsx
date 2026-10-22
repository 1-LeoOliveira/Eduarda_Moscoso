import { ArrowRight, Phone, Video, Home } from 'lucide-react';
import { site, whatsappLink } from '@/react-app/config/site';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-azure-50/40" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-200/25 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-azure-200/25 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left relative z-10">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-2"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              <span className="text-brand-700">{site.name}</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-500 font-medium mb-4">{site.role}</p>

            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-brand-600 rounded-full animate-pulse" />
              {site.crp}
            </div>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Um espaço de escuta para quem sente que a ansiedade, a cobrança e a dúvida
              sobre as próprias escolhas estão ocupando muito espaço. Atendimento online
              para mulheres e adolescentes, com abordagem psicanalítica.
            </p>

            {/* Service badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm text-slate-600 shadow-sm border border-slate-100">
                <Video size={16} className="text-brand-600" />
                Atendimento Online
              </span>
              <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm text-slate-600 shadow-sm border border-slate-100">
                <Home size={16} className="text-azure-600" />
                Domiciliar (casos específicos)
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={whatsappLink('Olá, Eduarda! Gostaria de agendar minha primeira sessão.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full font-medium"
              >
                <Phone size={20} />
                Agendar primeira sessão
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#sobre"
                className="btn-secondary inline-flex items-center justify-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-full font-medium border border-slate-200"
              >
                Conheça meu trabalho
              </a>
            </div>

            <p className="text-sm text-slate-500 mt-5">
              Primeira sessão com <strong className="text-brand-700">valor promocional</strong> · Atendimento particular
            </p>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-60 sm:w-72 lg:w-full lg:max-w-md">
              {/* Halo difuso */}
              <div className="absolute left-1/2 top-[16%] -translate-x-1/2 w-[145%] aspect-square rounded-full bg-azure-300/20 blur-3xl entrada-disco" />

              {/* Disco de cor. Fica maior que a silhueta de propósito: ela é larga
                  na foto, e um disco menor sumiria atrás dela. */}
              <div className="absolute left-1/2 top-[20%] -translate-x-1/2 w-[135%] aspect-square rounded-full bg-gradient-to-br from-brand-200 via-brand-100 to-azure-200 entrada-disco" />
              <div className="absolute left-1/2 top-[20%] -translate-x-1/2 w-[135%] aspect-square rounded-full border border-white/70 entrada-disco" />

              {/* Retrato recortado. A aura branca é drop-shadow em vez de uma
                  forma atrás: assim ela acompanha o alfa da silhueta. Sem máscara
                  CSS aqui — ela recortaria o brilho na borda da caixa; o fade do
                  pé da foto já vem assado no arquivo. */}
              <img
                src={site.photoHeroCutout}
                alt={`${site.role} ${site.name}`}
                className="relative w-full aura-retrato entrada-retrato"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
