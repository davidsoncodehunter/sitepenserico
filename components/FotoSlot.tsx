import Image from "next/image";

type Props = {
  /** caminho dentro de /public, ex.: "/fotos/davidson-hero.jpg". Sem ele, mostra o espaço reservado. */
  src?: string;
  alt: string;
  /** o que enviar para este espaço */
  label: string;
  /** proporção, ex.: "4 / 5" */
  ratio?: string;
  className?: string;
  priority?: boolean;
};

// Espaço reservado para foto/arte. Quando o arquivo existir em /public/fotos,
// basta passar `src` e o espaço vira imagem.
export default function FotoSlot({ src, alt, label, ratio = "4 / 5", className = "", priority }: Props) {
  return (
    <div className={`slot ${className}`} style={{ aspectRatio: ratio }}>
      {src ? (
        <Image src={src} alt={alt} fill sizes="(max-width: 900px) 100vw, 50vw" priority={priority} style={{ objectFit: "cover" }} />
      ) : (
        <div className="slot-empty" role="img" aria-label={alt}>
          <span className="slot-tag">Foto</span>
          <span className="slot-label">{label}</span>
        </div>
      )}
    </div>
  );
}
