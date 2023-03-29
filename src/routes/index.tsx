import { createMemo } from "solid-js";
import { useRouteData } from "solid-start";
import { createServerAction$ } from "solid-start/server";
import { logout, useUserSession } from "~/utils/auth";

export function userData() {
  return createMemo(() => {
    return useUserSession();
  });
}

export default function HomePage() {
  const user = useRouteData<typeof userData>();
  const [, { Form }] = createServerAction$((f: FormData, { request }) =>
    logout(request)
  );

  return (
    <main>
      <div style={{ display: "flex", "align-items": "center" }}>
        <p class="font-bold underline text-orange-500">
          Hello, {user()?.()?.username}!
        </p>
        <Form>
          <button name="logout" type="submit" style={{ "margin-left": "1rem" }}>
            Logout
          </button>
        </Form>
      </div>
    </main>
  );
}
