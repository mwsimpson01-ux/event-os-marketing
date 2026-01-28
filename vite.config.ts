import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
type VitePlugin = ReturnType<typeof react>;

export default defineConfig(async () => {
  const plugins: VitePlugin[] = [react()];

  try {
    const runtimeErrorOverlay = await import(
      "@replit/vite-plugin-runtime-error-modal"
    ).then((m) => m.default());
    plugins.push(runtimeErrorOverlay);
  } catch {
    // Optional: only available in Replit environments.
  }

  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
    try {
      const cartographer = await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer(),
      );
      const devBanner = await import("@replit/vite-plugin-dev-banner").then(
        (m) => m.devBanner(),
      );
      plugins.push(cartographer, devBanner);
    } catch {
      // Optional: only available in Replit environments.
    }
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },
    root: path.resolve(import.meta.dirname, "client"),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});
