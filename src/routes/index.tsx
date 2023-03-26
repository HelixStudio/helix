import { useRouteData } from "solid-start";
import { createServerAction$ } from "solid-start/server";
import NavBar from "~/components/NavBar";
import { logout, useUserSession } from "~/utils/auth";

export function routeData() {
  return useUserSession();
}

export default function HomePage() {
  const user = useRouteData<typeof routeData>();
  const [, { Form }] = createServerAction$((f: FormData, { request }) =>
    logout(request)
  );

  return (
    <main>
      <NavBar />
      <div style={{ display: "flex", "align-items": "center" }}>
        <p>Hello, {user()?.username}!</p>
        <Form>
          <button name="logout" type="submit" style={{ "margin-left": "1rem" }}>
            Logout
          </button>
        </Form>
      </div>
      home page
    </main>
  );
}
