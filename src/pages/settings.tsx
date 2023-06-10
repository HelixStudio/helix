import { type NextPage } from "next";
import AppShell from "~/components/ui/AppShell";
import UserSettings from "~/components/sections/UserSettings";
import ForumSettings from "~/components/sections/ForumSettings";

const SettingsPage: NextPage = () => {
  return (
    <AppShell>
      <div className="mx-auto max-w-5xl px-3">
        <ForumSettings />
        <UserSettings />
      </div>
    </AppShell>
  );
};

export default SettingsPage;
