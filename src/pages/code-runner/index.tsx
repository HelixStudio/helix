import { Editor, useMonaco } from "@monaco-editor/react";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { type SetStateAction, useEffect, useState } from "react";
import { PanelGroup, PanelResizeHandle, Panel } from "react-resizable-panels";
import AppShell from "~/components/ui/AppShell";
import { Button } from "~/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/Dialog";
import { Input } from "~/components/ui/Input";
import { Label } from "~/components/ui/Label";
import { LoadingSpinner } from "~/components/ui/Loading";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/Popover";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "~/components/ui/Select";
import { api } from "~/utils/api";
import { getLanguage, supportedLanguages } from "~/utils/code";

const CodeRunnerPage: NextPage = () => {
  const [output, setOutput] = useState("");
  const [lang, setLang] = useState("cpp");
  const [code, setCode] = useState(getLanguage(lang).defaultCode);
  const [executing, setExecuting] = useState(false);

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
  }, [monaco]);

  const runCode = api.code.runCode.useMutation({
    onSuccess: (data) => {
      setOutput(data as string);
      setExecuting(false);
    },
  });

  const handleEditorChange = (value: string | undefined, _: unknown) => {
    setCode(value as string);
  };

  const run = () => {
    setExecuting(true);
    runCode.mutate({ code: code, language: lang });
  };

  return (
    <AppShell>
      <Head>
        <title>Helix | Code Runner</title>
      </Head>
      <div>
        <PanelGroup direction="horizontal" className="min-h-screen">
          <Panel defaultSize={20} minSize={10} maxSize={30}>
            <div className="h-full rounded-md bg-secondary-800 p-2">
              <div className="mb-2 flex w-full flex-row items-center gap-3">
                <button onClick={() => run()}>
                  <p
                    className={`relative flex h-10 w-10 items-center justify-center 
                      ${"bg-secondary-700 text-accent-400 hover:rounded-xl hover:bg-accent-500 hover:text-primary-400"}
                      group rounded-3xl transition-all duration-200`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      />
                    </svg>
                  </p>
                </button>
                <Popover>
                  <PopoverTrigger asChild>
                    <button>
                      <p
                        className={`relative flex h-10 w-10 items-center justify-center 
                      ${"bg-secondary-700 text-accent-400 hover:rounded-xl hover:bg-accent-500 hover:text-primary-400"}
                      group rounded-3xl transition-all duration-200`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                          />
                        </svg>
                      </p>
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    choose a layout
                  </PopoverContent>
                </Popover>
                <Select
                  defaultValue={lang}
                  onValueChange={(newValue: SetStateAction<string>) => {
                    setLang(newValue.toString());
                    setCode(getLanguage(newValue.toString()).defaultCode);
                    setOutput("");
                  }}
                >
                  <SelectTrigger className="max-w-[180px]">
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent>
                    {supportedLanguages.map((supLang) => (
                      <SelectItem value={supLang.name} key={supLang.name}>
                        {supLang.fancyName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex h-full items-center justify-center text-center">
                <p>
                  <Link href="#" className="text-accent-400 underline">
                    Login
                  </Link>{" "}
                  to be able to edit multiple files and save your projects.
                </p>
              </div>
            </div>
          </Panel>
          <PanelResizeHandle className="w-1 bg-secondary-600" />
          <Panel minSize={70}>
            <PanelGroup direction="vertical">
              <Panel className="m-0" defaultSize={80} maxSize={90}>
                <div className="flex w-full flex-row items-center justify-between">
                  <div className="flex flex-row">
                    <div className="m-1 flex flex-row items-center justify-between gap-1 rounded-md bg-accent-500 px-2 py-1">
                      <p>main.{getLanguage(lang).extension}</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 20"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="mr-5 flex flex-row gap-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                            />
                          </svg>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Edit profile</DialogTitle>
                          <DialogDescription>
                            Make changes to your profile here. Click save when
                            youre done.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                              Name
                            </Label>
                            <Input
                              id="name"
                              value="Pedro Duarte"
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                              Username
                            </Label>
                            <Input
                              id="username"
                              value="@peduarte"
                              className="col-span-3"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Save changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                <Editor
                  height="90vh"
                  theme="vs-dark"
                  loading={<LoadingSpinner />}
                  defaultLanguage={lang}
                  language={lang}
                  options={{
                    smoothScrolling: true,
                    fontSize: 14,
                    fontFamily: "Fira Code",
                    fontLigatures: true,
                  }}
                  defaultValue={code}
                  value={code}
                  onChange={handleEditorChange}
                />
              </Panel>
              <PanelResizeHandle className="h-1 bg-secondary-600" />
              <Panel defaultSize={20} minSize={10} maxSize={30}>
                <div className="h-full overflow-y-auto whitespace-pre rounded-md bg-secondary-800 p-2 font-mono text-sm">
                  {!executing ? (
                    <span>
                      {output != ""
                        ? output
                        : "Run your code to see the output!"}
                    </span>
                  ) : (
                    <div className="flex min-h-full items-center justify-center">
                      <LoadingSpinner size={50} />
                    </div>
                  )}
                </div>
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>
    </AppShell>
  );
};

export default CodeRunnerPage;
