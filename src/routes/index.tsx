import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CHECKOUT_URL = "https://pay.kumbipay.com/0558e70f-b8cd-4c2a-b8ba-c34e899e30bc";

const priceOld = "5.000 Kz";
const priceNow = "3.500 Kz";

const faqs = [
  {
    question: "Não tenho tempo para academia. Funciona para mim?",
    answer:
      "Sim. O guia foi feito para quem tem pouco tempo. São rotinas de 15 a 20 minutos que pode fazer em casa, sem equipamento caro.",
  },
  {
    question: "Já tentei várias dietas e não deu certo. Por que esta é diferente?",
    answer:
      "Não é uma dieta maluca. É um método de 30 dias com hábitos simples, receitas práticas e passos pequenos que cabem na sua rotina. Resultado vem da constância, não da radicalização.",
  },
  {
    question: "Preciso saber cozinhar complicado?",
    answer:
      "Não. As receitas usam ingredientes fáceis de encontrar em Angola e preparo rápido. Nada de produtos importados ou difíceis.",
  },
  {
    question: "É seguro comprar pela KumbiPay?",
    answer:
      "A KumbiPay é uma plataforma de pagamentos confiável em Angola. O pagamento é processado de forma segura e você recebe o acesso ao seu ebook.",
  },
  {
    question: "E se eu não gostar?",
    answer:
      "Você tem 7 dias de garantia. Se o guia não te ajudar, basta pedir reembolso. Não corra nenhum risco.",
  },
];

const modules = [
  "Plano alimentar completo",
  "Exercícios para fazer em casa",
  "Desafio de 30 dias",
  "Receitas fitness deliciosas",
  "Hábitos que aceleram resultados",
];

const bonuses = [
  "Lista de compras saudáveis",
  "Calendário de acompanhamento diário",
  "Tabela de controlo de água",
  "Planeador semanal de refeições",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emagreça em 30 Dias e Transforme o Seu Corpo" },
      {
        name: "description",
        content:
          "Emagreça em 30 dias e transforme o seu corpo sem dietas radicais. Plano alimentar, treinos em casa e receitas fitness. De 5.000 Kz por apenas 3.500 Kz.",
      },
      {
        property: "og:title",
        content: "Emagreça em 30 Dias e Transforme o Seu Corpo",
      },
      {
        property: "og:description",
        content:
          "Sem dietas radicais: plano alimentar, treinos em casa e receitas simples. Oferta por tempo limitado.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SalesPage,
});

function SalesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <CountdownBar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ModulesSection />
        <ValueSection />
        <SocialProofSection />
        <OfferSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-primary/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <span className="text-sm font-extrabold uppercase tracking-tight text-primary-foreground">
          Emagreça em 30 Dias
        </span>
        <Button asChild size="sm" className="bg-highlight text-highlight-foreground hover:bg-highlight/90">
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
            Quero começar agora
          </a>
        </Button>
      </div>
    </header>
  );
}

