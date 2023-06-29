import { Problem } from "@prisma/client";
import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { SetStateAction, useState } from "react";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import { Scracthpad } from "~/components/sections/Scratchpad";
import { StatementView } from "~/components/sections/StatementView";
import AppShell from "~/components/ui/AppShell";
import { Button } from "~/components/ui/Button";
import { LoadingSection } from "~/components/ui/Loading";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/Select";
import UIPanel from "~/components/ui/UIPanel";
import { api } from "~/utils/api";
import { supportedLanguages } from "~/utils/code";
import { toastPlain } from "~/utils/toast";

const OnlineJudgePage: NextPage = () => {
  const session = useSession();
  const router = useRouter();

  const problem = api.problem.getProblemById.useQuery({
    id: parseInt(router.query.id as string),
  });

  const [lang, setLang] = useState("cpp");

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
                <UIPanel
                  pages={[]}
                  leading={
                    <div className="flex flex-row gap-3">
                      <Select
                        defaultValue={lang}
                        onValueChange={(newValue: SetStateAction<string>) => {
                          setLang(newValue.toString());
                        }}
                      >
                        <SelectTrigger className="min-w-[6rem] max-w-[180px]">
                          <SelectValue placeholder="Language" />
                        </SelectTrigger>
                        <SelectContent>
                          {supportedLanguages.map((supLang) => (
                            <SelectItem value={supLang.name} key={supLang.name}>
                              {supLang.fancyName}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  }
                  controls={
                    <div className="flex flex-row gap-3">
                      <Button variant={"outline"}>Submit</Button>
                      <Button variant={"outline"}>Settings</Button>
                    </div>
                  }
                />
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
