import { Test } from "@prisma/client";
import { For, createSignal, onMount } from "solid-js";
import { RouteDataArgs, createRouteAction, useRouteData } from "solid-start";
import { createServerAction$, createServerData$ } from "solid-start/server";
import { ButtonAction, ButtonLink } from "~/components/Button";
import CodeEditor from "~/components/CodeEditor";
import { getDB } from "~/utils/db";

export function problemRouteData({ params }: RouteDataArgs) {
  return createServerData$(
    async (id: string) => {
      const db = getDB()!;
      if (db == undefined) {
        console.error("DB is undefined.");
      }
      const problem = await db.problem.findUnique({
        where: { id: parseInt(id) },
        include: {
          author: { select: { id: true, username: true } },
          tests: true,
        },
      });
      return problem;
    },
    { key: () => params.id }
  );
}

export default function ProblemPage() {
  const problem = useRouteData<typeof problemRouteData>();
  const [code, setCode] = createSignal("");
  const [didRun, setDidRun] = createSignal(false);

  const [runningSolution, runSolution] = createRouteAction(
    async ({ code, tests }: { code: string; tests: Test[] }) => {
      let headersList = {
        "Content-Type": "application/json",
        // "X-Auth": "wkjesrc24509873", // TODO: generate API keys
      };

      let response = await fetch(
        "https://helix-td2p.onrender.com/rce/test?unsafe=true",
        // "http://localhost:4000/rce/test?unsafe=true",
        {
          method: "POST",
          body: JSON.stringify({
            tests: tests,
            code: code,
          }),
          headers: headersList,
        }
      );

      let data = await response.text();
      return JSON.parse(data) as { error: string; test_results: number[] };
    }
  );

  return (
    <main class="bg-secondary-800 text-white min-h-screen">
      <div>
        <div class="bg-secondary-800 px-7 py-1 mb-1 flex flex-row items-center justify-between">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            {problem()?.title}
          </h2>
          <div class="flex flex-row items-center gap-5">
            <pre class="text-2xl bg-secondary-700 p-1 rounded-md">0/100</pre>
            <ButtonAction
              action={() => {
                setDidRun(true);
                runSolution({ code: code(), tests: problem()?.tests! });
              }}
              text="Submit"
            />
          </div>
        </div>
        <div class="flex flex-row">
          <div class="ml-7 mr-7 max-w-5xl mx-3" style={{ width: "52vw" }}>
            <p>{problem()?.statement}</p>
            <p class="text-xl mt-3 font-bold tracking-tight items-center">
              Input
            </p>
            <p>{problem()?.input}</p>
            <p class="text-xl mt-3 font-bold tracking-tight items-center">
              Output
            </p>
            <p>{problem()?.output}</p>
            <p class="text-xl mt-3 font-bold tracking-tight items-center">
              Sample
            </p>
            <table class="mt-1 min-w-full table-auto">
              <thead>
                <tr class="bg-secondary-700 text-white uppercase text-sm leading-normal">
                  <th class="py-3 px-6 text-left">input</th>
                  <th class="py-3 px-6 text-left">output</th>
                </tr>
              </thead>
              <tbody class="text-gray-100 text-sm font-light">
                <For each={problem()?.samples!.samples}>
                  {(sample) => (
                    <tr class="border border-secondary-700">
                      <td class="py-3 px-6 text-left whitespace-nowrap">
                        {sample.input}
                      </td>
                      <td class="py-3 px-6 text-left">{sample.output}</td>
                    </tr>
                  )}
                </For>
              </tbody>
            </table>
            <p class="text-xl mt-3 font-bold tracking-tight items-center">
              Notes
            </p>
            <p>{problem()?.notes}</p>
            <div class="mt-3"></div>
          </div>
          <div class="mx-3 flex flex-col">
            <CodeEditor
              initialContent={
                '#include <iostream>\n\nint main() {\n\tstd::cout << "Hello, World!\\n";\n\treturn 0;\n}\n'
              }
              typeCallback={(newContent: string) => {
                setCode(newContent);
              }}
            />
            <div class="mt-3 w-full rounded-md flex overflow-hidden flex-col">
              <div class="bg-secondary-700 h-8 items-center flex flex-row px-3">
                <p>Output</p>
              </div>
              <div class="font-mono whitespace-pre h-[26vh] bg-secondary-900 overflow-y-auto">
                {/* {runningSolution.result?.output ||
                    runningSolution.result?.error ||
                    (!didRun()
                      ? "Click 'Submit' to run your code!"
                      : "loading...")} */}
                {runningSolution.result != undefined ? (
                  <div class="grid min-h-full grid-rows-4 flex-grow">
                    {runningSolution.result?.test_results.map((test, index) => (
                      <div class="w-full px-3 row-span-1 hover:bg-secondary-700 flex items-center transition-all cursor-pointer">
                        <h1>
                          Test #{index}: {test} points {test > 0 ? "✅" : "❌"}
                        </h1>
                      </div>
                    ))}
                  </div>
                ) : !didRun() ? (
                  "Click 'Submit' to run your code!"
                ) : (
                  "loading..."
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
