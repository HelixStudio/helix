import { marked } from "marked";
import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import AppShell from "~/components/ui/AppShell";
import { LoadingSection } from "~/components/ui/Loading";
import { api } from "~/utils/api";
import { sanitize } from "isomorphic-dompurify";
import { Button } from "~/components/ui/Button";
import dayjs from "dayjs";

const ContestDetailsPage: NextPage = () => {
  const session = useSession();
  const router = useRouter();

  const contest = api.contest.getContest.useQuery({
    id: router.query.id as string,
  });

  if (session.status === "loading" || contest.isLoading)
    return <LoadingSection />;

  const renderedContent = marked.parse(contest.data?.description as string);
  const safeContent = sanitize(renderedContent);

  const canRegister = dayjs(contest.data?.start).diff(Date.now(), "month") <= 1;

  return (
    <AppShell>
      <main className="bg-secondary-700 text-white">
        <div className="m-3 ml-auto mr-auto max-w-5xl space-y-5 p-3">
          <h2 className="items-center text-3xl font-bold tracking-tight sm:text-4xl">
            {contest.data?.title}
          </h2>
          <div
            className="prose prose-neutral min-w-full dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: safeContent }}
          />
          {canRegister && (
            <Button
              onClick={() => {
                // TODO: register
              }}
            >
              Register
            </Button>
          )}
        </div>
      </main>
    </AppShell>
  );
};

export default ContestDetailsPage;
