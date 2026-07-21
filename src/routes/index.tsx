import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import ebookCover from "@/assets/ebook-cover.png";

const CHECKOUT_URL =
  "https://kubeta.ao/produto/transforme_seu_corpo_o_guia_definitivo_para_emagrecer_e_definir_a_silhueta_11776?r=Fkg4112933Ol2i";

const priceOld = "70.000 Kz";
const priceNow = "5.550 Kz";

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
    question: "É seguro comprar pela Kubeta?",
    answer:
      "A Kubeta é uma plataforma de pagamentos confiável em Angola. O pagamento é processado de forma segura e você recebe o acesso ao seu ebook.",
  },
  {
    question: "E se eu não gostar?",
    answer:
      "Você tem 7 dias de garantia. Se o guia não te ajudar, basta pedir reembolso. Não corra nenhum risco.",
  },
];

const modules = [
  "Plano de 30 dias passo a passo",
  "Cardápios simples e baratos",
  "Exercícios para fazer em casa",
  "Mentalidade para não desistir",
  "Dicas para acelerar o metabolismo",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emagreça em 30 Dias | Ebook de Dicas de Emagrecimento" },
      {
        name: "description",
        content:
          "Ebook completo com dicas práticas para emagrecer em 30 dias. Receitas simples, treinos em casa e método passo a passo. De 70.000 Kz por apenas 5.550 Kz.",
      },
      {
        property: "og:title",
        content: "Emagreça em 30 Dias | Ebook de Dicas de Emagrecimento",
      },
      {
        property: "og:description",
        content:
          "Método simples para emagrecer em 30 dias com receitas práticas e treinos em casa. Oferta especial por tempo limitado.",
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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <span className="text-sm font-semibold tracking-tight text-foreground">
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

function HeroSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 text-center md:py-24">
      <span className="inline-block rounded-full bg-highlight/15 px-3 py-1 text-xs font-medium text-highlight">
        Oferta especial por tempo limitado
      </span>
      <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
        Descubra como emagrecer em 30 dias sem passar fome e sem academia
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
        Um ebook prático com dicas simples, receitas baratas e rotinas rápidas para transformar o seu corpo no seu ritmo.
      </p>
      <div className="mx-auto mt-10 max-w-sm">
        <img
          src={ebookCover}
          alt="Capa do ebook Emagreça em 30 Dias"
          width={512}
          height={512}
          className="mx-auto w-full rounded-2xl shadow-xl"
        />
      </div>
      <div className="mt-10 flex flex-col items-center gap-4">
        <Button asChild size="lg" className="h-14 px-8 text-lg bg-highlight text-highlight-foreground hover:bg-highlight/90">
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
            Quero emagrecer agora
          </a>
        </Button>
        <p className="text-sm text-muted-foreground">
          Pagamento seguro via Kubeta • Acesso imediato
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
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-foreground">
            Tudo o que você precisa, em um só lugar
          </h3>
          <p className="mt-4 text-muted-foreground">
            Chega de procurar informação solta na internet. Este guia junta o essencial para você começar hoje e ver resultados em 30 dias.
          </p>
          <div className="mt-6">
            <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
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
          Desconto de 92% — por tempo limitado
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
      <div className="mt-10 space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h3 className="font-semibold text-foreground">{faq.question}</h3>
            <p className="mt-2 text-muted-foreground">{faq.answer}</p>
          </div>
        ))}
      </div>
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
