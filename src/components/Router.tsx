import { Route, Routes } from "solid-start";
import { lazy } from "solid-js";
import HomePage, { userData } from "~/routes";
import ForumPage, { forumRouteData } from "~/routes/forum/index";
import ForumLayout from "~/routes/forum";
import LoginPage from "~/routes/login";
import RegisterPage from "~/routes/register";
import BaseLayout from "./BaseLayout";
import NotFound from "~/routes/[...404]";
import WriteNewPostPage from "~/routes/forum/new";
import CommunityPage, { communityRouteData } from "~/routes/forum/[name]";
import ViewPost, { postRouteData } from "~/routes/forum/post/[id]";
import CreateCommunityPage from "~/routes/forum/create-community";
import SettingsPage from "~/routes/settings";
import OnlineJudgePage, { problemsRouteData } from "~/routes/online-judge";
import ProblemPage, { problemRouteData } from "~/routes/online-judge/[id]";
import CodeRunnerPage from "~/routes/code-runner";

export default function Router() {
  return (
    <Routes>
      <Route path="/*" element={NotFound} />
      <Route path="/login" element={LoginPage} />
      <Route path="/register" element={RegisterPage} />
      <Route path="/" element={BaseLayout}>
        <Route path="/" element={HomePage} data={userData} />
        <Route path="/forum" element={ForumLayout}>
          <Route path="" element={ForumPage} data={forumRouteData} />
          <Route path="/new" element={WriteNewPostPage} />
          <Route path="/create-community" element={CreateCommunityPage} />
          <Route
            path="/:name"
            element={CommunityPage}
            data={communityRouteData}
          />
          <Route path="/post/:id" element={ViewPost} data={postRouteData} />
        </Route>
        <Route path="/online-judge">
          <Route path="" element={OnlineJudgePage} data={problemsRouteData} />
          <Route path="/:id" element={ProblemPage} data={problemRouteData} />
        </Route>
        <Route path="/code-runner" element={CodeRunnerPage} data={userData} />
        <Route path="/settings" element={SettingsPage} data={userData} />
      </Route>
    </Routes>
  );
}
