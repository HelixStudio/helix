import { useRouteData } from "solid-start";
import { createServerAction$ } from "solid-start/server";
import { logout, useUserSession } from "~/utils/auth";

export function routeData() {
  return useUserSession();
}

export default function Home() {
  const user = useRouteData<typeof routeData>();
  const [, { Form }] = createServerAction$((f: FormData, { request }) =>
    logout(request)
  );

  return (
    <main>
      <h1>Hello {user()?.username}!</h1>
      <Form>
        <button name="logout" type="submit">
          Logout
        </button>
      </Form>
    </main>
  );
}
