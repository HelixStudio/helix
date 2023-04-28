import monacoEditorPlugin from "vite-plugin-monaco-editor";
import solid from "solid-start/vite";
import vercel from "solid-start-vercel";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    solid({
      adapter: vercel(),
    }),
    monacoEditorPlugin.default({
      languageWorkers: ["editorWorkerService", "json", "typescript"],
    }),
  ],
  ssr: { external: ["@prisma/client"] },
});
