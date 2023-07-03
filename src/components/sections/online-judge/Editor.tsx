import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/Select";
import { supportedLanguages } from "~/utils/code";
import { Button } from "~/components/ui/Button";
import UIPanel from "~/components/ui/UIPanel";
import { type SetStateAction, useState } from "react";
import CodeEditor, {
  codeEditorDefaults,
} from "~/components/functional/CodeEditor";
import EditorSettings from "~/components/functional/EditorSettings";
import { api } from "~/utils/api";
import { toastSuccess } from "~/utils/toast";

const Editor = ({ problemId }: { problemId: number }) => {
  const [settings, setSettings] = useState(codeEditorDefaults);
  const [lang, setLang] = useState(settings.lang);
  const [code, setCode] = useState(settings.initialCode);

  const sendSubmission = api.problem.sendSubmission.useMutation();

  return (
    <div className="h-full">
      <UIPanel
        pages={[]}
        leading={
          <div className="flex flex-row gap-3">
            <Select
              defaultValue={lang}
              onValueChange={(newValue: SetStateAction<string>) => {
                setLang(newValue.toString());
                setSettings({
                  fontFamily: settings.fontFamily,
                  fontSize: settings.fontSize,
                  theme: settings.theme,
                  vimMode: settings.vimMode,

                  lang: newValue.toString(),
                  initialCode: settings.initialCode,
                });
              }}
            >
              <SelectTrigger className="min-w-[8rem] max-w-[180px]">
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
        }
        controls={
          <div className="flex flex-row gap-3">
            <Button
              variant={"outline"}
              onClick={() => {
                sendSubmission.mutate({
                  language: lang,
                  source: code,
                  problemId: problemId,
                });
                toastSuccess("Submission sent!");
              }}
            >
              Submit
            </Button>
            <EditorSettings
              callback={(args) => {
                setSettings({
                  fontFamily: args.fontFamily,
                  fontSize: args.fontSize,
                  theme: args.theme,
                  vimMode: args.vimMode,

                  lang: lang,
                  initialCode: settings.initialCode,
                });
              }}
            />
          </div>
        }
      >
        <CodeEditor
          settings={settings}
          onCodeChange={(newCode) => setCode(newCode)}
        />
      </UIPanel>
    </div>
  );
};

export default Editor;
