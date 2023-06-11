import axios from "axios";

export interface Language {
  name: string;
  version: string;
}

export interface Output {
  run: {
    stdout: string;
    stderr: string;
    code: number;
    signal: any;
    output: string;
  };
  language: string;
  version: string;
}

export const getLanguageVersion = (lang: string) => {
  const ver = supportedLanguages.find((l) => l.name == lang);
  if (ver != undefined) return ver.version;
  return "";
};

export const runCode = async (
  code: string,
  lang: string
): Promise<Output | undefined> => {
  const version = getLanguageVersion(lang);
  if (version == "") return undefined;

  const endpoint = "https://emkc.org/api/v2/piston";
  const res = await axios.post(endpoint + "/execute", {
    language: lang,
    version: version,
    files: [
      {
        content: code,
      },
    ],
  });

  return res.data as Output;
};

// https://emkc.org/api/v2/piston/runtimes
export const supportedLanguages: Language[] = [
  {
    name: "cpp",
    version: "10.2.0",
  },
  {
    name: "javascript",
    version: "1.32.3",
  },
  {
    name: "csharp",
    version: "5.0.201",
  },
  {
    name: "elixir",
    version: "1.11.3",
  },
  {
    name: "c",
    version: "10.2.0",
  },
  {
    name: "go",
    version: "1.16.2",
  },
  {
    name: "haskell",
    version: "9.0.1",
  },
  {
    name: "nasm64",
    version: "2.15.5",
  },
  {
    name: "python",
    version: "3.10.0",
  },
  {
    name: "rust",
    version: "1.68.2",
  },
  {
    name: "swift",
    version: "5.3.3",
  },
  {
    name: "zig",
    version: "0.9.1",
  },
];
