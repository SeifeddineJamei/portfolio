import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [layout("routes/root.tsx"), index("routes/index.tsx"), route("test", "routes/test.tsx")] satisfies RouteConfig;
