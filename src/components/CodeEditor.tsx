import { createSignal, onMount } from "solid-js";
import {
  draculaTheme,
  githubDarkTheme,
  solarizedDarkTheme,
  darkPlusTheme,
  helixDarkTheme,
} from "~/utils/monaco/themes";

export interface CodeEditorProps {
  initialContent: string;
  typeCallback: (newContent: string) => void;
}

export default function CodeEditor(props: CodeEditorProps) {
  let editor = undefined;
  const [content, setContent] = createSignal(props.initialContent);

  onMount(() => {
    require.config({
      paths: { vs: "https://unpkg.com/monaco-editor@0.37.1/min/vs" },
    });
    require(["vs/editor/editor.main"], function () {
      monaco.editor.defineTheme("solarized-dark", solarizedDarkTheme);
      monaco.editor.defineTheme("dracula", draculaTheme);
      monaco.editor.defineTheme("dark-plus", darkPlusTheme);
      monaco.editor.defineTheme("helix", helixDarkTheme());
      monaco.editor.defineTheme("github-dark", githubDarkTheme); // https://github.com/brijeshb42/monaco-themes/tree/master/themes

      editor = monaco.editor.create(document.getElementById("editor"), {
        theme: "helix",
        smoothScrolling: true,
        value: props.initialContent,
        language: "cpp",
      });

      props.typeCallback(props.initialContent);
      editor.getModel().onDidChangeContent((_) => {
        setContent(editor.getValue());
        props.typeCallback(content());
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
      <script src="https://unpkg.com/monaco-editor@0.37.1/min/vs/loader.js" />
      <div class="flex overflow-hidden flex-col rounded-md">
        <div class="bg-secondary-700 h-8 items-center flex flex-row px-3">
          <pre>C/C++</pre>
        </div>
        <div style={{ height: "60vh", width: "48vw" }} id="editor"></div>
        {/* <div class="bg-secondary-700 h-8 items-center flex flex-row px-3">
          <pre>C/C++</pre>
        </div> */}
      </div>
    </main>
  );
}

//       defaultLanguage: "javascript",
//       theme: "vs-dark",
//       defaultValue:
//         "let a = 5;\n\nif(a % 2 == 1) {\n\tconsole.log('a is not even');\n} else {\n\tconsole.log('a is even');\n}\n\n",
