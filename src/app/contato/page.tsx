import { ContactForm } from "@/components/ContactForm";
import { PageIntro } from "@/components/PageIntro";

export default function ContatoPage() {
  return (
    <main>
      <PageIntro
        badge="Contato"
        title="Vamos conversar sobre o seu projeto"
        text="Preencha o formulário para enviar seus dados e abrir a conversa no WhatsApp da Infinita com a mensagem já preparada."
      />

      <section className="section">
        <div className="container grid grid-2">
          <ContactForm />
          <aside className="card">
            <h2>Atendimento comercial</h2>
            <p className="helper">
              Fale com a Infinita para apresentar sua necessidade, solicitar uma proposta ou entender como estruturar o projeto ideal.
            </p>
            <ul className="listClean">
              <li>WhatsApp: (71) 91111-1111</li>
              <li>Mensagem inicial: “Ola como podemos ajuda-lo”</li>
              <li>Páginas separadas para melhor navegação e posicionamento</li>
              <li>Formulário integrado ao fluxo de contato via WhatsApp</li>
            </ul>
            <div className="btnRow">
              <a className="btn primary" href="https://wa.me/5571911111111?text=Ola%20como%20podemos%20ajuda-lo" target="_blank" rel="noreferrer">
                Abrir WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
