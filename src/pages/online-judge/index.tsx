import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ComingSoonSection } from "~/components/sections/ComingSoon";
import { LoadingSection } from "~/components/ui/Loading";
import { toastPlain } from "~/utils/toast";

const OnlineJudgePage: NextPage = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") return <LoadingSection />;

  if (session.status === "unauthenticated") {
    void router.push("/");
    toastPlain("This page is not finished!");
  }

  return <ComingSoonSection title="Online Judge" />;
};

export default OnlineJudgePage;
