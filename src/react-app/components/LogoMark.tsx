import { site } from '@/react-app/config/site';
import { cn } from '@/react-app/lib/utils';

type Props = {
  className?: string;
  /** Inverte a marca para branco, para uso sobre fundo escuro. */
  light?: boolean;
};

/**
 * Só o monograma da logo. O arquivo completo traz o nome e o CRP escritos
 * embaixo, que ficam ilegíveis em tamanho de avatar — aqui esse texto fica
 * por conta do HTML ao lado.
 */
export default function LogoMark({ className, light = false }: Props) {
  return (
    <img
      src={site.logoMark}
      alt={`Logo ${site.name}`}
      className={cn('object-contain', light && 'invert', className)}
    />
  );
}
