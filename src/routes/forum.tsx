import { createRouteData, Outlet, useRouteData } from "solid-start";
import { createServerAction$, redirect } from "solid-start/server";
import NavBar from "~/components/NavBar";
import { logout, useUserSession } from "~/utils/auth";
import { db } from "~/utils/db";

export function forumData() {
  return createRouteData(async () => {
    return {
      user: useUserSession(),
      communities: await db.community.findMany({}),
    };
  });
}

export default function ForumLayout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}
