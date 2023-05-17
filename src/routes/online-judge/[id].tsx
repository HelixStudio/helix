import { Test, User } from "@prisma/client";
import { For, Show, createSignal } from "solid-js";
import { RouteDataArgs, createRouteAction, useRouteData } from "solid-start";
import server$, { createServerData$ } from "solid-start/server";
import { ButtonAction } from "~/components/Button";
import CodeEditor from "~/components/CodeEditor";
import { useUserSessionIntern } from "~/utils/auth";
import { getDB } from "~/utils/db";

interface SolvedProblem {
  problem_id: number;
  tests: number[];
  code: string;
}

export function problemRouteData({ params }: RouteDataArgs) {
  return createServerData$(
    async (id: string, { request }) => {
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

      const user = await useUserSessionIntern(request)!;

      const solved: { solved_problems: SolvedProblem[] } = JSON.parse(
        user.solved?.toString()!
      );
      const solved_problems = solved.solved_problems.filter(
        (solved: SolvedProblem) => solved.problem_id == problem?.id
      );

      return { problem, user, solved_problems };
    },
    { key: () => params.id }
  );
}

export default function ProblemPage() {
  const apiEndpoint = "http://localhost:4000"; // https://helix-td2p.onrender.com

  const data = useRouteData<typeof problemRouteData>();
  const [code, setCode] = createSignal("");
  const [score, setScore] = createSignal(0);
  const [didRun, setDidRun] = createSignal(false);
  const [openedModal, setOpenedModal] = createSignal(false);
  const [previewCode, setPreviewCode] = createSignal("");

  const saveSolution = server$(
    async (
      user: User,
      code: string,
      test_results: number[],
      problem_id: number
    ) => {
      const solved_problems: SolvedProblem[] =
        user.solved != null
          ? (
              JSON.parse(user.solved.toString()) as unknown as {
                solved_problems: SolvedProblem[];
              }
            ).solved_problems
          : [];
      solved_problems.push({ problem_id, tests: test_results, code });

      const db = getDB()!;
      await db.user.update({
        where: { id: user.id },
        data: { solved: JSON.stringify({ solved_problems }) },
      });
    }
  );

  const [runningSolution, runSolution] = createRouteAction(
    async ({
      code,
      tests,
      user,
      problemId,
    }: {
      code: string;
      tests: Test[];
      user: User;
      problemId: number;
    }) => {
      let headersList = {
        "Content-Type": "application/json",
      };

      let response = await fetch(apiEndpoint + "/rce/test?unsafe=true", {
        method: "POST",
        body: JSON.stringify({
          lang: "cpp",
          tests: tests,
          code: code,
        }),
        headers: headersList,
      });

      const text = await response.text();
      const data = JSON.parse(text) as {
        error: string;
        test_results: number[];
      };

      await saveSolution(user, code, data.test_results!, problemId);

      return data;
    }
  );

  return (
    <main class="bg-secondary-800 text-white h-screen flex flex-col">
      <div class="bg-secondary-800 px-7 py-1 mb-1 flex flex-row items-center justify-between">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
          {data()?.problem?.title}
        </h2>
        <div class="flex flex-row items-center gap-5">
          {/* <pre class="text-2xl bg-secondary-700 p-1 rounded-md">
            {score()}/100
          </pre> */}
          <ButtonAction
            action={() => {
              setDidRun(true);
              runSolution({
                code: code(),
                tests: data()?.problem?.tests!,
                user: data()?.user!,
                problemId: data()?.problem!.id!,
              });
            }}
            text="Submit"
          />
        </div>
      </div>
      <div class="grid grid-cols-3 h-full">
        <div
          class="flex flex-col col-span-1 overflow-y-auto mb-3"
          id="statement"
        >
          <div class="mx-7 row-span-2">
            <p>{data()?.problem?.statement}</p>
            <p class="text-xl mt-3 font-bold tracking-tight items-center">
              Input
            </p>
            <p>{data()?.problem?.input}</p>
            <p class="text-xl mt-3 font-bold tracking-tight items-center">
              Output
            </p>
            <p>{data()?.problem?.output}</p>
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
                <For each={data()?.problem?.samples!.samples}>
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
            <p>{data()?.problem?.notes}</p>
          </div>
          <div class="mt-3 mx-7 row-span-1">
            <table class="mt-1 min-w-full table-auto">
              <thead>
                <tr class="bg-secondary-700 text-white uppercase text-sm leading-normal">
                  <th class="py-3 px-6 text-left">Solution</th>
                  <th class="py-3 px-6 text-left">Score</th>
                  <th class="py-3 px-6 text-left">Code</th>
                </tr>
              </thead>
              <tbody class="text-gray-100 text-sm font-light">
                <For each={data()?.solved_problems}>
                  {(solved_problem) => (
                    <tr class="border border-secondary-700">
                      <td class="py-3 px-6 text-left whitespace-nowrap">
                        {solved_problem.problem_id}
                      </td>
                      <td class="py-3 px-6 text-left">
                        {() => {
                          let sum = 0;
                          solved_problem.tests.forEach((test) => {
                            sum += test;
                          });
                          return sum;
                        }}
                      </td>
                      <td
                        class="py-3 px-6 text-left whitespace-nowrap cursor-pointer text-primary-400"
                        onClick={() => {
                          setPreviewCode(solved_problem.code);
                          setOpenedModal(true);
                        }}
                      >
                        View
                      </td>
                    </tr>
                  )}
                </For>
              </tbody>
            </table>
            <Show when={openedModal()}>
              <div
                class="relative z-10"
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true"
              >
                <div
                  class="fixed inset-0 transition-opacity"
                  style={{ "background-color": "rgba(0,0,0,0.4)" }}
                ></div>
                <div class="fixed inset-0 z-10 overflow-y-auto">
                  <div class="flex min-h-full items-end justify-center p-2 text-center sm:items-center sm:p-0">
                    <div class="relative transform overflow-hidden rounded-lg bg-secondary-700 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                      <div class="bg-secondary-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div class="mt-3 text-center sm:ml-1 sm:mt-0 sm:text-left">
                          {/* <h2 class="text-3xl font-bold tracking-tight mb-6">
                            Project options
                          </h2> */}
                          <div class="flex flex-col gap-3">
                            {/* <div class="flex flex-row gap-3">
                              <p>Project name </p>
                              <input
                                type="text"
                                class="relative block w-full rounded-lg transition-colors border-0 py-1.5 ring-2 ring-inset ring-secondary-700 placeholder:text-secondary-100 bg-secondary-700 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-primary-400 sm:text-sm sm:leading-6"
                                placeholder="Project Name"
                              />
                            </div> */}
                            <pre>{previewCode()}</pre>
                          </div>
                        </div>
                      </div>
                      <div class="bg-secondary-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-3">
                        <ButtonAction
                          action={() => {
                            setOpenedModal(false);
                          }}
                          text={"Ok"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Show>
          </div>
        </div>
        <div
          class="mx-3 grid col-span-2 gap-2 max-h-[95vh]"
          style={{ "grid-template-rows": "2fr 1fr" }}
        >
          <div class="flex overflow-hidden flex-col rounded-md">
            <div class="bg-secondary-700 h-8 items-center flex flex-row px-3">
              <pre>C++</pre>
            </div>
            <CodeEditor
              style={{ height: "100vh", width: "1fr" }} // maybe fix
              initialContent={
                '#include <iostream>\n\nint main() {\n\tstd::cout << "Hello, World!\\n";\n\treturn 0;\n}\n'
              }
              typeCallback={(newContent: string) => {
                setCode(newContent);
              }}
            />
          </div>
          <div class="mb-3 w-full rounded-md flex overflow-auto flex-col">
            <div class="bg-secondary-700 h-8 items-center flex flex-row px-3">
              <p>
                Output
                {runningSolution.result != undefined
                  ? () => {
                      if (runningSolution.result?.error != "") return "";
                      let sum = 0;
                      runningSolution.result?.test_results.forEach(
                        (element) => {
                          sum += element;
                        }
                      );
                      setScore(sum);
                      return "";
                    }
                  : ""}
              </p>
            </div>
            <div class="font-mono whitespace-pre bg-secondary-900 overflow-y-auto h-full">
              {runningSolution.result != undefined ? (
                typeof runningSolution.result?.test_results.map ===
                "function" ? (
                  <div class="grid min-h-full grid-rows-4 flex-grow">
                    {runningSolution.result?.test_results.map((test, index) => {
                      return (
                        <div class="w-full px-3 row-span-1 hover:bg-secondary-700 flex items-center transition-all cursor-pointer">
                          <h1>
                            Test #{index}: {test} points{" "}
                            {test > 0 ? "✅" : "❌"}
                          </h1>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  runningSolution.result?.error
                )
              ) : !didRun() ? (
                "Click 'Submit' to run your code!"
              ) : (
                "loading..."
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
