import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <h4>Infinita</h4>
          <p>
            Tecnologia, automação e gestão de sistemas com foco em eficiência operacional,
            integração de plataformas e soluções para inspeção veicular.
          </p>
        </div>
        <div>
          <h4>Navegação</h4>
          <ul>
            <li><Link href="/">Início</Link></li>
            <li><Link href="/solucoes">Soluções</Link></li>
            <li><Link href="/sobre">Sobre</Link></li>
            <li><Link href="/contato">Contato</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contato</h4>
          <p>WhatsApp: (71) 91111-1111</p>
          <p>Atendimento comercial e projetos sob demanda.</p>
          <p>
            <a href="https://wa.me/5571911111111?text=Ola%20como%20podemos%20ajuda-lo" target="_blank" rel="noreferrer">
              Iniciar conversa
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
