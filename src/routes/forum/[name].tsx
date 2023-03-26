import { createResource, For } from "solid-js";
import { useParams } from "solid-start";
import { db } from "~/utils/db";

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
      });
      return { community, posts };
    }
  );

  return (
    <div>
      <h1>{data()?.community?.name}</h1>
      <p>{data()?.community?.description}</p>
      <div style={{ display: "flex", "align-items": "center" }}>
        <h2>Posts:</h2>
        <button style={{ "margin-left": "1rem" }}>write post</button>
      </div>
      <For each={data()?.posts}>
        {(post) => (
          <div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        )}
      </For>
    </div>
  );
}
