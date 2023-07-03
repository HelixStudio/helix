import axios from "axios";

export interface Language {
  name: string;
  fancyName: string;
  version: string;
  defaultCode: string;
  extension: string;
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

export interface TestOutput {
  input: string;
  output: string;
  points: number;
  passed: boolean;
}

export const getLanguageVersion = (lang: string) => {
  const ver = supportedLanguages.find((l) => l.name == lang);
  if (ver != undefined) return ver.version;
  return "";
};

export const getLanguage = (lang: string): Language => {
  const l = supportedLanguages.find((l) => l.name == lang);
  return l as Language;
};

export const runCode = async (
  code: string,
  lang: string,
  input?: string
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
    stdin: input,
  });

  return res.data as Output;
};

export const testCode = async (
  code: string,
  lang: string,
  tests: {
    input: string;
    output: string;
    points: number;
  }[]
): Promise<TestOutput[] | undefined> => {
  const endpoint = "https://exec-4lir.onrender.com/api/v1";
  const res = await axios.post(
    endpoint + "/test",
    {
      language: lang,
      files: [
        {
          name: `file.${getLanguage(lang).extension}`,
          content: code,
        },
      ],
      tests: tests.map((test) => {
        return {
          input: test.input,
          output: test.output,
          points: test.points,
          run_timeout: -1,
          run_memory_limit: -1, // TODO
        };
      }),
    },
    {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    }
  );
  console.log(res.data as TestOutput[]);
  return res.data as TestOutput[];
};

// https://emkc.org/api/v2/piston/runtimes
export const supportedLanguages: Language[] = [
  {
    name: "cpp",
    fancyName: "C++",
    version: "10.2.0",
    defaultCode: `#include <iostream>\n\nint main() {\n\tstd::cout << "Hello world from C++\\n";\n\treturn 0;\n}\n`,
    extension: "cpp",
  },
  {
    name: "java",
    fancyName: "Java",
    version: "15.0.2",
    defaultCode: `class Program {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello world from Java");\n\t}\n}\n`,
    extension: "java",
  },
  {
    name: "elixir",
    fancyName: "Elixir",
    version: "1.11.3",
    defaultCode: `IO.puts("Hello world from Elixir")\n`,
    extension: "ex",
  },
  {
    name: "c",
    fancyName: "C",
    version: "10.2.0",
    defaultCode: `#include <stdio.h>\n\nint main() {\n\tprintf("Hello world from C\\n");\n\treturn 0;\n}\n`,
    extension: "c",
  },
  {
    name: "go",
    fancyName: "Go",
    version: "1.16.2",
    defaultCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello world from Go")\n}\n`,
    extension: "go",
  },
  {
    name: "haskell",
    fancyName: "Haskell",
    version: "9.0.1",
    defaultCode: `main :: IO ()\n\nmain = putStrLn "Hello world from Haskell"\n`,
    extension: "hs",
  },
  {
    name: "python",
    fancyName: "Python",
    version: "3.10.0",
    defaultCode: `print("Hello world from Python")\n`,
    extension: "py",
  },
  {
    name: "rust",
    fancyName: "Rust",
    version: "1.68.2",
    defaultCode: `fn main() {\n\tprintln!("Hello world from Rust");\n}\n`,
    extension: "rs",
  },
  {
    name: "swift",
    fancyName: "Swift",
    version: "5.3.3",
    defaultCode: `print("Hello world from Swift")\n`,
    extension: "swift",
  },
  {
    name: "javascript",
    fancyName: "JavaScript",
    version: "1.32.3",
    defaultCode: `console.log("Hello world from JavaScript");`,
    extension: "js",
  },
];
