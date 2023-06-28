import { type SetStateAction, useState } from "react";
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
import { themes, type Theme } from "~/utils/monaco-themes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/Select";

export type EditorSettingsProps = {
  fontSize: number;
  fontFamily: string;
  theme: Theme;
};

const getEditorSettingFromStorage = (): EditorSettingsProps | null => {
  if (!(typeof window != "undefined" && window.document)) return null;
  if (localStorage.getItem("editorFontSize") == null) return null;
  return {
    fontSize: parseInt(localStorage.getItem("editorFontSize") as string),
    fontFamily: localStorage.getItem("editorFontFamily") as string,
    theme: localStorage.getItem("editorTheme") as Theme,
  };
};

const setEditorSettingsToStorage = (props: EditorSettingsProps) => {
  localStorage.setItem("editorFontSize", props.fontSize.toString());
  localStorage.setItem("editorFontFamily", props.fontFamily);
  localStorage.setItem("editorTheme", props.theme);
};

export const getDefaultEditorSettings = (): EditorSettingsProps => {
  const ls = getEditorSettingFromStorage();
  if (ls != null) return ls;
  return {
    fontSize: 14,
    fontFamily: "Fira Code",
    theme: "dark-plus",
  };
};

const EditorSettings = (props: {
  callback: (args: EditorSettingsProps) => void;
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [fontSize, setFontSize] = useState(getDefaultEditorSettings().fontSize);
  const [fontFamily, setFontFamily] = useState(
    getDefaultEditorSettings().fontFamily
  );
  const [theme, setTheme] = useState<Theme>(getDefaultEditorSettings().theme);

  return (
    <>
      <Dialog
        open={isOpened}
        onOpenChange={(open: boolean) => {
          setIsOpened(open);
          if (open == false) {
          }
        }}
      >
        <DialogTrigger asChild>
          <Button variant="muted" onClick={() => setIsOpened(true)}>
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
            <DialogTitle>Code Editor settings</DialogTitle>
            <DialogDescription>
              Edit your preferances regarding your coding enviorment.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="font-size" className="text-right">
                Font size
              </Label>
              <Input
                id="font-size"
                type="number"
                onChange={(event) => {
                  setFontSize(parseInt(event.target.value));
                }}
                value={fontSize}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="font-family" className="text-right">
                Font family
              </Label>
              <Input
                id="font-family"
                onChange={(event) => {
                  setFontFamily(event.target.value);
                }}
                value={fontFamily}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="theme" className="text-right">
                Color theme
              </Label>
              <Select
                defaultValue={theme}
                onValueChange={(newValue: SetStateAction<string>) => {
                  setTheme(newValue.toString() as Theme);
                }}
              >
                <SelectTrigger className="col-span-3 w-full">
                  <SelectValue placeholder="Color theme" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  {themes.map((theme) => (
                    <SelectItem value={theme.name} key={theme.name}>
                      {theme.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>{" "}
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              variant={"outline"}
              onClick={() => {
                localStorage.removeItem("editorFontSize");
                localStorage.removeItem("editorFontFamily");
                localStorage.removeItem("editorTheme");

                const defaults = getDefaultEditorSettings();

                setFontSize(defaults.fontSize);
                setFontFamily(defaults.fontFamily);
                setTheme(defaults.theme);

                props.callback(defaults);
                setEditorSettingsToStorage(defaults);

                setIsOpened(false);
              }}
            >
              Reset to default
            </Button>
            <Button
              type="submit"
              onClick={() => {
                props.callback({ fontSize, fontFamily, theme });
                setEditorSettingsToStorage({ fontSize, fontFamily, theme });
                setIsOpened(false);
              }}
            >
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditorSettings;
