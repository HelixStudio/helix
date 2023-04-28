import { A } from "solid-start";
import { ButtonLink } from "~/components/Button";
import { isClient } from "~/utils/db";
import { loadTheme } from "./settings";

export default function NotFound() {
  if (isClient() && localStorage.getItem("theme") != null) {
    loadTheme(localStorage.getItem("theme")!);
  }
  return (
    <main class="grid min-h-full place-items-center h-screen bg-secondary-800 text-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        <p class="text-base font-semibold text-primary-400">404</p>
        <h1
          class="mt-4 text-3xl font-bold tracking-tight text-secondary-100 
          sm:text-5xl"
        >
          Page not found
        </h1>
        <p class="mt-6 text-base leading-7 text-secondary-200">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <ButtonLink href="/" text="Go back home" />
          <A href="/forum" class="text-sm font-semibold text-secondary-100">
            Visit forum <span aria-hidden="true">&rarr;</span>
          </A>
        </div>
      </div>
    </main>
  );
}
