import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Refrigeração União",
    short_name: "União",
    description: "Conserto de geladeiras, freezers e máquinas de lavar.",
    start_url: "/",
    display: "standalone",
    background_color: "#f1faff",
    theme_color: "#061f3d",
    lang: "pt-BR",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
