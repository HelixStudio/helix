import { OcArrowdown2, OcArrowup2 } from "solid-icons/oc";
import { For } from "solid-js";
import {
  A,
  RouteDataArgs,
  createRouteData,
  useParams,
  useRouteData,
} from "solid-start";
import { createServerAction$, createServerData$ } from "solid-start/server";
import { ButtonLink } from "~/components/Button";
import { useUserSession } from "~/utils/auth";
import { removeItem } from "~/utils/data_structs";
import { getDB } from "~/utils/db";

export interface PostPreviewProps {
  id: string;
  title: string;
  description: string;
  score: number;
  likedBy: string[];
  dislikedBy: string[];
  uid: string;
}

export const votePost = async (args: {
  oldPost: PostPreviewProps;
  addAmount: number;
  uid: string;
}) => {
  const db = getDB()!;
  const oldPost = args.oldPost;
  if (oldPost == null) return;
  if (args.addAmount > 0) {
    if (!oldPost.likedBy.includes(args.uid)) {
      oldPost.likedBy.push(args.uid);
    } else {
      oldPost.likedBy = removeItem(oldPost.likedBy, args.uid);
      args.addAmount *= -1;
    }
    if (oldPost.dislikedBy.includes(args.uid)) {
      oldPost.dislikedBy = removeItem(oldPost.dislikedBy, args.uid);
      args.addAmount++;
    }
  } else {
    if (!oldPost.dislikedBy.includes(args.uid)) {
      oldPost.dislikedBy.push(args.uid);
    } else {
      oldPost.dislikedBy = removeItem(oldPost.dislikedBy, args.uid);
      args.addAmount *= -1;
    }
    if (oldPost.likedBy.includes(args.uid)) {
      oldPost.likedBy = removeItem(oldPost.likedBy, args.uid);
      args.addAmount--;
    }
  }
  await db.post.update({
    where: {
      id: oldPost.id,
    },
    data: {
      score: oldPost.score + args.addAmount,
      likedBy: oldPost.likedBy,
      dislikedBy: oldPost.dislikedBy,
    },
  });
};

function PostPreview(props: PostPreviewProps) {
  const [_, votePostAction] = createServerAction$(votePost);
  const maxDescPreview = 30;

  return (
    <div>
      <div
        class="items-center bg-white border border-gray-200
         rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800
         mb-5 dark:border-gray-700 dark:hover:bg-gray-700
         transition-all  duration-150 flex justify-between
         hover:cursor-pointer"
      >
        <A class="p-5 w-full" href={`/forum/post/${props.id}`}>
          <h5
            class="mb-2 text-2xl font-bold tracking-tight 
          text-gray-900 dark:text-white"
          >
            {props.title}
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            {props.description.length > maxDescPreview
              ? props.description.substring(0, maxDescPreview) + "..."
              : props.description}
          </p>
        </A>
        <div class="flex flex-col items-center gap-1">
          <button
            onClick={async () =>
              await votePostAction({
                oldPost: props,
                addAmount: 1,
                uid: props.uid,
              })
            }
          >
            <OcArrowup2
              class={
                props.likedBy.includes(props.uid)
                  ? "bg-pink-400 rounded-xl"
                  : ""
              }
              size={20}
            />
          </button>
          <p>{props.score}</p>
          <button
            onClick={async () =>
              await votePostAction({
                oldPost: props,
                addAmount: -1,
                uid: props.uid,
              })
            }
          >
            <OcArrowdown2
              class={
                props.dislikedBy.includes(props.uid)
                  ? "bg-blue-400 rounded-xl"
                  : ""
              }
              size={20}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export function communityRouteData({ params }: RouteDataArgs) {
  return createServerData$(
    async (name: string) => {
      const db = getDB()!;
      if (db == undefined) {
        console.error("DB is undefined.");
      }
      const community = await db.community.findFirst({
        where: { name: name },
      });
      const posts = await db.post.findMany({
        where: { communityId: community?.id },
        take: 10,
        orderBy: { createdAt: "desc" },
      });
      return { community, posts };
    },
    { key: () => params.name }
  );
}

export default function CommunityPage() {
  const data = useRouteData<typeof communityRouteData>();
  const user = useUserSession();

  return (
    <div class="m-3 items-center">
      <div class="flex justify-between items-center">
        <div>
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            {data()?.community?.name}
          </h2>
          <p class="mt-4 text-gray-100 max-w-3xl pb-6">
            {data()?.community?.description}
          </p>
        </div>
        <ButtonLink
          href={`/forum/new?id=${data()?.community?.id}`}
          text="New post"
        />
      </div>

      <For each={data()?.posts}>
        {(post) => (
          <div>
            <PostPreview
              score={post.score}
              title={post.title}
              description={post.content}
              id={post.id}
              likedBy={post.likedBy}
              dislikedBy={post.dislikedBy}
              uid={user()?.id!}
            />
          </div>
        )}
      </For>
    </div>
  );
}
