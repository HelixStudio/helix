import { For } from "solid-js";
import { A, Navigate, createRouteData, useRouteData } from "solid-start";
import {
  createServerAction$,
  createServerData$,
  redirect,
} from "solid-start/server";
import Link from "~/components/Link";
import { getDB } from "~/utils/db";

export function problemsRouteData() {
  return createServerData$(async () => {
    const db = getDB()!;
    return await db.problem.findMany({
      orderBy: { id: "asc" },
      take: 100,
      include: {
        author: true,
      },
    });
  });
}

export default function OnlineJudgePage() {
  const problems = useRouteData<typeof problemsRouteData>();
  return (
    <main class="bg-secondary-800 text-white min-h-screen">
      <div class="ml-auto mr-auto max-w-5xl m-3">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl items-center">
          Problem Set
        </h2>
        <p class="mt-4 text-secondary-100 pb-6">
          The Online Judge system of Helix, here you can solve and practice
          coding problems.
        </p>
        <div class="overflow-x-auto rounded-lg">
          <table class="min-w-full table-auto">
            <thead>
              <tr class="bg-secondary-700 text-white uppercase text-sm leading-normal">
                <th class="py-3 px-6 text-left">ID</th>
                <th class="py-3 px-6 text-left">Title</th>
                <th class="py-3 px-6 text-left">Source</th>
                <th class="py-3 px-6 text-left">Author / Publisher</th>
              </tr>
            </thead>
            <tbody class="text-gray-100 text-sm font-light">
              <For each={problems()}>
                {(problem) => (
                  <tr class="hover:bg-secondary-700">
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      {problem.id}
                    </td>
                    <td class="py-3 px-6 text-left">
                      <Link
                        href={`/online-judge/${problem.id}`}
                        text={problem.title}
                      />
                    </td>
                    <td class="py-3 px-6 text-left">
                      <Link href={problem.sourceLink} text={problem.source} />
                    </td>
                    <td class="py-3 px-6 text-left">
                      {problem.author.username}
                    </td>
                  </tr>
                )}
              </For>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
