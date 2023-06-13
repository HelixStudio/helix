import { Editor } from "@monaco-editor/react";
import { type NextPage } from "next";
import { useState } from "react";
import { PanelGroup, PanelResizeHandle, Panel } from "react-resizable-panels";
import AppShell from "~/components/ui/AppShell";
import { Button } from "~/components/ui/Button";
import { LoadingSpinner } from "~/components/ui/Loading";
import { api } from "~/utils/api";

const CodeRunnerPage: NextPage = () => {
  const defaultCode = `IO.puts("Hello world from Elixir")`;
  const lang = "elixir";

  const [output, setOutput] = useState("");
  const [code, setCode] = useState(defaultCode);
  const [executing, setExecuting] = useState(false);

  const runCode = api.code.runCode.useMutation({
    onSuccess: (data) => {
      setOutput(data as string);
      setExecuting(false);
    },
  });

  const handleEditorChange = (value: string | undefined, _: any) => {
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
            <div className="flex flex-row gap-3">
              <Button onClick={() => run()}>run</Button>
            </div>
            <p>files</p>
          </Panel>
          <PanelResizeHandle className="mx-1 w-2 bg-secondary-800" />
          <Panel minSize={70}>
            <PanelGroup direction="vertical">
              <Panel defaultSize={80} maxSize={90}>
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
                  <span>
                    {output != "" ? output : "Run your code to see the output!"}
                  </span>
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
