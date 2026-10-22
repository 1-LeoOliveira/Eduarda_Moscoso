import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/react-app/components/ui/accordion';
import { whatsappLink } from '@/react-app/config/site';

const faqs = [
  {
    question: 'Nunca fiz terapia. E se eu não souber o que falar?',
    answer:
      'Isso é muito mais comum do que parece, e não é um problema. Você não precisa chegar com um roteiro pronto nem saber nomear o que está sentindo. A primeira sessão existe justamente para isso: conversar com calma sobre o que te trouxe até aqui. Eu conduzo as perguntas, e o caminho vai se abrindo junto.',
  },
  {
    question: 'E se eu não me adaptar ou não criar conexão com você?',
    answer:
      'O vínculo terapêutico é construído aos poucos, e é absolutamente legítimo levar um tempo para sentir confiança. Você não assume nenhum compromisso de continuar depois da primeira sessão. Se em algum momento perceber que não é comigo, podemos conversar sobre isso abertamente — inclusive sobre encaminhamentos.',
  },
  {
    question: 'Terapia online funciona de verdade?',
    answer:
      'Sim. A modalidade online é reconhecida e regulamentada pelo Conselho Federal de Psicologia, e mantém o mesmo sigilo e a mesma seriedade do atendimento presencial. Para muitas pessoas ela funciona até melhor, por permitir fazer a sessão de um ambiente familiar e sem o desgaste do deslocamento.',
  },
  {
    question: 'Quanto custa? Atende convênio?',
    answer:
      'O atendimento é apenas particular. A primeira sessão tem um valor promocional, pensado justamente para que a questão financeira não seja um impeditivo para dar o primeiro passo. Me chame no WhatsApp e eu te passo os valores atualizados, sem compromisso.',
  },
  {
    question: 'Será que meu problema é "grave o suficiente" para buscar terapia?',
    answer:
      'Você não precisa estar em crise para merecer cuidado. Muita gente adia a terapia esperando um sofrimento grande o bastante para justificá-la. Querer se entender melhor, lidar com a ansiedade do dia a dia ou organizar uma decisão difícil já são motivos legítimos para começar.',
  },
  {
    question: 'O que eu falo na sessão fica em sigilo?',
    answer:
      'Sim. O sigilo é uma obrigação ética prevista no Código de Ética Profissional do Psicólogo. Tudo o que você compartilha nas sessões é confidencial, com as pouquíssimas exceções previstas em lei, que são sempre explicadas a você.',
  },
  {
    question: 'Quem você atende?',
    answer:
      'Atendo mulheres e adolescentes a partir dos 13 anos. No caso de adolescentes, o contato inicial é feito com os responsáveis, preservando o espaço do adolescente dentro das sessões.',
  },
  {
    question: 'Qual é a sua abordagem?',
    answer:
      'Trabalho com a psicanálise, que investiga os aspectos conscientes e inconscientes envolvidos nos sentimentos, nos comportamentos e nas relações. Somo a isso minha formação em avaliação psicológica e neuropsicologia, o que me permite também olhar para os processos cognitivos quando a demanda pede.',
  },
];

export default function Faq() {
  return (
    <section id="duvidas" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14" data-revelar>
          <span className="text-brand-600 font-medium text-sm tracking-wide uppercase">Dúvidas Frequentes</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-800 mt-3 mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            O que costuma travar o primeiro passo
          </h2>
          <p className="text-slate-600 text-lg">
            Reuni aqui as perguntas que mais escuto de quem está pensando em começar.
          </p>
        </div>

        <Accordion type="single" collapsible className="border-slate-200 bg-white shadow-sm" data-revelar>
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`} className="border-slate-200">
              <AccordionTrigger className="px-6 py-5 text-base font-semibold text-slate-800 hover:no-underline hover:text-brand-700">
                {faq.question}
              </AccordionTrigger>
              {/* O AccordionContent já aplica px-4; o px-2 aqui alinha o texto ao px-6 do trigger. */}
              <AccordionContent className="px-2 text-base text-slate-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">Ficou com alguma dúvida que não está aqui?</p>
          <a
            href={whatsappLink('Olá, Eduarda! Tenho uma dúvida sobre os atendimentos.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full font-medium"
          >
            Me pergunte no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
