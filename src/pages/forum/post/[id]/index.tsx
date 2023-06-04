/* eslint-disable @typescript-eslint/no-unsafe-call */
import { type NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import AppShell from "~/components/ui/AppShell";
import { LoadingSection } from "~/components/ui/Loading";
import { api } from "~/utils/api";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BookmarkIcon,
  PencilIcon,
} from "@primer/octicons-react";
import { marked } from "marked";
import { sanitize } from "isomorphic-dompurify";
import { useSession } from "next-auth/react";
import IconButton from "~/components/ui/IconButton";

dayjs.extend(relativeTime);

const PostPage: NextPage = () => {
  const router = useRouter();
  const user = useSession();
  const post = api.post.getPostById.useQuery({ id: router.query.id as string });

  if (
    post.isLoading ||
    post.data == undefined ||
    post.data == null ||
    user.status == "loading"
  ) {
    return <LoadingSection />;
  }

  const renderedContent = marked.parse(post.data.content);
  const safeContent = sanitize(renderedContent);

  return (
    <AppShell>
      <div className="mx-auto max-w-5xl p-3">
        <div className="flex w-full flex-row items-center justify-between pb-2">
          <p className="text-sm">
            {`${post.data.group.name} • `}
            <span className="text-neutral-400">
              Posted by {post.data.author.name}
              <span>{`, ${dayjs(post.data.createdAt).fromNow()}`}</span>
            </span>
          </p>
          <div className="flex flex-row gap-2">
            <IconButton
              icon={<PencilIcon size={20} />}
              onClick={() =>
                router.push(`/forum/post/${router.query.id as string}/edit`)
              }
            />
            <IconButton
              icon={<BookmarkIcon size={20} />}
              onClick={() => {
                alert("bookmark");
              }}
            />
          </div>
        </div>
        <div className="flex w-full flex-row items-end justify-between border-b-2 border-neutral-600 pb-3">
          <div className="w-full">
            <h5
              className="my-2 text-3xl font-bold tracking-tight 
          text-secondary-900 text-white"
            >
              {post.data.title}
            </h5>
            <article
              className="prose prose-neutral dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: safeContent }}
            />
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
