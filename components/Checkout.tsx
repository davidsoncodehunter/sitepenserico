"use client";

type Props = { href: string | null; children: React.ReactNode; className?: string; value?: number };

declare global {
  interface Window { fbq?: (...args: unknown[]) => void }
}

// Botão de compra. Sem link, aparece desativado ("em breve").
export default function Checkout({ href, children, className = "btn btn-amber", value }: Props) {
  if (!href) {
    return <span className={className} aria-disabled="true">Em breve</span>;
  }
  return (
    <a
      href={href}
      className={className}
      onClick={() => window.fbq?.("track", "InitiateCheckout", value ? { value, currency: "BRL" } : undefined)}
    >
      {children} <span className="arrow" aria-hidden>→</span>
    </a>
  );
}
