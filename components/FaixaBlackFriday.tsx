import Capa from "./Capa";
import Checkout from "./Checkout";
import { Shield } from "./Icons";
import { COMBO_CHECKOUT, OFERTA, PRODUTOS } from "@/lib/produtos";

const FRASES = ["Black Friday Pense Rico", "4 cursos por 1", `De ${OFERTA.de} por ${OFERTA.avista}`, "Só até acabar"];

/** Faixa final de Black Friday: capas dos 4 cursos + contraste de preço + CTA. Fica antes do Footer. */
export default function FaixaBlackFriday() {
  return (
    <section className="bf" aria-label="Black Friday Pense Rico">
      <div className="bf-marq" aria-hidden>
        <div className="bf-marq-track">
          {[...FRASES, ...FRASES, ...FRASES].map((f, i) => (
            <span key={i} className="serif">{f}</span>
          ))}
        </div>
      </div>

      <div className="wrap bf-grid">
        <div className="bf-capas" aria-hidden>
          {PRODUTOS.map((p, i) => (
            <Capa key={p.slug} numero={p.numero} nome={p.nome} src={p.capa ?? undefined} className={`bf-c bf-c-${i}`} />
          ))}
        </div>

        <div className="bf-tx">
          <span className="badge"><b>Black Friday</b> os 4 cursos, de uma vez só</span>
          <h2 className="h-grad">
            Separado custaria <span className="old">{OFERTA.de}</span>. Hoje, <span className="serif grad">{OFERTA.avista}</span>.
          </h2>
          <p>
            Depois que a Black Friday acabar, o combo some do ar e cada curso volta a ser vendido pelo seu próprio
            preço. Enquanto durar, você leva os 4 por um preço só.
          </p>
          <Checkout href={COMBO_CHECKOUT} value={1299.99} className="btn btn-amber btn-lg">Garantir o combo agora</Checkout>
          <span className="bf-garantia"><Shield size={15} /> {OFERTA.garantiaDias} dias de garantia, sem burocracia</span>
        </div>
      </div>
    </section>
  );
}
