"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sending, setSending] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);

    const form = event.currentTarget;
    const data = new FormData(form);
    const nome = String(data.get("nome") || "");
    const empresa = String(data.get("empresa") || "");
    const telefone = String(data.get("telefone") || "");
    const email = String(data.get("email") || "");
    const mensagem = String(data.get("mensagem") || "");

    const text = encodeURIComponent(
      `Ola como podemos ajuda-lo\n\n` +
      `Novo contato pelo site Infinita:\n` +
      `Nome: ${nome}\n` +
      `Empresa: ${empresa}\n` +
      `Telefone: ${telefone}\n` +
      `Email: ${email}\n` +
      `Mensagem: ${mensagem}`
    );

    window.open(`https://wa.me/5571911111111?text=${text}`, "_blank");
    form.reset();
    setSending(false);
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <div className="formGrid">
        <div className="formField">
          <label htmlFor="nome">Nome</label>
          <input id="nome" name="nome" required placeholder="Seu nome" />
        </div>
        <div className="formField">
          <label htmlFor="empresa">Empresa</label>
          <input id="empresa" name="empresa" placeholder="Nome da empresa" />
        </div>
        <div className="formField">
          <label htmlFor="telefone">Telefone</label>
          <input id="telefone" name="telefone" required placeholder="(71) 99999-9999" />
        </div>
        <div className="formField">
          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" name="email" required placeholder="voce@empresa.com" />
        </div>
        <div className="formField full">
          <label htmlFor="mensagem">Como podemos ajudar?</label>
          <textarea id="mensagem" name="mensagem" required placeholder="Conte brevemente o que sua empresa precisa." />
        </div>
      </div>
      <p className="helper">
        Ao enviar, a mensagem será encaminhada para o WhatsApp da empresa com seus dados preenchidos.
      </p>
      <div className="btnRow">
        <button className="btn primary" type="submit">{sending ? "Abrindo..." : "Enviar pelo WhatsApp"}</button>
      </div>
    </form>
  );
}
