import { createRouteData, Outlet, useRouteData } from "solid-start";
import { createServerAction$, redirect } from "solid-start/server";
import NavBar from "~/components/NavBar";
import { logout, useUserSession } from "~/utils/auth";
import { db } from "~/utils/db";

export function routeData() {
  return createRouteData(async () => {
    return {
      user: useUserSession(),
      communities: await db.community.findMany({}),
    };
  });
}

export default function ForumLayout() {
  const data = useRouteData<typeof routeData>();
  const [, { Form }] = createServerAction$((f: FormData, { request }) =>
    logout(request)
  );

  return (
    <main>
      <NavBar />
      <div style={{ display: "flex", "align-items": "center" }}>
        <p>logged in as {data()?.user()?.username}</p>
        <Form>
          <button name="logout" type="submit" style={{ "margin-left": "1rem" }}>
            Logout
          </button>
        </Form>
        <hr />
      </div>
      <Outlet />
    </main>
  );
}
