import { createMemo } from "solid-js";
import { useRouteData } from "solid-start";
import { createServerAction$ } from "solid-start/server";
import { logout, useUserSession } from "~/utils/auth";
import { loadTheme } from "./settings";

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
  loadTheme(user()?.()?.theme!);

  return (
    <main class="bg-secondary-800 text-white h-screen">
      <div class="flex items-center">
        <p class="text-xl">Hello, {user()?.()?.username}!</p>
        <Form>
          <button
            name="logout"
            type="submit"
            class="ml-4 rounded-md bg-primary-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
          >
            Logout
          </button>
        </Form>
      </div>
    </main>
  );
}
