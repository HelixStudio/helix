import { type NextPage } from "next";
import AppShell from "~/components/ui/AppShell";
import UserSettings from "~/components/sections/UserSettings";
import ForumSettings from "~/components/sections/ForumSettings";
import Head from "next/head";

const SettingsPage: NextPage = () => {
  return (
    <AppShell>
      <Head>
        <title>Helix | Settings</title>
      </Head>
      <div className="mx-auto max-w-5xl px-3">
        <UserSettings />
        <ForumSettings />
      </div>
    </AppShell>
  );
};

export default SettingsPage;
