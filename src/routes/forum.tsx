import { createMemo } from "solid-js";
import { createRouteData, Outlet } from "solid-start";
import { useUserSession } from "~/utils/auth";
import { getDB, isClient } from "~/utils/db";
import { loadTheme } from "./settings";

export default function ForumLayout() {
  if (isClient() && localStorage.getItem("theme") != null) {
    loadTheme(localStorage.getItem("theme")!);
  }
  return (
    <main class="bg-secondary-800 text-white min-h-screen">
      <div class="ml-auto mr-auto max-w-5xl">
        <Outlet />
      </div>
    </main>
  );
}
