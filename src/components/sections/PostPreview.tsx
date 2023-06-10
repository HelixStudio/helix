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

dayjs.extend(relativeTime);

const PostPreview = (props: {
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

  return (
    <>
      <div
        className="mb-5 flex items-center justify-between rounded-lg
         border-2 border-secondary-600 bg-secondary-700
         shadow  transition-all duration-150 hover:cursor-pointer
         hover:bg-secondary-600"
      >
        <Link className="w-full p-3" href={`/forum/post/${props.post.id}`}>
          <p className="text-sm">
            {`${props.post.group.name} • `}
            <span className="text-neutral-400">
              Posted by {props.post.author.name}
              <span>{`, ${dayjs(props.post.createdAt).fromNow()}`}</span>
            </span>
          </p>
          <h5
            className="my-2 text-3xl font-bold tracking-tight 
          text-secondary-900 text-white"
          >
            {props.post.title}
          </h5>
          <p className="font-normal text-gray-300">
            {props.post.content.length > maxPreview
              ? props.post.content.substring(0, maxPreview) + "..."
              : props.post.content}
          </p>
        </Link>
        <div className="mr-5 flex flex-col items-center gap-1">
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
