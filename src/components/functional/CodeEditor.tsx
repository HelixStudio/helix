import { LoadingSpinner } from "~/components/ui/Loading";
import { Editor as MonacoEditor, useMonaco } from "@monaco-editor/react";
import { useEffect, useState } from "react";
import { getLanguage } from "~/utils/code";
import {
  type EditorSettingsProps,
  getDefaultEditorSettings,
} from "./EditorSettings";
import { registerThemes } from "~/utils/monaco-themes";

export type CodeEditorSettings = {
  lang: string;
  initialCode: string;
} & EditorSettingsProps;

export const codeEditorDefaults: CodeEditorSettings = {
  lang: "cpp",
  initialCode: getLanguage("cpp").defaultCode,
  fontSize: getDefaultEditorSettings().fontSize,
  fontFamily: getDefaultEditorSettings().fontFamily,
  theme: getDefaultEditorSettings().theme,
  vimMode: getDefaultEditorSettings().vimMode,
};

const CodeEditor = ({
  settings,
  onCodeChange,
}: {
  settings: CodeEditorSettings;
  onCodeChange: (code: string) => void;
}) => {
  const [code, setCode] = useState(settings.initialCode);
  const [vim, setVim] = useState<{ dispose: () => void } | undefined>(
    undefined
  );

  const monaco = useMonaco();
  useEffect(() => {
    if (!monaco) return;

    monaco.languages.register({ id: "haskell" });
    monaco.languages.setMonarchTokensProvider("haskell", {
      tokenizer: {
        root: [
          [/[A-Z][\w$]*/, "type.identifier"],
          [
            /[a-zA-Z_$][\w$]*/,
            {
              cases: {
                "@keywords": { token: "keyword.$0" },
                "@default": "identifier",
              },
            },
          ],
          { include: "@whitespace" },
          [/[{}()\[\]]/, "@brackets"],
          [/[<>](?!@symbols)/, "@brackets"],
          [
            /@symbols/,
            {
              cases: {
                "@operators": "delimiter",
                "@default": "",
              },
            },
          ],
          [/@\s*[a-zA-Z_\$][\w\$]*/, "annotation"],
          [/(@digits)[eE]([\-+]?(@digits))?[fFdD]?/, "number.float"],
          [/(@digits)\.(@digits)([eE][\-+]?(@digits))?[fFdD]?/, "number.float"],
          [/0[xX](@hexdigits)[Ll]?/, "number.hex"],
          [/0(@octaldigits)[Ll]?/, "number.octal"],
          [/0[bB](@binarydigits)[Ll]?/, "number.binary"],
          [/(@digits)[fFdD]/, "number.float"],
          [/(@digits)[lL]?/, "number"],
          [/[;,.]/, "delimiter"],
          [/"([^"\\]|\\.)*$/, "string.invalid"],
          [/"""/, "string", "@multistring"],
          [/"/, "string", "@string"],
          [/'[^\\']'/, "string"],
          [/'/, "string.invalid"],
        ],
        whitespace: [
          [/[ \t\r\n]+/, ""],
          [/\/\*\*(?!\/)/, "comment.doc", "@javadoc"],
          [/\/\*/, "comment", "@comment"],
          [/\/\/.*$/, "comment"],
        ],
        comment: [
          [/[^\/*]+/, "comment"],
          [/\/\*/, "comment", "@comment"],
          [/\*\//, "comment", "@pop"],
          [/[\/*]/, "comment"],
        ],
        javadoc: [
          [/[^\/*]+/, "comment.doc"],
          [/\/\*/, "comment.doc", "@push"],
          [/\/\*/, "comment.doc.invalid"],
          [/\*\//, "comment.doc", "@pop"],
          [/[\/*]/, "comment.doc"],
        ],
        string: [
          [/[^\\"\n]+/, "string"],
          [/@escapes/, "string.escape"],
          [/\\./, "string.escape.invalid"],
          [/"/, "string", "@pop"],
        ],
        multistring: [
          [/[^\\"\n]+/, "string"],
          [/@escapes/, "string.escape"],
          [/\\./, "string.escape.invalid"],
          [/"""/, "string", "@pop"],
          [/./, "string"],
        ],
      },
      keywords: [
        "as",
        "as?",
        "break",
        "class",
        "continue",
        "do",
        "else",
        "false",
        "for",
        "fun",
        "if",
        "in",
        "!in",
        "interface",
        "is",
        "!is",
        "null",
        "object",
        "package",
        "return",
        "super",
        "this",
        "throw",
        "true",
        "try",
        "typealias",
        "val",
        "var",
        "when",
        "while",
        "by",
        "catch",
        "constructor",
        "delegate",
        "dynamic",
        "field",
        "file",
        "finally",
        "get",
        "import",
        "init",
        "param",
        "property",
        "receiver",
        "set",
        "setparam",
        "where",
        "actual",
        "abstract",
        "annotation",
        "companion",
        "const",
        "crossinline",
        "data",
        "enum",
        "expect",
        "external",
        "final",
        "infix",
        "inline",
        "inner",
        "internal",
        "lateinit",
        "noinline",
        "open",
        "operator",
        "out",
        "override",
        "private",
        "protected",
        "public",
        "reified",
        "sealed",
        "suspend",
        "tailrec",
        "vararg",
        "field",
        "it",
      ],
      operators: [
        "+",
        "-",
        "*",
        "/",
        "%",
        "=",
        "+=",
        "-=",
        "*=",
        "/=",
        "%=",
        "++",
        "--",
        "&&",
        "||",
        "!",
        "==",
        "!=",
        "===",
        "!==",
        ">",
        "<",
        "<=",
        ">=",
        "[",
        "]",
        "!!",
        "?",
        "->",
        "@",
        ";",
        "$",
        "_",
      ],
      symbols: /[=><!~?:&|+\-*\/\^%]+/,
      escapes:
        /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
      digits: /\d+(_+\d+)*/,
      octaldigits: /[0-7]+(_+[0-7]+)*/,
      binarydigits: /[0-1]+(_+[0-1]+)*/,
      hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
    });

    registerThemes(monaco);

    monaco.editor.setTheme(settings.theme);

    if (settings.vimMode) {
      const enableVim = (MonacoVim: {
        initVimMode: (
          // this is a mess anyway :)
          arg0: unknown,
          arg1: HTMLElement | null
        ) => { dispose: () => void };
      }) => {
        setVim(
          MonacoVim.initVimMode(
            monaco.editor.getEditors()[0],
            document.getElementById("vim-bar") // TODO
          ) as { dispose: () => void }
        );
      };

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      window.require(["monaco-vim"], enableVim);
    } else {
      if (vim != undefined) {
        vim.dispose();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monaco, settings.theme, settings.vimMode]);

  return (
    <div className="h-full">
      <MonacoEditor
        loading={<LoadingSpinner />}
        defaultLanguage={settings.lang}
        language={settings.lang}
        theme={settings.theme as string}
        options={{
          smoothScrolling: true,
          fontSize: settings.fontSize,
          fontFamily: settings.fontFamily,
          fontLigatures: true,
        }}
        defaultValue={code}
        value={code}
        onChange={(value, _) => {
          setCode(value as string);
          onCodeChange(value as string);
        }}
        onMount={() => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          window.require.config({
            paths: {
              "monaco-vim":
                "https://unpkg.com/monaco-vim@0.4.0/dist/monaco-vim.js",
            },
          });
        }}
      />
    </div>
  );
};

export default CodeEditor;
