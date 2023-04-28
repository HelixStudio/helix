import { For, onMount } from "solid-js";
import { RouteDataArgs, useRouteData } from "solid-start";
import { createServerAction$, createServerData$ } from "solid-start/server";
import CodeEditor from "~/components/CodeEditor";
import { getDB } from "~/utils/db";

export function problemRouteData({ params }: RouteDataArgs) {
  return createServerData$(
    async (id: string) => {
      const db = getDB()!;
      if (db == undefined) {
        console.error("DB is undefined.");
      }
      const problem = await db.problem.findFirst({
        where: { id: parseInt(id) },
        include: { author: { select: { id: true, username: true } } },
      });
      return problem;
    },
    { key: () => params.id }
  );
}

export default function ProblemPage() {
  const problem = useRouteData<typeof problemRouteData>();

  return (
    <main class="bg-secondary-800 text-white min-h-screen">
      <div class="flex flex-row">
        <div class="ml-7 mr-7 max-w-5xl m-3" style={{ width: "52vw" }}>
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl items-center">
            {problem()?.title}
          </h2>
          <p class="mt-3">{problem()?.statement}</p>
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
        </div>
        <CodeEditor />
      </div>
    </main>
  );
}
