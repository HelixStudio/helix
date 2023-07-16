/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type User, type Post, type Group } from "@prisma/client";
import Link from "next/link";
import { HeartFillIcon, HeartIcon } from "@primer/octicons-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { marked } from "marked";
import { sanitize } from "isomorphic-dompurify";
import hljs from "highlight.js";
import { useEffect } from "react";
import "highlight.js/styles/stackoverflow-dark.css";
import { api } from "~/utils/api";
import { cn } from "~/utils/cn";
import { Balancer } from "react-wrap-balancer";

dayjs.extend(relativeTime);

const PostPreview = (props: {
  size?: "normal" | "sm";
  post: Post & { author: User; group: Group };
  uid: string;
}) => {
  const maxPreview = 50;

  const ctx = api.useContext();
  const like = api.post.likePost.useMutation({
    onSuccess: async () => {
      await ctx.post.getLatestPosts.invalidate();
      await ctx.post.getBestPosts.invalidate();
    },
  });

  const size = props.size ? props.size : "normal";

  return (
    <>
      <div
        className={cn(
          `flex items-center justify-between rounded-lg
         border-2 border-secondary-600 bg-secondary-700
         shadow transition-all duration-150 hover:cursor-pointer
         hover:bg-secondary-600`,
          size != "sm" ? "mb-5" : "mb-3"
        )}
      >
        <Link className="w-full p-3" href={`/forum/post/${props.post.id}`}>
          <p className="text-sm">
            <Balancer>
              <Link
                href={`/forum/group/${props.post.group.name}`}
                className="hover:underline"
              >
                {props.post.group.name}
              </Link>
              {` • `}
              <span className="text-neutral-400">
                Posted by{" "}
                <Link
                  href={`/user/${props.post.author.id}`}
                  className="hover:underline"
                >
                  {props.post.author.name}
                </Link>
                <span>{`, ${dayjs(props.post.createdAt).fromNow()}`}</span>
              </span>
            </Balancer>
          </p>

          <Balancer>
            <h5
              className={cn(
                `font-bold tracking-tight 
          text-secondary-900 text-white`,
                size != "sm" ? "my-2 text-3xl" : "my-1 text-xl"
              )}
            >
              {props.post.title}
            </h5>
          </Balancer>
          <p className="font-normal text-gray-300">
            {props.post.content.length > maxPreview
              ? props.post.content.substring(0, maxPreview) + "..."
              : props.post.content}
          </p>
        </Link>
        <div
          className={cn(
            "mr-5 flex-col items-center gap-1",
            size == "sm" ? "hidden lg:flex" : ""
          )}
        >
          <button
            onClick={() => {
              like.mutate({
                id: props.post.id,
                userId: props.uid,
                likedBy: props.post.likedBy,
              });
            }}
          >
            {props.post.likedBy.includes(props.uid) ? (
              <HeartFillIcon size={20} />
            ) : (
              <HeartIcon size={20} />
            )}
          </button>
          <p>{props.post.likedBy.length}</p>
        </div>
      </div>
    </>
  );
};

export const PostPreviewLarge = (props: { title: string; content: string }) => {
  const renderedContent = marked.parse(props.content);
  const safeContent = sanitize(renderedContent);

  useEffect(() => hljs.highlightAll(), []);

  return (
    <div className="w-full">
      <h5
        className="my-2 text-3xl font-bold tracking-tight 
          text-secondary-900 text-white"
      >
        {props.title}
      </h5>
      <article
        className="prose prose-neutral min-w-full dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: safeContent }}
      />
    </div>
  );
};

export default PostPreview;
