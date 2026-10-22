import { Heart, Instagram, Phone, Video } from 'lucide-react';
import { site, instagramUrl, whatsappLink } from '@/react-app/config/site';
import LogoMark from '@/react-app/components/LogoMark';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-brand-600 to-brand-800 py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 text-center">
          <h2
            className="text-2xl md:text-3xl font-semibold mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Pronta para dar o primeiro passo?
          </h2>
          <p className="text-brand-100 mb-6 max-w-xl mx-auto">
            A primeira sessão tem valor promocional e nenhum compromisso de continuar.
            É só uma conversa para você entender como o processo funciona.
          </p>
          <a
            href={whatsappLink('Olá, Eduarda! Gostaria de agendar minha primeira sessão.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-full font-semibold hover:bg-brand-50 transition-all hover:shadow-xl"
          >
            <Phone size={20} />
            Agendar primeira sessão
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <LogoMark light className="w-12 h-12 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {site.name}
                  </p>
                  <p className="text-slate-400 text-sm">
                    {site.role} • {site.crp}
                  </p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Psicoterapia online com abordagem psicanalítica para mulheres e adolescentes.
                Escuta, acolhimento e um espaço para você se entender melhor.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-brand-400" />
                  <a href={site.phoneHref} className="hover:text-white transition-colors">
                    {site.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Instagram size={16} className="text-brand-400" />
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    @{site.instagram}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Video size={16} className="text-brand-400 mt-0.5" />
                  <span>
                    Atendimento online
                    <br />
                    para todo o Brasil
                  </span>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="#sobre" className="hover:text-white transition-colors">Sobre Mim</a>
                </li>
                <li>
                  <a href="#atuacao" className="hover:text-white transition-colors">Áreas de Atuação</a>
                </li>
                <li>
                  <a href="#atendimento" className="hover:text-white transition-colors">Atendimento Online</a>
                </li>
                <li>
                  <a href="#duvidas" className="hover:text-white transition-colors">Dúvidas Frequentes</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} {site.name}. Todos os direitos reservados.
            </p>
            <p className="text-slate-500 text-sm flex items-center gap-1">
              Feito com <Heart size={14} className="text-brand-400" /> para cuidar de você
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
