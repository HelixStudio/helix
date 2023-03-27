import { For } from "solid-js";
import { A, useRouteData } from "solid-start";
import { forumData } from "../forum";

export default function ForumPage() {
  const data = useRouteData<typeof forumData>();

  return (
    <div>
      <p>Communities:</p>
      <For each={data()?.communities}>
        {(community) => (
          <li>
            <A href={`/forum/${community.name}`}>{community.name}</A>
          </li>
        )}
      </For>
    </div>
  );
}
