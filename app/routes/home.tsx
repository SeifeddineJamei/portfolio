import type { Route } from "./+types/home";
import Portfolio from "../portfolio/portfolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "John Doe - Product Engineer" },
    { name: "description", content: "Portfolio of John Doe, Product Engineer specializing in bridging code and user experiences." },
  ];
}

export default function Home() {
  return <Portfolio />;
}
