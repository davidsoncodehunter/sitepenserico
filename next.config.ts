import type { NextConfig } from "next";

const config: NextConfig = {
  async redirects() {
    return [
      // o tutorial mudou de nome em 23/11: o link antigo continua funcionando
      { source: "/tutoriais/video-de-funcao-com-o-claude", destination: "/tutoriais/video-cinematografico-com-o-claude", permanent: true },
    ];
  },
};

export default config;
