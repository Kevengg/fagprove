import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import "dotenv/config";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), TanStackRouterVite()],
	server: { port: Number(process.env.PORT) || 3000 },
});
