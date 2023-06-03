/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type User, type Post, type Group } from "@prisma/client";
import Link from "next/link";
import { ArrowDownIcon, ArrowUpIcon } from "@primer/octicons-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const PostPreview = (props: {
  post: Post & { author: User; group: Group };
}) => {
  const maxPreview = 250;

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
              console.log("click");
            }}
          >
            <ArrowUpIcon
              className={
                props.post.likedBy.includes(props.post.authorId)
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
                props.post.likedBy.includes(props.post.authorId)
                  ? "rounded-xl bg-blue-400"
                  : ""
              }
              size={20}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default PostPreview;
