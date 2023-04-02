import { Route, Routes } from "solid-start";
import HomePage, { userData } from "~/routes";
import ForumPage from "~/routes/forum/index";
import ForumLayout, { forumData } from "~/routes/forum";
import CommunityPage from "~/routes/forum/[name]";
import LoginPage from "~/routes/login";
import BaseLayout from "./BaseLayout";
import NotFound from "~/routes/[...404]";
import WriteNewPostPage from "~/routes/forum/new";

export default function Router() {
  return (
    <Routes>
      <Route path="/*" element={NotFound} />
      <Route path="/login" element={LoginPage} />
      <Route path="/" element={BaseLayout}>
        <Route path="/" element={HomePage} data={userData} />
        <Route path="/forum" element={ForumLayout} data={forumData}>
          <Route path="" element={ForumPage} />
          <Route path="/new" element={WriteNewPostPage} />
          <Route path="/:name" element={CommunityPage} />
        </Route>
      </Route>
    </Routes>
  );
}