function CountdownBar() {
  const [secondsLeft, setSecondsLeft] = useState(5 * 60);

  useEffect(() => {
    const id = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const seconds = String(secondsLeft % 60).padStart(2, "0");

  return (
    <div className="w-full bg-destructive text-destructive-foreground">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-1 px-4 py-3 text-center sm:flex-row sm:gap-3">
        <span className="text-xs font-semibold uppercase tracking-wide sm:text-sm">
          A sua oferta expira em
        </span>
        <span className="font-mono text-2xl font-extrabold tabular-nums">
          {minutes}:{seconds}
        </span>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 text-center md:py-20">
      <span className="inline-block rounded-full bg-highlight px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-highlight-foreground">
        Guia premium de saúde e bem-estar
      </span>
      <h1 className="mt-6 text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-foreground md:text-6xl">
        Emagreça em 30 dias e transforme o seu corpo{" "}
        <span className="text-highlight">sem dietas radicais</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
        Plano alimentar completo, treinos em casa e receitas fitness deliciosas. Mais saúde, mais disposição, mais autoestima.
      </p>
      <p className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
        <span className="text-highlight">★★★★★</span> +3.000 pessoas já transformaram o corpo com este guia
      </p>
      <div className="mt-10 flex flex-col items-center gap-4">
        <Button asChild size="lg" className="h-14 px-8 text-lg bg-highlight text-highlight-foreground hover:bg-highlight/90">
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
            Quero garantir a minha oferta agora
          </a>
        </Button>
        <p className="text-sm text-muted-foreground">
          Pagamento seguro via KumbiPay • Acesso imediato
        </p>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="bg-muted/50">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center md:py-24">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Você já se sentiu assim?
        </h2>
        <div className="mt-10 grid gap-6 text-left md:grid-cols-3">
          {[
            "Cansaço de tentar dietas que não duram nem uma semana",
            "Frustração de não ver resultado no espelho após tanto esforço",
            "Vontade de mudar, mas sem saber por onde começar",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <p className="text-card-foreground">{item}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-lg text-muted-foreground">
          O problema não é você. É falta de um método claro, simples e adaptado à sua rotina.
        </p>
      </div>
    </section>
  );
}

function ModulesSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            O que você vai encontrar no ebook
          </h2>
          <ul className="mt-8 space-y-4">
            {modules.map((module) => (
              <li key={module} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success text-success-foreground text-sm">
                  ✓
                </span>
                <span className="text-lg text-foreground">{module}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-primary p-8 text-primary-foreground shadow-sm">
          <h3 className="text-xl font-extrabold uppercase">
            Bónus exclusivos
          </h3>
          <p className="mt-3 text-sm opacity-90">
            Ferramentas práticas para te acompanhar em cada passo:
          </p>
          <ul className="mt-5 space-y-3">
            {bonuses.map((bonus) => (
              <li key={bonus} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-highlight text-highlight-foreground text-sm">
                  ✓
                </span>
                <span>{bonus}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button asChild className="w-full bg-highlight text-highlight-foreground hover:bg-highlight/90">
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                Garantir meu acesso
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueSection() {
  return (
    <section className="bg-muted/50">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center md:py-24">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Quanto custa tentar emagrecer sozinho?
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { label: "Nutricionista", value: "+30.000 Kz" },
            { label: "Academia (3 meses)", value: "+25.000 Kz" },
            { label: "Suplementos", value: "+15.000 Kz" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border bg-card p-6"
            >
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="mt-2 text-2xl font-bold text-foreground">{item.value}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-lg text-muted-foreground">
          Com este ebook, você leva o método completo por muito menos do que gastaria em uma única consulta.
        </p>
      </div>
    </section>
  );
}

function SocialProofSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        O que as leitoras estão dizendo
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          {
            name: "Ana M.",
            text: "Em duas semanas já senti minha roupa mais folgada. As dicas são fáceis de seguir no dia a dia.",
          },
          {
            name: "Cristina T.",
            text: "Finalmente parei de comer por impulso. O ebook me ajudou a organizar minhas refeições sem sofrimento.",
          },
          {
            name: "Joana P.",
            text: "Paguei pouco e recebi muito valor. As receitas são simples e deliciosas. Recomendo.",
          },
        ].map((testimonial) => (
          <div
            key={testimonial.name}
            className="rounded-xl border border-border bg-card p-6 shadow-sm"
          >
            <p className="text-card-foreground">“{testimonial.text}”</p>
            <p className="mt-4 text-sm font-semibold text-foreground">
              {testimonial.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section className="bg-highlight/10">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center md:py-24">
        <span className="inline-block rounded-full bg-destructive px-3 py-1 text-xs font-semibold text-destructive-foreground">
          Desconto de 30% — só nos próximos minutos
        </span>
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          Aproveite antes que o preço volte ao normal
        </h2>
        <div className="mt-8 inline-flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-8 shadow-lg">
          <p className="text-sm text-muted-foreground">De</p>
          <p className="text-2xl font-medium text-muted-foreground line-through">
            {priceOld}
          </p>
          <p className="text-sm text-muted-foreground">por apenas</p>
          <p className="text-5xl font-extrabold text-highlight md:text-6xl">
            {priceNow}
          </p>
          <p className="text-sm text-muted-foreground">Pagamento único • Acesso vitalício</p>
        </div>
        <div className="mt-8">
          <Button asChild size="lg" className="h-14 px-8 text-lg bg-highlight text-highlight-foreground hover:bg-highlight/90">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              Quero garantir minha cópia
            </a>
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Oferta pode acabar a qualquer momento. Não deixe para depois.
        </p>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 md:py-24">
      <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Tire suas dúvidas
      </h2>
      <Accordion type="single" collapsible className="mt-10 space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={faq.question}
            value={`item-${index}`}
            className="rounded-xl border border-border bg-card px-6"
          >
            <AccordionTrigger className="text-left font-semibold text-foreground">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="mt-10 rounded-2xl border border-success bg-success/10 p-8 text-center">
        <h3 className="text-xl font-semibold text-success-foreground">
          Garantia de 7 dias
        </h3>
        <p className="mt-2 text-muted-foreground">
          Se por qualquer motivo você não ficar satisfeita, devolvemos 100% do seu dinheiro. Você não tem nada a perder, exceto os quilos a mais.
        </p>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center md:py-24">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Você merece sentir-se bem no seu corpo
        </h2>
        <p className="mt-6 text-lg opacity-90">
          Comece hoje mesmo com o guia completo por apenas {priceNow}. A transformação começa com uma decisão simples.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="h-14 px-8 text-lg bg-highlight text-highlight-foreground hover:bg-highlight/90">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              Sim, quero emagrecer em 30 dias
            </a>
          </Button>
        </div>
        <p className="mt-4 text-sm opacity-80">
          Promoção válida por tempo limitado • Acesso imediato após o pagamento
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-4 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Emagreça em 30 Dias. Todos os direitos reservados.
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          Resultados individuais podem variar. Este ebook é um guia informativo e não substitui acompanhamento médico ou nutricional.
        </p>
      </div>
    </footer>
  );
}
