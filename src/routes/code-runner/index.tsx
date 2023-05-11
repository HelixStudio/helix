import { For, createSignal } from "solid-js";
import {
  A,
  Navigate,
  createRouteAction,
  createRouteData,
  useLocation,
  useNavigate,
  useParams,
  useRouteData,
} from "solid-start";
import {
  createServerAction$,
  createServerData$,
  redirect,
} from "solid-start/server";
import { ButtonAction } from "~/components/Button";
import CodeEditor from "~/components/CodeEditor";
import Link from "~/components/Link";
import { getDB, isClient } from "~/utils/db";

export const defaultCode =
  '#include <iostream>\n\nint main() {\n\tstd::cout << "Hello, World!\\n";\n\treturn 0;\n}\n';

export default function CodeRunnerPage() {
  const [code, setCode] = createSignal("");
  const [input, setInput] = createSignal("");
  const [didRun, setDidRun] = createSignal(false);

  const [runningSolution, runSolution] = createRouteAction(
    async ({ code, input }: { code: string; input: string }) => {
      let headersList = {
        "Content-Type": "application/json",
        // "X-Auth": "wkjesrc24509873", // TODO: generate API keys
      };

      let response = await fetch(
        "https://helix-td2p.onrender.com/rce/run?unsafe=true",
        // "http://localhost:4000/rce/test?unsafe=true",
        {
          method: "POST",
          body: JSON.stringify({
            input: input,
            code: code,
          }),
          headers: headersList,
        }
      );

      const text = await response.text();
      const data = JSON.parse(text) as {
        error: string;
        output: string;
      };

      return data;
    }
  );

  return (
    <main class="bg-secondary-800 text-white min-h-screen">
      <div class="grid grid-cols-2 w-full h-screen my-0">
        <div class="m-2 rounded-md flex overflow-hidden flex-col">
          <div class="bg-secondary-700 h-8 items-center flex flex-row px-3">
            <p>C/C++</p>
          </div>
          <CodeEditor
            style={{ height: "100vh", width: "1fr" }}
            initialContent={
              isClient()
                ? localStorage.getItem("code") || defaultCode
                : defaultCode
            }
            typeCallback={(newContent: string) => {
              setCode(newContent);
              localStorage.setItem("code", newContent);
            }}
          />
        </div>
        <div class="grid grid-rows-3">
          <div class="rounded-md m-2 flex overflow-hidden flex-col row-span-2">
            <div class="bg-secondary-700 h-8 items-center flex flex-row px-3">
              <p>Output</p>
            </div>
            <div class="font-mono h-full row-span-2 p-2 whitespace-pre bg-secondary-900 overflow-y-auto">
              {runningSolution.result?.output ||
                runningSolution.result?.error ||
                (!didRun() ? "Click 'Run' to submit your code!" : "loading...")}
            </div>
          </div>
          <div class="rounded-md flex m-2 overflow-hidden flex-col row-span-1 bg-secondary-900">
            <div class="bg-secondary-700 h-8 items-center flex flex-row px-3">
              <p>Input</p>
            </div>
            <textarea
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your input data here!"
              class="font-mono border-0 ring-0 h-full row-span-1 resize-none whitespace-pre bg-secondary-900 overflow-y-auto"
            ></textarea>
            <div class="flex flex-row gap-3 p-2">
              <ButtonAction
                action={() => {
                  setDidRun(true);
                  runSolution({
                    code: code(),
                    input: input(),
                  });
                }}
                text={"Run"}
              />
              {/* <ButtonAction
                action={() => {
                  setDidRun(true);
                  runSolution({
                    code: code(),
                    input: input(),
                  });
                }}
                text={"Save"}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
