import { Outlet } from "solid-start";
import NavBar from "./NavBar";
import "tailwindcss/tailwind.css";

export default function BaseLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
