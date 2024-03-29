/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { type NextPage } from "next";
import { useRouter } from "next/router";
import AppShell from "~/components/ui/AppShell";
import { LoadingSection } from "~/components/ui/Loading";
import { api } from "~/utils/api";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import PostPreview from "~/components/sections/PostPreview";
import { useSession } from "next-auth/react";
import IconButton from "~/components/ui/IconButton";
import { PencilIcon } from "@primer/octicons-react";
import Head from "next/head";

dayjs.extend(relativeTime);

const GroupPage: NextPage = () => {
  const router = useRouter();
  const user = useSession();
  const group = api.group.getGroup.useQuery({
    name: router.query.name as string,
  });

  if (group.isLoading || user.status === "loading") {
    return <LoadingSection title={`Helix | ${router.query.name as string}`} />;
  }

  const members = group.data?.joined.length ?? 0;

  return (
    <AppShell>
      <Head>
        <title>Helix | ${router.query.name as string}`</title>
        <meta name="description" content={group.data?.description} />
      </Head>
      <div className="mx-auto max-w-5xl p-3">
        <div className="border-b-2 pb-2">
          <div className="flex flex-row justify-between">
            <h1 className="text-4xl">{group.data?.name}</h1>
            <div className="flex flex-row gap-2">
              {user.data?.user.id == group.data?.authorId && (
                <IconButton
                  label={"edit post"}
                  icon={<PencilIcon size={20} />}
                  onClick={() =>
                    router.push(
                      `/forum/group/${group.data?.name as string}/edit`
                    )
                  }
                />
              )}
            </div>
          </div>
          <p className="text-zinc-400">
            {members} member{members != 1 ? "s" : ""}, created{" "}
            {dayjs(group.data?.createdAt).fromNow()}
          </p>
          <p className="pb-2">{group.data?.description}</p>
          {group.data?.rules.length! > 0 && (
            <div>
              <p>Rules:</p>
              <ul className="ml-3 list-disc">
                {group.data?.rules.map((rule) => {
                  if (rule.trim().length < 1) return;
                  return <li key={rule}>{rule}</li>;
                })}
              </ul>
            </div>
          )}
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
