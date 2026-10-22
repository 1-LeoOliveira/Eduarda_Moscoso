import { useEffect } from 'react';

/**
 * Revela os elementos marcados com `data-revelar` conforme eles entram na tela.
 *
 * O estado inicial escondido mora atrás da classe `reveal-ativo`, que este hook
 * põe no <html>: assim, se o JavaScript não rodar, a página continua legível em
 * vez de ficar em branco. Quem pediu menos movimento no sistema não recebe nada
 * disso — nem o estado escondido.
 */
export function useRevelarNoScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const raiz = document.documentElement;
    raiz.classList.add('reveal-ativo');

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (!entrada.isIntersecting) continue;
          entrada.target.classList.add('visivel');
          observador.unobserve(entrada.target); // revela uma vez e esquece
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    document.querySelectorAll('[data-revelar]').forEach((alvo) => observador.observe(alvo));

    return () => {
      observador.disconnect();
      raiz.classList.remove('reveal-ativo');
    };
  }, []);
}
