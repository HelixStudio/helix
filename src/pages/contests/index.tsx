import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { ContestsTable } from "~/components/sections/ContestsTable";
import AppShell from "~/components/ui/AppShell";
import { LoadingSection } from "~/components/ui/Loading";

const ContestsPage: NextPage = () => {
  const session = useSession();

  if (session.status === "loading") return <LoadingSection />;

  return (
    <AppShell>
      <Head>
        <title>Helix | Contests</title>
      </Head>
      <main className="bg-secondary-700 text-white">
        <div className="m-3 ml-auto mr-auto max-w-5xl p-3">
          <h2 className="items-center text-3xl font-bold tracking-tight sm:text-4xl">
            Helix Contests
          </h2>
          {/* <p className="text-secondary-100 mt-4 pb-6">todo: write text</p> */}
          <div className="overflow-x-auto rounded-lg pt-4">
            <ContestsTable isSmall={false} />
          </div>
        </div>
      </main>
    </AppShell>
  );
};

export default ContestsPage;
