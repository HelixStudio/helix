import { Outlet } from "solid-start";
import { useUserSession } from "~/utils/auth";
import NavBar from "./NavBar";

export default function BaseLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
