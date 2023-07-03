/* eslint-disable @next/next/no-img-element */
import { type User, type Comment } from "@prisma/client";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";

dayjs.extend(relativeTime);

export const CommentPreview = (props: {
  comment: Comment & { author: User };
}) => {
  const comment = props.comment;

  return (
    <div className="my-3 flex flex-row gap-2">
      <img
        src={comment.author.image as string}
        className="m-1 h-12 w-12 rounded-md"
        alt="profile picture"
      />
      <div className="flex flex-col gap-1">
        <p className="font-thin text-zinc-300">
          <Link className="hover:underline" href={`/user/${comment.author.id}`}>
            {comment.author.name}
          </Link>
          {" • "}
          {dayjs(comment.createdAt).fromNow()}
        </p>
        <h1 className="text-xl">{comment.message}</h1>
      </div>
    </div>
  );
};
