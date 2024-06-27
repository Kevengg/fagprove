import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import "dotenv/config";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: { port: Number(process.env.PORT) || 3000 },
	resolve: { alias: { src: resolve(__dirname, "src") } },
});
