import Image from "next/image";
import Link from "next/link";

const solutions = [
  "Sistemas sob medida para operação e controle",
  "Integrações com APIs, CRM, WhatsApp e plataformas existentes",
  "Automação de fluxos e processos internos",
  "Painéis de acompanhamento e gestão operacional",
  "Atendimento inteligente e soluções com IA",
  "Tecnologia aplicada à inspeção e vistoria veicular"
];

const differentials = [
  "Visão de negócio aliada à execução técnica",
  "Projetos personalizados conforme a realidade do cliente",
  "Arquitetura preparada para escalar",
  "Foco em organização, produtividade e rastreabilidade",
  "Integração com sistemas já utilizados pela empresa",
  "Atuação estratégica em tecnologia para inspeção veicular"
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container heroWrap">
          <div>
            <span className="badge">Tecnologia, automação e gestão de sistemas</span>
            <h1>
              Soluções digitais com foco em <span className="highlight">eficiência</span>, integração e controle.
            </h1>
            <p>
              A Infinita entrega projetos de tecnologia para empresas que precisam estruturar operações,
              automatizar processos e evoluir sua gestão com mais precisão — com destaque especial para
              sistemas voltados à inspeção e vistoria veicular.
            </p>
            <div className="btnRow">
              <Link className="btn primary" href="/contato">Solicitar apresentação</Link>
              <a className="btn secondary" href="https://wa.me/5571911111111?text=Ola%20como%20podemos%20ajuda-lo" target="_blank" rel="noreferrer">
                Falar no WhatsApp
              </a>
            </div>

            <div className="heroStats">
              <div className="card">
                <strong>Integrações</strong>
                <span>Conecte CRM, API, WhatsApp e sistemas internos.</span>
              </div>
              <div className="card">
                <strong>Automação</strong>
                <span>Reduza tarefas manuais e aumente produtividade.</span>
              </div>
              <div className="card">
                <strong>Especialização</strong>
                <span>Experiência aplicada ao segmento de inspeção veicular.</span>
              </div>
            </div>
          </div>

          <div className="card heroPanel">
            <Image src="/infinita-logo.png" alt="Infinita" width={420} height={320} priority />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <h2>Soluções que apoiam o crescimento da sua operação</h2>
            <p>
              Estruturação tecnológica, integração e melhoria contínua para empresas que precisam de mais controle e performance.
            </p>
          </div>
          <div className="grid grid-3">
            {solutions.map((item) => (
              <article key={item} className="card">
                <h3>{item}</h3>
                <p className="helper">
                  Projetos desenhados para melhorar atendimento, fluxo operacional, dados e tomada de decisão.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          <div className="card">
            <div className="sectionHeader">
              <h2>Diferenciais da Infinita</h2>
              <p>Uma atuação orientada por resultado, processo e capacidade de integração.</p>
            </div>
            <ul className="listClean">
              {differentials.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className="card">
            <div className="sectionHeader">
              <h2>Especialistas em tecnologia para inspeção e gestão veicular</h2>
              <p>
                Desenvolvemos soluções que ajudam operações a elevar padrão, rastreabilidade e confiabilidade
                em fluxos técnicos e administrativos ligados ao setor automotivo.
              </p>
            </div>
            <div className="btnRow">
              <Link className="btn primary" href="/solucoes">Conhecer soluções</Link>
              <Link className="btn secondary" href="/sobre">Sobre a empresa</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card" style={{padding: 36}}>
          <div className="sectionHeader">
            <h2>Vamos estruturar a solução ideal para sua empresa</h2>
            <p>
              Fale com a Infinita para avaliar integrações, automações, sistemas sob medida e projetos focados em operação.
            </p>
          </div>
          <div className="btnRow">
            <Link className="btn primary" href="/contato">Entrar em contato</Link>
            <a className="btn secondary" href="https://wa.me/5571911111111?text=Ola%20como%20podemos%20ajuda-lo" target="_blank" rel="noreferrer">
              Conversar agora
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
