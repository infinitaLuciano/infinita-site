import { PageIntro } from "@/components/PageIntro";

export default function SobrePage() {
  return (
    <main>
      <PageIntro
        badge="Sobre a Infinita"
        title="Tecnologia com visão de processo, gestão e resultado"
        text="A Infinita nasce com proposta de unir desenvolvimento de sistemas, automação e organização operacional para empresas que precisam evoluir com mais controle e confiabilidade."
      />

      <section className="section">
        <div className="container grid grid-2">
          <article className="card">
            <h2>Nossa proposta</h2>
            <p className="helper">
              Criar soluções digitais com base técnica sólida e alinhamento com a realidade operacional de cada cliente.
              Mais do que desenvolver software, buscamos estruturar fluxos que funcionem de forma prática no dia a dia.
            </p>
          </article>
          <article className="card">
            <h2>Onde atuamos</h2>
            <p className="helper">
              Sistemas sob medida, integração entre plataformas, automação, atendimento inteligente e projetos com foco especial
              em inspeção e gestão veicular.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
