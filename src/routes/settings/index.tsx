import { createMemo, createSignal } from "solid-js";
import { useRouteData } from "solid-start";
import { createServerAction$ } from "solid-start/server";
import { ButtonForm } from "~/components/Button";
import Selector from "~/components/Selector";
import { useUserSession } from "~/utils/auth";
import { getDB, isClient } from "~/utils/db";
import { getUserId } from "~/utils/session";

export function userData() {
  return createMemo(() => {
    return useUserSession();
  });
}

export const bgs = ["gray", "zinc", "green", "pink", "orange", "yellow", "red"];
export const fgs = ["green", "pink", "orange", "yellow", "red"];

export const loadTheme = (theme: string) => {
  if (!isClient() || theme == undefined) return;
  localStorage.setItem("theme", theme);
  const colors = theme.split(" ");
  const bg = colors[0];
  const fg = colors[1];
  const html = document.querySelector("html")!;
  for (const bg of bgs) html.classList.remove(`${bg}-bg`);
  for (const fg of fgs) html.classList.remove(`${fg}-fg`);
  html.classList.add(`${bg}-bg`);
  html.classList.add(`${fg}-fg`);
};

export default function SettingsPage() {
  const user = useRouteData<typeof userData>();
  const [, { Form }] = createServerAction$(
    async (form: FormData, { request }) => {
      const background = form.get("background") as string;
      const foreground = form.get("foreground") as string;
      const theme = `${background} ${foreground}`;

      const uid = await getUserId(request);
      const db = await getDB();
      if (db == undefined || uid == null) return;

      await db.user.update({
        where: { id: uid },
        data: { theme: theme },
      });
    }
  );

  const bg = user()?.()?.theme!.split(" ")[0];
  const fg = user()?.()?.theme!.split(" ")[1];

  const [background, setBackground] = createSignal(bg);
  const [foreground, setForeground] = createSignal(fg);

  loadTheme(user()?.()?.theme!);

  return (
    <main class="bg-secondary-800 text-white min-h-screen">
      <div class="ml-auto mr-auto max-w-5xl">
        <div class="m-3 items-center">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Settings
          </h2>
          <Form
            class="flex flex-col gap-3"
            onSubmit={() => {
              console.log("client theme: " + `${background()} ${foreground()}`);
              loadTheme(`${background()} ${foreground()}`);
            }}
          >
            <input value={background()} class="hidden" name="background" />
            <input value={foreground()} class="hidden" name="foreground" />
            <Selector
              label="background"
              value={bg!}
              options={bgs}
              callback={(option) => {
                setBackground(option);
              }}
            />
            <Selector
              label="foreground"
              value={fg!}
              options={fgs}
              callback={(option) => {
                setForeground(option);
              }}
            />
            <ButtonForm text="update" />
          </Form>
        </div>
      </div>
    </main>
  );
}
