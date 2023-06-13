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
    signal: never;
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

export const getDefaultCode = (lang: string) => {
  const version = getLanguageVersion(lang);
  if (version == "") return "";

  switch (lang) {
    case "elixir":
      return `IO.puts("Hello world from Elixir")`;
    case "cpp":
      return `#include <iostream>\n\nint main() {\n\tstd::cout << "Hello world from C++\\n";\n\treturn 0;\n}\n`;
    case "python":
      return `print("Hello world from Python")`;
    case "csharp":
      return `Console.WriteLine("Hello world from C#");`;
    case "c":
      return `#include <stdio.h>\n\nint main() {\n\tprintf("Hello world from C\\n");\n\treturn 0;\n}\n`;
    case "go":
      return `package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello world from Go")\n}\n`;
    case "haskell":
      return `main :: IO ()\n\nmain = putStrLn "Hello world from Haskell"\n`;
    case "rust":
      return `fn main() {\n\tprintln!("Hello world from Rust");\n}\n`;
    case "swift":
      return `print("Hello world from Swift")`;
    case "zig":
      return `const std = @import("std");\npub fn main() !void {\n\tstd.debug.print("Hello world from Zig", .{});\n}\n`;
  }
}; // TODO: fix haskell, zig and csharp

// https://emkc.org/api/v2/piston/runtimes
export const supportedLanguages: Language[] = [
  {
    name: "cpp",
    version: "10.2.0",
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
