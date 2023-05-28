import { type NextPage } from "next";
import { signOut, useSession } from "next-auth/react";

import LandingPage from "~/components/sections/LandingPage";
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
    <>
      <p>Signed in as {session?.user?.name}</p>
      <button onClick={() => void signOut()}>Sign out</button>
    </>
  );
};

export default Home;
