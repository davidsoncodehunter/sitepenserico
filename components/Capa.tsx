import Image from "next/image";

type Props = {
  numero: string;
  nome: string;
  /** arte do ChatGPT em /public/fotos, ex.: "/fotos/capa-if30.png". Sem ela, usa a capa desenhada. */
  src?: string;
  className?: string;
};

// Capa do curso. Enquanto a arte final não chega, mostra uma capa desenhada em CSS
// (número grande + nome), para o site já ficar acabado.
export default function Capa({ numero, nome, src, className = "" }: Props) {
  return (
    <div className={`capa ${className}`}>
      {src ? (
        <Image src={src} alt={`Capa do curso ${nome}`} fill sizes="(max-width: 900px) 80vw, 420px" style={{ objectFit: "cover" }} />
      ) : (
        <>
          <span className="capa-n" aria-hidden>{numero}</span>
          <span className="capa-tag">Pense Rico</span>
          <span className="capa-nome">{nome}</span>
        </>
      )}
    </div>
  );
}
