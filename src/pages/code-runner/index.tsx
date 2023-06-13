import { Editor, useMonaco } from "@monaco-editor/react";
import { type NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PanelGroup, PanelResizeHandle, Panel } from "react-resizable-panels";
import AppShell from "~/components/ui/AppShell";
// import { Button } from "~/components/ui/Button";
import { LoadingSpinner } from "~/components/ui/Loading";
import { api } from "~/utils/api";

const CodeRunnerPage: NextPage = () => {
  const defaultCode = `IO.puts("Hello world from Elixir")`;
  const lang = "elixir";

  const [output, setOutput] = useState("");
  const [code, setCode] = useState(defaultCode);
  const [executing, setExecuting] = useState(false);

  const monaco = useMonaco();
  useEffect(() => {
    if (!monaco) return;

    // todo: bigger font size
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
      <div>
        <PanelGroup direction="horizontal" className="min-h-screen">
          <Panel defaultSize={20} minSize={10} maxSize={30}>
            <div className="m-1 h-full bg-secondary-800 p-2">
              <div className="mb-2 flex w-full flex-row  items-center gap-5">
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
                <p>Language: Elixir</p>
              </div>
              <p>files</p>
            </div>
          </Panel>
          <PanelResizeHandle className="mx-1 w-2 bg-secondary-800" />
          <Panel minSize={70}>
            <PanelGroup direction="vertical">
              <Panel className="my-2" defaultSize={80} maxSize={90}>
                <Editor
                  height="90vh"
                  theme="vs-dark"
                  loading={<LoadingSpinner />}
                  defaultLanguage={lang}
                  options={{ smoothScrolling: true }}
                  defaultValue={defaultCode}
                  onChange={handleEditorChange}
                />
              </Panel>
              <PanelResizeHandle className="my-1 h-2 bg-secondary-800" />
              <Panel defaultSize={20} minSize={10} maxSize={30}>
                {!executing ? (
                  <div className="m-1 h-full bg-secondary-800 p-2 font-mono">
                    <span>
                      {output != ""
                        ? output
                        : "Run your code to see the output!"}
                    </span>
                  </div>
                ) : (
                  <div className="flex min-h-full items-center justify-center">
                    <LoadingSpinner size={50} />
                  </div>
                )}
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>
    </AppShell>
  );
};

export default CodeRunnerPage;
