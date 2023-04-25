import { For } from "solid-js";
import { useRouteData } from "solid-start";
import Link from "~/components/Link";
import { getDB } from "~/utils/db";
import { createServerData$ } from "solid-start/server";
import { ButtonLink } from "~/components/Button";

export function forumRouteData() {
  return createServerData$(async () => {
    const db = getDB()!;
    return await db.community.findMany({});
  });
}

export default function ForumPage() {
  const communities = useRouteData<typeof forumRouteData>();
  return (
    <div class="m-3 items-center">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Forum</h2>
      <p class="mt-4 text-secondary-100 pb-6">
        Helix is a simple forum where anyone can post comments and share images.
        There are communities dedicated to a variety of topics, from coding,
        math and video games to photography. Users do not need to register an
        account before participating in the community. Feel free to click on a
        board below that interests you and jump right in!
      </p>
      <div class="flex flex-row justify-between items-center">
        <p class="text-2xl">Available communities:</p>
        <ButtonLink
          href={`/forum/create-community`}
          text="Create a community"
        />
      </div>
      <For each={communities()}>
        {(community) => (
          <li class="pt-3 text-xl">
            <Link href={`/forum/${community.name}`} text={community.name} />
          </li>
        )}
      </For>
    </div>
  );
}
