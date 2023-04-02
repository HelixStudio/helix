import { createResource, For } from "solid-js";
import { useParams } from "solid-start";
import { ButtonLink } from "~/components/Button";
import { db } from "~/utils/db";

interface PostPreviewProps {
  title: string;
  description: string;
}

function PostPreview(props: PostPreviewProps) {
  return (
    <div>
      <a
        href="#"
        class="block p-5 bg-white border border-gray-200
         rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800
         mb-5 dark:border-gray-700 dark:hover:bg-gray-700
         transition-all duration-150"
      >
        <h5
          class="mb-2 text-2xl font-bold tracking-tight 
          text-gray-900 dark:text-white"
        >
          {props.title}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
      </a>
    </div>
  );
}

export default function CommunityPage() {
  const params = useParams<{ name: string }>();
  const [data] = createResource(
    () => params.name,
    async () => {
      const community = await db.community.findFirst({
        where: { name: params.name },
      });
      const posts = await db.post.findMany({
        where: { communityId: community?.id },
        take: 10,
        // orderBy: {} TODO: order by created_at
      });
      return { community, posts };
    }
  );

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
            <PostPreview title={post.title} description={post.content} />
          </div>
        )}
      </For>
    </div>
  );
}
