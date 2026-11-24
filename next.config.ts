import type { NextConfig } from "next";

const config: NextConfig = {
  async redirects() {
    return [
      // o tutorial mudou de nome em 23/11: o link antigo continua funcionando
      { source: "/tutoriais/video-de-funcao-com-o-claude", destination: "/tutoriais/video-cinematografico-com-o-claude", permanent: true },
      { source: "/tutoriais/automacao-de-instagram-com-o-claude", destination: "/tutoriais/clone-do-manychat", permanent: true },
    ];
  },
};

export default config;
