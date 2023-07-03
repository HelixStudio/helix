import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  type ProblemMetadata,
  StatementView,
} from "~/components/sections/StatementView";
import AppShell from "~/components/ui/AppShell";
import { Button } from "~/components/ui/Button";
import { LoadingSection } from "~/components/ui/Loading";
import { api } from "~/utils/api";
import { toastSuccess } from "~/utils/toast";

const OnlineJudgePage: NextPage = () => {
  const session = useSession();
  const router = useRouter();

  const problem = api.problem.getProblemById.useQuery({
    id: parseInt(router.query.id as string),
  });

  const submit = api.problem.submitToReview.useMutation();

  if (session.status === "loading" || problem.isLoading)
    return <LoadingSection />;

  if (
    session.status === "unauthenticated" ||
    problem.data?.authorId != session.data?.user.id
  ) {
    void router.push("/");
  }

  return (
    <AppShell>
      <Head>
        <title>Helix | Online Judge</title>
      </Head>
      <main className="bg-secondary-700 text-white">
        <div className="m-3 ml-auto mr-auto max-w-5xl p-3">
          <h2 className="items-center text-3xl font-bold tracking-tight sm:text-4xl">
            Problem #{router.query.id} draft
          </h2>
          <div className="my-2 rounded-md bg-secondary-800 p-3">
            <StatementView problem={problem.data as ProblemMetadata} />
          </div>
          <div>
            <p>That&apos;s the problem&apos;s preview so far. Now you can:</p>
            <ul className="ml-5 list-disc">
              <li>Edit its details</li>
              <li>
                <Link
                  href={`/online-judge/draft/tests?id=${
                    problem.data?.id as number
                  }`}
                  className="text-accent-400 hover:underline"
                >
                  Add example tests
                </Link>{" "}
                (required)
              </li>
              <li>
                <Link
                  href={`/online-judge/draft/tests?id=${
                    problem.data?.id as number
                  }`}
                  className="text-accent-400 hover:underline"
                >
                  Add tests
                </Link>{" "}
                (required)
              </li>
            </ul>
            <div className="my-4 space-y-2">
              <p>
                After you have completed these steps, you can submit the problem
                for review:
              </p>
              <Button
                onClick={() => {
                  submit.mutate({ id: problem.data?.id as number });
                  void router.push("/online-judge");
                  toastSuccess("Problem submitted!");
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </main>
    </AppShell>
  );
};

export default OnlineJudgePage;
