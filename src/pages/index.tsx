import { type NextPage } from "next";
import { signOut, useSession } from "next-auth/react";

import LandingPage from "~/components/sections/LandingPage";
import AppShell from "~/components/ui/AppShell";
import { LoadingPage } from "~/components/ui/Loading";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <LoadingPage />;
  }

  if (status === "unauthenticated" || session == null) {
    return <LandingPage />;
  }

  return (
    <AppShell>
      <div className="pb-5">
        <p className="text-3xl">Work in progress!</p>
        <p>
          This page and other ones are still in active development. Loading
          errors and other bugs may be present. Website is scheduled to launch
          on 24 July.
        </p>
      </div>
      <p>Signed in as {session?.user?.name}</p>
      <button onClick={() => void signOut()}>Sign out</button>
    </AppShell>
  );
};

export default Home;
