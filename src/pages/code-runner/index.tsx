import { Editor, useMonaco } from "@monaco-editor/react";
import { type NextPage } from "next";
import { type SetStateAction, useEffect, useState } from "react";
import { PanelGroup, PanelResizeHandle, Panel } from "react-resizable-panels";
import AppShell from "~/components/ui/AppShell";
// import { Button } from "~/components/ui/Button";
import { LoadingSpinner } from "~/components/ui/Loading";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "~/components/ui/Select";
import { api } from "~/utils/api";
import { getDefaultCode } from "~/utils/code";

const CodeRunnerPage: NextPage = () => {
  const [output, setOutput] = useState("");
  const [lang, setLang] = useState("elixir");
  const [code, setCode] = useState(getDefaultCode(lang));
  const [executing, setExecuting] = useState(false);

  const monaco = useMonaco();
  useEffect(() => {
    if (!monaco) return;
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
    runCode.mutate({ code: code as string, language: lang });
  };

  return (
    <AppShell>
      <div>
        <PanelGroup direction="horizontal" className="min-h-screen">
          <Panel defaultSize={20} minSize={10} maxSize={30}>
            <div className="h-full rounded-md bg-secondary-800 p-2">
              <div className="mb-2 flex w-full flex-row items-center gap-5">
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
                <Select
                  defaultValue="elixir"
                  onValueChange={(newValue: SetStateAction<string>) => {
                    setLang(newValue);
                    setCode(getDefaultCode(newValue.toString()));
                  }}
                >
                  <SelectTrigger className="max-w-[180px]">
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cpp">C++</SelectItem>
                    <SelectItem value="elixir">Elixir</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* <p>files</p> */}
            </div>
          </Panel>
          <PanelResizeHandle className="w-2 bg-secondary-600" />
          <Panel minSize={70}>
            <PanelGroup direction="vertical">
              <Panel className="m-0" defaultSize={80} maxSize={90}>
                <Editor
                  height="90vh"
                  theme="vs-dark"
                  loading={<LoadingSpinner />}
                  defaultLanguage={lang}
                  options={{
                    smoothScrolling: true,
                    fontSize: 12,
                    fontFamily: "Fira Code",
                    fontLigatures: true,
                  }}
                  defaultValue={code}
                  value={code}
                  onChange={handleEditorChange}
                />
              </Panel>
              <PanelResizeHandle className="h-2 bg-secondary-600" />
              <Panel defaultSize={20} minSize={10} maxSize={30}>
                <div className="h-full rounded-md bg-secondary-800 p-2 font-mono">
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
