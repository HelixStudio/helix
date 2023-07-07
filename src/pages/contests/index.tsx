import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import AppShell from "~/components/ui/AppShell";
import { LoadingSection } from "~/components/ui/Loading";
import { api } from "~/utils/api";

dayjs.extend(utc);

const OnlineJudgePage: NextPage = () => {
  const session = useSession();

  const contests = api.contest.getContests.useQuery({ limit: 100 });

  if (session.status === "loading" || contests.isLoading)
    return <LoadingSection />;

  return (
    <AppShell>
      <Head>
        <title>Helix | Online Judge</title>
      </Head>
      <main className="bg-secondary-700 text-white">
        <div className="m-3 ml-auto mr-auto max-w-5xl p-3">
          <h2 className="items-center text-3xl font-bold tracking-tight sm:text-4xl">
            Helix Contests
          </h2>
          <p className="text-secondary-100 mt-4 pb-6">todo: write text</p>
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-secondary-800 text-sm uppercase leading-normal text-white">
                  <th className="px-6 py-3 text-left">Title</th>
                  <th className="px-6 py-3 text-left">Authors</th>
                  <th className="px-6 py-3 text-left">Start</th>
                  <th className="px-6 py-3 text-left">Duration</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-100">
                {contests.data?.map((contest) => {
                  return (
                    <tr key={contest.id} className="hover:bg-secondary-800">
                      <td className="px-6 py-3 text-left text-accent-400 hover:underline">
                        <Link href={`/contests/${contest.id}`}>
                          {contest.title}
                        </Link>
                      </td>
                      <td className="px-6 py-3 text-left hover:underline">
                        <Link href={`/user/${contest.author.id}`}>
                          {contest.author.name}
                        </Link>
                      </td>
                      <td className="px-6 py-3 text-left">
                        {dayjs(contest.start).utc().format("DD.MM.YYYY, HH:mm")}
                      </td>
                      <td className="px-6 py-3 text-left">
                        {dayjs(dayjs(contest.end).diff(dayjs(contest.start)))
                          .utc()
                          .format("HH:mm")}
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
