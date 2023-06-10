import { type NextPage } from "next";
import { useRouter } from "next/router";
import AppShell from "~/components/ui/AppShell";
import { LoadingSection } from "~/components/ui/Loading";
import { api } from "~/utils/api";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import PostPreview from "~/components/sections/PostPreview";
import { useSession } from "next-auth/react";

dayjs.extend(relativeTime);

const GroupPage: NextPage = () => {
  const router = useRouter();
  const user = useSession();
  const group = api.group.getGroup.useQuery({
    name: router.query.name as string,
  });

  if (group.isLoading || user.status === "loading") {
    return <LoadingSection />;
  }

  const members = group.data?.joined.length ?? 0;

  return (
    <AppShell>
      <div className="mx-auto max-w-5xl p-3">
        <div className="border-b-2 pb-2">
          <h1 className="text-4xl">{group.data?.name}</h1>
          <p className="text-zinc-400">
            {members} member{members != 1 ? "s" : ""}, created{" "}
            {dayjs(group.data?.createdAt).fromNow()}
          </p>
          <p className="">{group.data?.description}</p>
        </div>
        <div className="my-3">
          {group.data?.posts?.map((post) => (
            <PostPreview
              post={post}
              uid={user.data?.user.id as string}
              key={post.id}
            />
          ))}
        </div>
      </div>
    </AppShell>
  );
};

export default GroupPage;
