import { Route, Routes } from "solid-start";
import { lazy } from "solid-js";
import HomePage, { userData } from "~/routes";
import ForumPage, { forumRouteData } from "~/routes/forum/index";
import ForumLayout from "~/routes/forum";
import LoginPage from "~/routes/login";
import BaseLayout from "./BaseLayout";
import NotFound from "~/routes/[...404]";
import WriteNewPostPage from "~/routes/forum/new";
import CommunityPage, { communityRouteData } from "~/routes/forum/[name]";

// const SpecificCommunityPage = lazy(() => import("~/routes/forum/[name]"));

export default function Router() {
  return (
    <Routes>
      <Route path="/*" element={NotFound} />
      <Route path="/login" element={LoginPage} />
      <Route path="/" element={BaseLayout}>
        <Route path="/" element={HomePage} data={userData} />
        <Route path="/forum" element={ForumLayout}>
          <Route path="" element={ForumPage} data={forumRouteData} />
          <Route path="/new" element={WriteNewPostPage} data={forumRouteData} />
          <Route
            path="/:name"
            element={CommunityPage}
            // element={SpecificCommunityPage}
            data={communityRouteData}
          />
        </Route>
      </Route>
    </Routes>
  );
}
