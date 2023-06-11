import { Editor } from "@monaco-editor/react";
import { type NextPage } from "next";
import { useState } from "react";
import AppShell from "~/components/ui/AppShell";
import { Button } from "~/components/ui/Button";
import { LoadingSpinner } from "~/components/ui/Loading";
import { api } from "~/utils/api";

const CodeRunnerPage: NextPage = () => {
  const defaultCode = `IO.puts("Hello world from Elixir")`;
  const lang = "elixir";

  const [output, setOutput] = useState("");
  const [code, setCode] = useState(defaultCode);

  const runCode = api.code.runCode.useMutation({
    onSuccess: (data) => {
      setOutput(data as string);
    },
  });

  const handleEditorChange = (value: string | undefined, _: any) => {
    setCode(value as string);
  };

  const run = () => {
    runCode.mutate({ code: code, language: lang });
  };

  return (
    <AppShell>
      <div>
        <div className="flex flex-row gap-3">
          <Button onClick={() => run()}>run</Button>
          <p className="text-primary-400">
            output: <span>{output}</span>
          </p>
        </div>
        <Editor
          height="90vh"
          theme="vs-dark"
          loading={<LoadingSpinner />}
          defaultLanguage={lang}
          options={{ smoothScrolling: true }}
          defaultValue={defaultCode}
          onChange={handleEditorChange}
        />
      </div>
    </AppShell>
  );
};

export default CodeRunnerPage;
