import { For } from "solid-js";
import { A, useRouteData } from "solid-start";
import { routeData } from "../forum";

export default function ForumPage() {
  const data = useRouteData<typeof routeData>();

  return (
    <div>
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
