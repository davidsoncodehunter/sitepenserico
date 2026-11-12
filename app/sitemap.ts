import type { MetadataRoute } from "next";
import { PRODUTOS } from "@/lib/produtos";
import { todosTutoriais } from "@/lib/tutoriais";

const BASE = "https://openserico.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const tutoriais = todosTutoriais().map((t) => ({
    url: `${BASE}/tutoriais/${t.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    { url: BASE, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/tutoriais`, changeFrequency: "weekly", priority: 0.7 },
    ...PRODUTOS.map((p) => ({
      url: `${BASE}/curso/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...tutoriais,
    { url: `${BASE}/privacidade`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/termos`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
