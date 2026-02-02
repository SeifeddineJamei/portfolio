import type { Route } from "./+types/test";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Vercel Deployment Test" },
    { name: "description", content: "Test page for Vercel deployment verification." },
  ];
}

export default function Test() {
  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>Vercel Deployment Test</h1>
      <p>If you can see this page, the Vercel deployment is working correctly!</p>
      <p>Current timestamp: {new Date().toISOString()}</p>
    </main>
  );
}
