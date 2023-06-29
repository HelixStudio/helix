import { Problem } from "@prisma/client";
import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import { Scracthpad } from "~/components/sections/Scratchpad";
import { StatementView } from "~/components/sections/StatementView";
import AppShell from "~/components/ui/AppShell";
import { Button } from "~/components/ui/Button";
import { LoadingSection } from "~/components/ui/Loading";
import UIPanel from "~/components/ui/UIPanel";
import { api } from "~/utils/api";
import { toastPlain } from "~/utils/toast";

const OnlineJudgePage: NextPage = () => {
  const session = useSession();
  const router = useRouter();

  const problem = api.problem.getProblemById.useQuery({
    id: parseInt(router.query.id as string),
  });

  if (session.status === "loading" || problem.isLoading)
    return <LoadingSection />;

  if (session.status === "unauthenticated") {
    void router.push("/");
    toastPlain("This page is not finished!");
  }

  return (
    <AppShell>
      <Head>
        <title>Helix | Online Judge</title>
      </Head>
      <main className="h-screen bg-secondary-700 text-white">
        <PanelGroup direction="horizontal" className="min-h-screen">
          <Panel defaultSize={50} minSize={20} maxSize={80}>
            <UIPanel
              pages={[
                {
                  name: "Statement",
                  component: (
                    <StatementView problem={problem.data as Problem} />
                  ),
                },
                {
                  name: "Scratchpad",
                  component: <Scracthpad />,
                },
              ]}
              controls={
                <div className="flex flex-row gap-3">
                  <Button variant={"outline"}>Download PDF</Button>
                  <Button variant={"outline"}>Ask AI</Button>
                </div>
              }
            />
          </Panel>
          <PanelResizeHandle className="w-1 bg-secondary-800 focus:bg-secondary-600" />
          <Panel defaultSize={50} minSize={20} maxSize={80}>
            <PanelGroup direction="vertical" className="min-h-screen">
              <Panel defaultSize={80} minSize={20} maxSize={90}>
                code editor
                {/* <UIPanel /> */}
              </Panel>
              <PanelResizeHandle className="h-1 bg-secondary-800 focus:bg-secondary-600" />
              <Panel defaultSize={20} minSize={10} maxSize={80}>
                submissions
                {/* <UIPanel /> */}
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </main>
    </AppShell>
  );
};

export default OnlineJudgePage;
