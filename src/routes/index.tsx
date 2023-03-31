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
    <main class="bg-gray-800 text-white h-screen">
      <div class="flex items-center">
        <p class="text-xl">Hello, {user()?.()?.username}!</p>
        <Form>
          <button
            name="logout"
            type="submit"
            class="ml-4 rounded-md bg-pink-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-400"
          >
            Logout
          </button>
        </Form>
      </div>
    </main>
  );
}
