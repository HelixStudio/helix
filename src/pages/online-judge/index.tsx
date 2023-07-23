import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import AppShell from "~/components/ui/AppShell";
import { LoadingSection } from "~/components/ui/Loading";
import { api } from "~/utils/api";
import { toastPlain } from "~/utils/toast";

const OnlineJudgePage: NextPage = () => {
  const session = useSession();
  const router = useRouter();

  const problems = api.problem.getProblems.useQuery({ limit: 100 });

  if (session.status === "loading" || problems.isLoading)
    return <LoadingSection />;

  if (session.status === "unauthenticated") {
    void router.push("/");
    toastPlain("You need to be logged in to access this page!");
  }

  return (
    <AppShell>
      <Head>
        <title>Helix | Online Judge</title>
      </Head>
      <main className="bg-secondary-700 text-white">
        <div className="m-3 ml-auto mr-auto max-w-5xl p-3">
          <h2 className="items-center text-3xl font-bold tracking-tight sm:text-4xl">
            Problem Set
          </h2>
          <p className="text-secondary-100 mt-4 pb-6">
            The Online Judge system of Helix, here you can solve and practice
            coding problems.
          </p>
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-secondary-800 text-sm uppercase leading-normal text-white">
                  <th className="px-6 py-3 text-left">ID</th>
                  <th className="px-6 py-3 text-left">Title</th>
                  <th className="px-6 py-3 text-left">Source</th>
                  <th className="px-6 py-3 text-left">Author</th>
                  <th className="hidden px-6 py-3 text-left md:table-cell">
                    Difficulty
                  </th>
                  <th className="hidden px-6 py-3 text-left md:table-cell">
                    Tags
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-100">
                {problems.data?.map((problem) => {
                  if (problem.draft) return;
                  return (
                    <tr key={problem.id} className="hover:bg-secondary-800">
                      <td className="whitespace-nowrap px-6 py-3 text-left">
                        {problem.id}
                      </td>
                      <td className="px-6 py-3 text-left text-accent-400 hover:underline">
                        <Link href={`/online-judge/${problem.id}`}>
                          {problem.title}
                        </Link>
                      </td>
                      <td className="px-6 py-3 text-left hover:underline">
                        <Link href={problem.sourceLink} target={"_blank"}>
                          {problem.source}
                        </Link>
                      </td>
                      <td className="px-6 py-3 text-left hover:underline">
                        <Link href={`/user/${problem.author.id}`}>
                          {problem.author.name}
                        </Link>
                      </td>
                      <td className="hidden px-6 py-3 text-left md:table-cell">
                        {problem.difficulty}
                      </td>
                      <td className="hidden px-6 py-3 text-left md:table-cell">
                        {problem.tags.toString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </AppShell>
  );
};

export default OnlineJudgePage;
