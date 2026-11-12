import Link from "next/link";
import { Footer, Header } from "@/components/Chrome";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="p404">
        <div className="wrap">
          <div className="num grad">404</div>
          <h1 className="h-grad">Essa página não <span className="serif grad">existe</span>.</h1>
          <p>O link pode ter mudado de lugar. Dá para voltar ao começo ou ver os tutoriais.</p>
          <div className="ctas">
            <Link href="/" className="btn btn-amber">Ir para a página inicial</Link>
            <Link href="/tutoriais" className="btn btn-line">Ver os tutoriais</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
