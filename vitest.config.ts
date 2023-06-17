import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
    include: ["**/*.spec.tsx"],
    globals: true,
  },
  resolve: {
    alias: [{ find: "~", replacement: resolve(__dirname, "./src") }],
  },
});
