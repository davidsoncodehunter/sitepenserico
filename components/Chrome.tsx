import Link from "next/link";
import { Arrow } from "./Icons";

function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Pense Rico, página inicial">
      <span className="logo-mark" aria-hidden>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17 17 7M9 7h8v8" />
        </svg>
      </span>
      <span className="logo-text">Pense Rico</span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label="Principal">
        <Logo />
        <ul className="nav-links">
          <li><Link href="/#cursos">Cursos</Link></li>
          <li><Link href="/#metodo">Método</Link></li>
          <li><Link href="/#autor">Quem ensina</Link></li>
          <li><Link href="/#faq">Dúvidas</Link></li>
          <li><Link href="/tutoriais">Tutoriais</Link></li>
        </ul>
        <Link href="/#oferta" className="nav-cta">
          Quero o combo <Arrow size={15} />
        </Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Logo />
            <p className="footer-about">Educação sobre o mercado de criptomoedas, com método e sem atalhos.</p>
          </div>
          <div className="footer-cols">
            <div>
              <h4>Site</h4>
              <Link href="/#cursos">Cursos</Link>
              <Link href="/#oferta">Oferta</Link>
              <Link href="/#faq">Dúvidas</Link>
            </div>
            <div>
              <h4>Conteúdo</h4>
              <Link href="/tutoriais">Tutoriais</Link>
              <Link href="/#autor">Quem ensina</Link>
            </div>
            <div>
              <h4>Legal</h4>
              <Link href="/privacidade">Privacidade</Link>
              <Link href="/termos">Termos de uso</Link>
              <a href="mailto:pensericodigital@gmail.com">Falar com a gente</a>
            </div>
          </div>
        </div>
        <p className="footer-risk">
          Aviso de risco: investimentos em criptomoedas são de alto risco e podem resultar em perda parcial ou total do
          capital. O Davidson não é consultor nem conselheiro financeiro: os conteúdos são educacionais e não
          constituem recomendação, consultoria ou conselho financeiro. Cada decisão de investimento é de
          responsabilidade exclusiva de quem a toma. Resultados de outros alunos não garantem resultados futuros e
          variam de pessoa para pessoa.
        </p>
        <p className="footer-copy">O Pense Rico © {new Date().getFullYear()} · Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
