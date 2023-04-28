import { Outlet } from "solid-start";
import NavBar from "./NavBar";
import { loadTheme } from "~/routes/settings";
import { isClient } from "~/utils/db";

export default function BaseLayout() {
  if (isClient() && localStorage.getItem("theme") != null) {
    loadTheme(localStorage.getItem("theme")!);
  }

  return (
    <div class="flex flex-row">
      <NavBar />
      <div class="flex flex-col m-0 h-full w-full overflow-hidden ml-16">
        <Outlet />
      </div>
    </div>
  );
}
