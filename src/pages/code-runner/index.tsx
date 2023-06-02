import { Editor, useMonaco } from "@monaco-editor/react";
import { type NextPage } from "next";
import { useEffect } from "react";
import AppShell from "~/components/ui/AppShell";

const CodeRunnerPage: NextPage = () => {
  const monaco = useMonaco();

  useEffect(() => {
    if (!monaco) {
      return;
    }
    monaco.languages.register({ id: "zig" });
    monaco.languages.setMonarchTokensProvider("zig", {
      keywords: [
        "const",
        "var",
        "fn",
        "return",
        "struct",
        "enum",
        "pub",
        "comptime",
        "try",
        "undefined",
        "null",
        "defer",
      ],
      typeKeywords: [
        "i8",
        "i16",
        "i32",
        "i64",
        "u8",
        "u16",
        "u32",
        "u64",
        "void",
        "usize",
      ],
      operators: ["+", "-", "*", "/", "%", "=", "+=", "-=", "*=", "/=", "%="],
      tokenizer: {
        root: [
          [
            /[a-z_$][\w$]*/,
            {
              cases: {
                "@typeKeywords": "type.zig",
                "@keywords": "keyword.zig",
                "@default": "identifier.zig",
              },
            },
          ],
          [/@[a-zA-Z]\w*/, "keyword.zig"],
          [/\d+/, "number.zig"],
          [/"([^"\\]|\\.)*$/, "string.zig", "@string"],
          [/"/, "string.zig", "@string"],
          [/\/\/.*$/, "comment.zig"],
          [/\s+/, ""],
        ],
        string: [
          [/[^\\"]+/, "string.zig"],
          [/"/, "string.zig", "@pop"],
        ],
      },
    });

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
        // Add more Haskell keywords as needed
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
        // Add more Haskell operators as needed
      ],
      symbols: /[=><!~?:&|+\-*\/\^%]+/,
      escapes:
        /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
      digits: /\d+(_+\d+)*/,
      octaldigits: /[0-7]+(_+[0-7]+)*/,
      binarydigits: /[0-1]+(_+[0-1]+)*/,
      hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
    });
  }, [monaco]);

  return (
    <AppShell>
      <div>
        <p>some code here</p>
        <Editor
          height="90vh"
          theme="vs-dark"
          defaultLanguage="zig"
          options={{ smoothScrolling: true }}
          defaultValue="console.log('hello'); // some comment"
        />
      </div>
    </AppShell>
  );
};

export default CodeRunnerPage;
