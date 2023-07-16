import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import HomePage from "~/components/sections/HomePage";

import LandingPage from "~/components/sections/LandingPage";
// import { LoadingPage } from "~/components/ui/Loading";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    // return <LoadingPage />;
    return <LandingPage />;
  }

  if (status === "unauthenticated" || session == null) {
    return <LandingPage />;
  }

  return <HomePage session={session} />;
};

export default Home;
