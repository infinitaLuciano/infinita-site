"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Início" },
  { href: "/solucoes", label: "Soluções" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" }
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="topbar">
      <div className="container nav">
        <Link href="/" className="brand" aria-label="Infinita">
          <div className="logoBox">
            <Image src="/infinita-logo.png" alt="Logo Infinita" width={72} height={72} priority />
          </div>
          <div className="brandText">
            <strong>INFINITA</strong>
            <span>Tecnologia e Gestão de Sistemas</span>
          </div>
        </Link>

        <nav className="navLinks" aria-label="Menu principal">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className={active ? "active" : ""}>
                {link.label}
              </Link>
            );
          })}
          <a
            className="btn primary"
            href="https://wa.me/5571911111111?text=Ola%20como%20podemos%20ajuda-lo"
            target="_blank"
            rel="noreferrer"
          >
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
