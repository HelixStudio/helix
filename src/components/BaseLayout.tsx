import { Outlet } from "solid-start";
import NavBar from "./NavBar";
import "tailwindcss/tailwind.css";

export default function BaseLayout() {
  return (
    <div class="flex flex-row">
      <NavBar />
      <div class="flex flex-col m-0 h-full w-full overflow-hidden ml-16">
        <Outlet />
      </div>
    </div>
  );
}
