import { GraduationCap, Heart, Shield, Brain } from 'lucide-react';
import { site } from '@/react-app/config/site';

export default function About() {
  const qualifications = [
    'Graduação em Psicologia',
    'Pós-graduação em Psicanálise',
    'Pós-graduação em Avaliação Psicológica',
    'Pós-graduação em Neuropsicologia',
  ];

  const differentials = [
    { icon: Heart, title: 'Acolhimento', desc: 'Escuta sem julgamento' },
    { icon: Shield, title: 'Ética', desc: 'Sigilo e respeito à sua história' },
    { icon: Brain, title: 'Olhar técnico', desc: 'Clínica e avaliação integradas' },
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle pattern background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative" data-revelar>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={site.photoAbout}
                alt={site.name}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/20 to-transparent" />
            </div>

            {/* Approach badge */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-brand-600 to-brand-700 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <GraduationCap className="mx-auto mb-2" size={28} />
                <p className="text-sm opacity-90">Abordagem</p>
                <p className="font-semibold">{site.approach}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div data-revelar>
            <span className="text-brand-600 font-medium text-sm tracking-wide uppercase">Sobre Mim</span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-800 mt-3 mb-6"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Escuta clínica com olhar técnico
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              Meu diferencial está na integração entre a escuta clínica e o olhar técnico da
              avaliação psicológica e neuropsicológica. Essa formação me permite considerar
              tanto os aspectos emocionais e subjetivos quanto os processos cognitivos e
              comportamentais envolvidos nas demandas de cada pessoa.
            </p>

            <p className="text-slate-600 leading-relaxed mb-6">
              Trabalho com a abordagem <strong className="text-slate-800">psicanalítica</strong>,
              que possibilita investigar os aspectos conscientes e inconscientes envolvidos nos
              sentimentos, nos comportamentos e nas relações. A proposta é oferecer um espaço de
              escuta qualificada no qual você possa compreender sua história, reconhecer padrões
              e construir novas possibilidades de se relacionar consigo mesma e com o mundo.
            </p>

            <p className="text-slate-600 leading-relaxed mb-8">
              Busco um atendimento individualizado, ético e acolhedor, respeitando a
              singularidade de cada paciente e construindo, em conjunto, caminhos possíveis
              para o seu processo de desenvolvimento e cuidado emocional.
            </p>

            {/* Qualifications */}
            <div className="mb-8">
              <h3 className="font-semibold text-slate-800 mb-4">Formação Acadêmica</h3>
              <ul className="space-y-2">
                {qualifications.map((qual) => (
                  <li key={qual} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">{qual}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Differentials */}
            <div className="grid grid-cols-3 gap-4">
              {differentials.map((item, i) => (
                <div key={item.title} className="text-center p-4 bg-slate-50 rounded-xl" data-revelar style={{ animationDelay: `${i * 80}ms` }}>
                  <item.icon className="mx-auto mb-2 text-brand-600" size={24} />
                  <p className="font-medium text-slate-800 text-sm">{item.title}</p>
                  <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
