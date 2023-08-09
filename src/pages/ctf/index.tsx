import { CTFChallengeCard } from "~/components/sections/CTFChallengeCard";
import AppShell from "~/components/ui/AppShell";
import { LoadingSection } from "~/components/ui/Loading";
import { api } from "~/utils/api";

const CTFPage = () => {
  const { isLoading, data } = api.ctf.getChallenges.useQuery();

  if (isLoading) return <LoadingSection />;

  return (
    <AppShell>
      <div className="mx-auto max-w-5xl p-3">
        <h2 className="items-center pb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Capture the Flag
        </h2>
        <div className="grid-flow-cols grid grid-flow-row gap-3 md:grid-cols-4 md:gap-20">
          {data?.map((challenge) => {
            return (
              <CTFChallengeCard
                challenge={challenge}
                solved={challenge.solved ?? false}
                key={challenge.id}
              />
            );
          })}
        </div>
      </div>
    </AppShell>
  );
};

export default CTFPage;
