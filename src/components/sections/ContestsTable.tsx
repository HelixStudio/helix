import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import Link from "next/link";
import { api } from "~/utils/api";

dayjs.extend(utc);

export const ContestsTable = () => {
  const contests = api.contest.getContests.useQuery({ limit: 100 });

  if (contests.isLoading) return <></>;

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-secondary-800 text-sm uppercase leading-normal text-white">
          <th className="px-6 py-3 text-left">Title</th>
          <th className="hidden px-6 py-3 text-left md:table-cell">Authors</th>
          <th className="px-6 py-3 text-left">Start</th>
          <th className="px-6 py-3 text-left">Duration</th>
        </tr>
      </thead>
      <tbody className="text-sm text-gray-100">
        {contests.data?.map((contest) => {
          return (
            <tr key={contest.id} className="hover:bg-secondary-800">
              <td className="px-6 py-3 text-left text-accent-400 hover:underline">
                <Link href={`/contests/${contest.id}`}>{contest.title}</Link>
              </td>
              <td className="hidden px-6 py-3 text-left hover:underline md:table-cell">
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
  );
};
