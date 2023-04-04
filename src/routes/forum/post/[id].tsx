import { OcArrowup2, OcArrowdown2 } from "solid-icons/oc";
import { RouteDataArgs, useRouteData } from "solid-start";
import { createServerAction$, createServerData$ } from "solid-start/server";
import { useUserSessionIntern } from "~/utils/auth";
import { getDB } from "~/utils/db";
import { PostPreviewProps, votePost } from "../[name]";
import { Show } from "solid-js";
import LoadingScreen from "~/components/LoadingScreen";
import { useUserStore } from "~/utils/stores/userStore";

export function postRouteData({ params }: RouteDataArgs) {
  return createServerData$(
    async (id: string, { request }) => {
      const db = getDB()!;
      if (db == undefined) {
        console.error("DB is undefined.");
      }
      const post = await db.post.findFirst({
        where: { id: id },
      });
      return { post, user: await useUserSessionIntern(request) };
    },
    { key: () => params.id }
  );
}

export default function ViewPost() {
  const data = useRouteData<typeof postRouteData>();
  //   const user = useUserStore((state) => state.user);
  const [_, votePostAction] = createServerAction$(votePost);

  return (
    <Show when={!data.loading || data() != null} fallback={<LoadingScreen />}>
      <div>
        <div>
          <h5
            class="mb-2 text-2xl font-bold tracking-tight 
          text-gray-900 dark:text-white"
          >
            {data()?.post?.title}
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            {data()?.post?.content}
          </p>
        </div>
        <div class="flex flex-col items-center gap-1">
          <button
            onClick={async () =>
              await votePostAction({
                oldPost: data()?.post! as unknown as PostPreviewProps,
                addAmount: 1,
                uid: data()?.user?.id!,
              })
            }
          >
            <OcArrowup2
              class={
                data()?.post?.likedBy.includes(data()?.user?.id!)
                  ? "bg-pink-400 rounded-xl"
                  : ""
              }
              size={20}
            />
          </button>
          <p>{data()?.post?.score}</p>
          <button
            onClick={async () =>
              await votePostAction({
                oldPost: data()?.post! as unknown as PostPreviewProps,
                addAmount: -1,
                uid: data()?.user?.id!,
              })
            }
          >
            <OcArrowdown2
              class={
                data()?.post?.dislikedBy.includes(data()?.user?.id!)
                  ? "bg-blue-400 rounded-xl"
                  : ""
              }
              size={20}
            />
          </button>
        </div>
      </div>
    </Show>
  );
}
