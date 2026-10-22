/**
 * Dados do site em um único lugar.
 * Os valores marcados com TODO precisam ser preenchidos antes de publicar.
 */

export const site = {
  name: "Eduarda Moscoso",
  role: "Psicóloga Clínica",
  crp: "CRP 10/11273",
  approach: "Psicanálise",

  // TODO: trocar pelo WhatsApp real (formato internacional, só dígitos)
  whatsapp: "5500000000000",
  // TODO: trocar pelo telefone real, exibido no footer
  phone: "(00) 0 0000-0000",
  phoneHref: "tel:+5500000000000",

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
