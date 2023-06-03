import { type NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import AppShell from "~/components/ui/AppShell";
import { LoadingSection } from "~/components/ui/Loading";
import { api } from "~/utils/api";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { ArrowDownIcon, ArrowUpIcon } from "@primer/octicons-react";

dayjs.extend(relativeTime);

const PostPage: NextPage = () => {
  const router = useRouter();
  const post = api.post.getPostById.useQuery({ id: router.query.id as string });

  if (post.isLoading || post.data == undefined || post.data == null) {
    return <LoadingSection />;
  }

  return (
    <AppShell>
      <div className="mx-auto max-w-5xl p-3">
        <div className="flex flex-row items-center justify-between border-b-2 border-neutral-600 pb-3">
          <div>
            <p className="text-sm">
              {`${post.data.group.name} • `}
              <span className="text-neutral-400">
                Posted by {post.data.author.name}
                <span>{`, ${dayjs(post.data.createdAt).fromNow()}`}</span>
              </span>
            </p>
            <h5
              className="my-2 text-3xl font-bold tracking-tight 
          text-secondary-900 text-white"
            >
              {post.data.title}
            </h5>
            <p className="font-normal text-gray-300">{post.data.content}</p>
          </div>
          <div className="mr-5 flex flex-col items-center gap-1">
            <button
              onClick={() => {
                console.log("click");
              }}
            >
              <ArrowUpIcon
                className={
                  post.data.likedBy.includes(post.data.authorId)
                    ? "rounded-xl bg-primary-400"
                    : ""
                }
                size={20}
              />
            </button>
            <p>{0}</p>
            <button
              onClick={() => {
                console.log("click");
              }}
            >
              <ArrowDownIcon
                className={
                  post.data.likedBy.includes(post.data.authorId)
                    ? "rounded-xl bg-blue-400"
                    : ""
                }
                size={20}
              />
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
};

export default PostPage;
