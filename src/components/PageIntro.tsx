import { ReactNode } from "react";

export function PageIntro({ badge, title, text }: { badge: string; title: string; text: ReactNode }) {
  return (
    <section className="pageIntro">
      <div className="container">
        <span className="badge">{badge}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
