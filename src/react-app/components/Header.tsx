import { Instagram, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { site, instagramUrl, whatsappLink } from '@/react-app/config/site';
import LogoMark from '@/react-app/components/LogoMark';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Atuação', href: '#atuacao' },
    { label: 'Atendimento', href: '#atendimento' },
    { label: 'Dúvidas', href: '#duvidas' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-3">
            <LogoMark className="w-10 h-10 md:w-12 md:h-12" />
            <div className="hidden sm:block">
              <p className="text-sm md:text-base font-semibold text-slate-800" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {site.name}
              </p>
              <p className="text-xs text-brand-600">{site.role}</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-pink-600 transition-colors"
              title="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href={whatsappLink('Olá, Eduarda! Gostaria de agendar uma sessão.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-full text-sm font-medium"
            >
              Agendar Sessão
            </a>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-brand-600"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-brand-100">
          <nav className="flex flex-col px-4 py-4 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-600 hover:text-brand-600 py-2 px-3 rounded-lg hover:bg-brand-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-slate-600 hover:text-pink-600 py-2 px-3 rounded-lg hover:bg-pink-50 transition-colors"
            >
              <Instagram size={18} />
              @{site.instagram}
            </a>
            <a
              href={whatsappLink('Olá, Eduarda! Gostaria de agendar uma sessão.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-600 text-white text-center py-3 rounded-full font-medium mt-2"
            >
              Agendar Sessão
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
