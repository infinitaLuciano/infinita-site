import { PageIntro } from "@/components/PageIntro";

const items = [
  {
    title: "Sistemas sob medida",
    text: "Desenvolvimento de plataformas e módulos conforme a necessidade operacional da empresa."
  },
  {
    title: "Integração entre sistemas",
    text: "Conexão entre APIs, CRM, WhatsApp, bancos de dados e sistemas legados para eliminar retrabalho."
  },
  {
    title: "Automação de processos",
    text: "Mapeamento e automação de etapas repetitivas para aumentar velocidade e padronização."
  },
  {
    title: "Painéis e indicadores",
    text: "Visualização gerencial para acompanhar volume, produtividade, SLA e desempenho operacional."
  },
  {
    title: "Atendimento com IA",
    text: "Estruturação de fluxos de atendimento inteligente integrados ao WhatsApp e outras plataformas."
  },
  {
    title: "Inspeção e gestão veicular",
    text: "Soluções voltadas a vistoria, validação, rastreabilidade e gestão de operações no setor automotivo."
  }
];

export default function SolucoesPage() {
  return (
    <main>
      <PageIntro
        badge="Soluções"
        title="Tecnologia aplicada ao seu modelo de operação"
        text="A Infinita desenvolve soluções alinhadas à realidade do cliente, com foco em eficiência, integração e sustentação do crescimento."
      />

      <section className="section">
        <div className="container grid grid-3">
          {items.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p className="helper">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
