/**
 * Dados do site em um único lugar.
 */

export const site = {
  name: "Eduarda Moscoso",
  role: "Psicóloga Clínica",
  crp: "CRP 10/11273",
  approach: "Psicanálise",

  /** Formato internacional, só dígitos: 55 (Brasil) + 91 (DDD) + número. */
  whatsapp: "5591983297125",
  phone: "(91) 98329-7125",
  phoneHref: "tel:+5591983297125",

  instagram: "psi.eduardamoscoso",

  logo: "/logo-eduarda.jpg",
  logoMark: "/logo-marca.png",
  /** Retrato do hero, com o fundo de estúdio removido.
   *  Original em assets-fonte/, recortado por tools/recorte-fundo.js. */
  photoHeroCutout: "/eduarda-hero.webp",
  photoAbout: "/eduarda-foto-2.jpg",
} as const;

export const instagramUrl = `https://www.instagram.com/${site.instagram}`;

/** Monta o link do WhatsApp com a mensagem já preenchida. */
export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
