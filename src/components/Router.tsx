import { Route, Routes } from "solid-start";
import HomePage, { userData } from "~/routes";
import ForumPage from "~/routes/forum/index";
import ForumLayout, { forumData } from "~/routes/forum";
import CommunityPage from "~/routes/forum/[name]";
import LoginPage from "~/routes/login";
import BaseLayout from "./BaseLayout";

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={LoginPage} />
      <Route path="/" element={BaseLayout}>
        <Route path="/" element={HomePage} data={userData} />
        <Route path="/forum" element={ForumLayout} data={forumData}>
          <Route path="" element={ForumPage} />
          <Route path="/:name" element={CommunityPage} />
        </Route>
      </Route>
    </Routes>
  );
}
