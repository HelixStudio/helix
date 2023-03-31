import { For } from "solid-js";
import { A, useRouteData } from "solid-start";
import { forumData } from "../forum";
import Link from "~/components/Link";

export default function ForumPage() {
  const data = useRouteData<typeof forumData>();

  return (
    <div class="m-3 items-center">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Forum</h2>
      <p class="mt-4 text-gray-100 max-w-3xl pb-6">
        Helix is a simple forum where anyone can post comments and share images.
        There are communities dedicated to a variety of topics, from coding,
        math and video games to photography. Users do not need to register an
        account before participating in the community. Feel free to click on a
        board below that interests you and jump right in!
      </p>

      <p class="text-2xl">Available communities:</p>
      <For each={data()?.()?.communities}>
        {(community) => (
          <li class="pt-3 text-xl">
            <Link href={`/forum/${community.name}`} text={community.name} />
          </li>
        )}
      </For>
    </div>
  );
}
