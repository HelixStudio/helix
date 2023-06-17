/* eslint-disable @next/next/no-img-element */
import { type Post, type Group, type User } from "@prisma/client";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import PostPreview from "~/components/sections/PostPreview";
import AppShell from "~/components/ui/AppShell";
import { LoadingSection } from "~/components/ui/Loading";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import { api } from "~/utils/api";
import { useSession } from "next-auth/react";

dayjs.extend(relativeTime);

const UserPage: NextPage = () => {
  const router = useRouter();
  const session = useSession();
  const user = api.user.getMetadata.useQuery({
    id: router.query.id as string,
    posts: true,
  });

  if (user.isLoading || session.status == "loading") {
    return <LoadingSection />;
  }

  return (
    <AppShell>
      <div className="mx-auto max-w-5xl px-3">
        <div className="flex flex-row gap-3 border-b-2 border-secondary-600 p-3">
          <img
            src={user.data?.image as string}
            alt="profile picture"
            className="aspect-square h-24 w-24"
          />
          <div className="flex flex-col justify-start gap-3">
            <div>
              <h1 className="font-sans text-2xl">{user.data?.name}</h1>
              <p className="text-sm text-neutral-400">
                Joined {dayjs(user.data?.created_at as Date).fromNow()}
              </p>
            </div>
            <p className="text-lg">{user.data?.bio}</p>
          </div>
        </div>
        <div className="mt-3">
          {user.data?.created_posts.map((post) => (
            <PostPreview
              key={post.id}
              post={post as Post & { group: Group; author: User }}
              uid={session.data?.user.id as string} // TODO: allow view pages without being logged in
            />
          ))}
        </div>
      </div>
    </AppShell>
  );
};

export default UserPage;
