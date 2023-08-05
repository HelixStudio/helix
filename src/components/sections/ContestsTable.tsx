import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import Link from "next/link";
import { api } from "~/utils/api";
import { cn } from "~/utils/cn";

dayjs.extend(utc);

export const ContestsTable = ({
  isSmall,
  isDark,
}: {
  isSmall: boolean;
  isDark?: boolean;
}) => {
  const contests = api.contest.getContests.useQuery({ limit: 100 });

  if (contests.isLoading) return <></>;

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr
          className={`${
            isDark ? "bg-secondary-600/50" : "bg-secondary-800"
          } text-sm uppercase leading-normal text-white`}
        >
          <th className="px-10 py-3 text-left">Title</th>
          <th className="hidden px-6 py-3 text-left md:table-cell">Authors</th>
          <th className="px-6 py-3 text-left">Start</th>
          <th
            className={cn(
              "px-6 py-3 text-left",
              isSmall ? "hidden xl:inline-flex" : ""
            )}
          >
            Duration
          </th>
          {/* kinda bad solution but whatever */}
        </tr>
      </thead>
      <tbody className="text-sm text-gray-100">
        {contests.data?.map((contest) => {
          return (
            <tr
              key={contest.id}
              className={`${
                isDark ? "hover:bg-secondary-600/50" : "hover:bg-secondary-800"
              } transition-all`}
            >
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
              <td
                className={cn(
                  "px-6 py-3 text-left",
                  isSmall ? "hidden xl:table-cell" : ""
                )}
              >
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
