import { createMemo } from "solid-js";
import { createRouteData, Outlet } from "solid-start";
import { useUserSession } from "~/utils/auth";
import { getDB } from "~/utils/db";

export default function ForumLayout() {
  return (
    <main class="bg-gray-800 text-white min-h-screen">
      <div class="ml-auto mr-auto max-w-5xl">
        <Outlet />
      </div>
    </main>
  );
}
