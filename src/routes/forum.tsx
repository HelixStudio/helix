import { createMemo } from "solid-js";
import { createRouteData, Outlet } from "solid-start";
import { useUserSession } from "~/utils/auth";
import { db } from "~/utils/db";

export function forumData() {
  return createMemo(() =>
    createRouteData(async () => {
      return {
        user: useUserSession(),
        communities: await db.community.findMany({}),
      };
    })
  );
}

export default function ForumLayout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}
