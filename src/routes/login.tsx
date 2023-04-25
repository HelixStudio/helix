import { FormError, useParams, useRouteData, A } from "solid-start";
import {
  createServerAction$,
  createServerData$,
  redirect,
} from "solid-start/server";
import { createUserSession, getUser } from "~/utils/session";
import { z } from "zod";
import { AuthError, login, register } from "~/utils/auth";
import { Show } from "solid-js";
import { User } from "@prisma/client";
import { getDB } from "~/utils/db";

export function routeData() {
  return createServerData$(async (_, { request }) => {
    if (await getUser(getDB()!, request)) {
      throw redirect("/");
    }
    return {};
  });
}

export default function LoginPage() {
  const data = useRouteData<typeof routeData>();
  const params = useParams();

  const [loggingIn, { Form }] = createServerAction$(async (form: FormData) => {
    const UserFormCredentials = z.object({
      username: z.string().min(3),
      password: z.string().min(6),
    });

    const username = form.get("username") as string;
    const password = form.get("password") as string;

    if (!UserFormCredentials.safeParse({ username, password }))
      throw new FormError("Fields invalid");

    const user = await login({ username, email: "", password });
    if ((user as AuthError).message) {
      throw new FormError((user as AuthError).message);
    }
    return createUserSession(`${(user as User).id}`, "/");
  });

  return (
    <main class="bg-secondary-800 text-white min-h-screen">
      <div class="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
          <div>
            <h2 class="mt-6 text-center text-3xl font-bold tracking-tight">
              Sign in to your account
            </h2>
            <p class="mt-2 text-center text-sm">
              or{" "}
              <A
                href="/register"
                class="font-medium transition-all text-primary-300 hover:text-primary-200"
              >
                create a new account
              </A>
            </p>
          </div>
          <Form class="mt-8 space-y-6">
            <input type="hidden" name="remember" value="true" />
            <div class="-space-y-px rounded-md shadow-sm">
              <div>
                <label for="username" class="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  class="relative block w-full rounded-t-md border-0 py-1.5 ring-2 ring-inset ring-secondary-700 placeholder:text-secondary-100 bg-secondary-700 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-primary-400 sm:text-sm sm:leading-6"
                  placeholder="Username"
                />
              </div>
              <div>
                <label for="password" class="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="relative block w-full rounded-b-md border-0 py-1.5 ring-2 ring-inset ring-secondary-700 placeholder:text-secondary-100 bg-secondary-700 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-primary-400 sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="group relative flex w-full justify-center rounded-md transition-all bg-primary-500 px-3 py-2 text-sm font-semibold text-white hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    class="h-5 w-5 text-primary-400 group-hover:text-primary-300 transition-all"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </Form>
        </div>
      </div>
    </main>
  );
}
