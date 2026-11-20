// Ícones em SVG (traço 1.75, estilo Lucide). Um único conjunto, sem emoji.
type P = { size?: number; className?: string };

const base = (size: number) => ({
  width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: 1.75, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true,
});

export const Check = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}><path d="M20 6 9 17l-5-5" /></svg>
);
export const Arrow = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const Shield = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}><path d="M12 3 4 6v6c0 4.5 3.2 8 8 9 4.8-1 8-4.5 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></svg>
);
export const Clock = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const Send = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}><path d="m21 3-9.5 18-2.2-7.8L2 11 21 3Z" /><path d="m9.3 13.2 5.2-4.4" /></svg>
);
export const Layers = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></svg>
);
export const Plus = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}><path d="M12 5v14M5 12h14" /></svg>
);
export const Spark = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" /></svg>
);
export const Lock = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
);
export const Instagram = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}><rect x="2.5" y="2.5" width="19" height="19" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.3 6.7h.01" /></svg>
);
export const Youtube = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
);
export const Whatsapp = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}><path d="M3 21l1.6-4.8A8.5 8.5 0 1 1 8 19.4Z" /><path d="M8.5 8.5c0 4 3 7 7 7 .6 0 1-.5.9-1.1l-.4-1.6a.9.9 0 0 0-1-.6l-1.5.3a5.6 5.6 0 0 1-2.5-2.5l.3-1.5a.9.9 0 0 0-.6-1l-1.6-.4A1 1 0 0 0 8 8.5Z" /></svg>
);
export const Book = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}><path d="M12 7c-2-2-5-2-7-1v13c2-1 5-1 7 1 2-2 5-2 7-1V6c-2-1-5-1-7 1Z" /><path d="M12 7v13" /></svg>
);
export const Users = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}><circle cx="9" cy="8" r="3.3" /><path d="M2.5 20c0-3.3 3-5.8 6.5-5.8s6.5 2.5 6.5 5.8" /><circle cx="17.5" cy="8.5" r="2.4" /><path d="M16 14.3c2.3.4 4.2 2 4.8 4.4" /></svg>
);
export const BarChart = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}><path d="M4 19V11M10 19V5M16 19v-6M21 19v-9" /></svg>
);
