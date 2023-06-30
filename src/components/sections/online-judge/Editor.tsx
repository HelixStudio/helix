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

const Editor = () => {
  const [lang, setLang] = useState("cpp");

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
            <Button variant={"outline"}>Submit</Button>
            <Button variant={"outline"}>Settings</Button>
          </div>
        }
      >
        yes
      </UIPanel>
    </div>
  );
};

export default Editor;
