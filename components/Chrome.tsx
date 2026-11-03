import Link from "next/link";

export function Header() {
  return (
    <>
      <div className="promo">Black Friday Cripto · oferta por tempo limitado</div>
      <header className="header">
        <div className="wrap">
          <Link href="/" className="brand"><i aria-hidden /> Pense Rico</Link>
          <nav className="nav" aria-label="Principal">
            <Link href="/#cursos">Cursos</Link>
            <Link href="/#autor">Quem ensina</Link>
            <Link href="/tutoriais">Tutoriais</Link>
            <Link href="/#oferta" className="btn btn-amber">Quero o combo</Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <Link href="/" className="brand"><i aria-hidden /> Pense Rico</Link>
        <div className="links">
          <Link href="/#cursos">Cursos</Link>
          <Link href="/tutoriais">Tutoriais</Link>
          <Link href="/#faq">Perguntas</Link>
        </div>
        <small>
          Aviso de risco: investimentos em criptomoedas são de alto risco e podem resultar em perda parcial ou total do
          capital. Os conteúdos são educacionais e não constituem recomendação de investimento. Resultados passados ou
          de outros alunos não garantem resultados futuros e variam de pessoa para pessoa.
        </small>
        <small>O Pense Rico © {new Date().getFullYear()} · Todos os direitos reservados</small>
      </div>
    </footer>
  );
}
