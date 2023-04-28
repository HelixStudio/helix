import { onMount } from "solid-js";
import {
  darkPlusTheme,
  githubDarkTheme,
  solarizedDarkTheme,
} from "~/utils/monaco/themes";

export default function CodeEditor() {
  onMount(() => {
    require.config({
      paths: { vs: "https://unpkg.com/monaco-editor@0.37.1/min/vs" },
    });
    require(["vs/editor/editor.main"], function () {
      monaco.editor.defineTheme("solarized-dark", solarizedDarkTheme);
      monaco.editor.defineTheme("github-dark", githubDarkTheme); // https://github.com/brijeshb42/monaco-themes/tree/master/themes
      var editor = monaco.editor.create(document.getElementById("editor"), {
        theme: "github-dark",
        value:
          "#include <cstdlib>\n\nint solve(int a, int b) {\n\treturn a + b;\n}\n",
        language: "cpp",
      });
    });
  });
  return (
    <main>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://unpkg.com/monaco-editor@0.37.1/min/vs/editor/editor.main.css"
      />
      <script src="https://unpkg.com/monaco-editor@0.37.1/min/vs/loader.js"></script>
      <div style={{ height: "100vh", width: "48vw" }} id="editor"></div>
    </main>
  );
}

//       defaultLanguage: "javascript",
//       theme: "vs-dark",
//       defaultValue:
//         "let a = 5;\n\nif(a % 2 == 1) {\n\tconsole.log('a is not even');\n} else {\n\tconsole.log('a is even');\n}\n\n",
