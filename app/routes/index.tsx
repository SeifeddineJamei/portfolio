import type { Route } from "./+types/index";
import Portfolio from "../portfolio/portfolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Seifeddine Jamei - Product Engineer" },
    { name: "description", content: "Portfolio of Seifeddine Jamei, Product Engineer specializing in high-tolerance medical devices and consumer electronics." },
  ];
}

export default function Home() {
  return <Portfolio />;
}
