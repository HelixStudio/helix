/* eslint-disable @typescript-eslint/no-unsafe-call */
import { type NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AppShell from "~/components/ui/AppShell";
import { LoadingSection } from "~/components/ui/Loading";
import { api } from "~/utils/api";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  BookmarkFillIcon,
  BookmarkIcon,
  PencilIcon,
  TrashIcon,
} from "@primer/octicons-react";
import { marked } from "marked";
import { sanitize } from "isomorphic-dompurify";
import { useSession } from "next-auth/react";
import IconButton from "~/components/ui/IconButton";
import "highlight.js/styles/stackoverflow-dark.css";
import hljs from "highlight.js";
import { toastSuccess } from "~/utils/toast";

dayjs.extend(relativeTime);

const PostPage: NextPage = () => {
  const router = useRouter();
  const user = useSession(); // todo auth state
  const userMetadata = api.user.getMetadata.useQuery({ id: undefined });
  const post = api.post.getPostById.useQuery(
    { id: router.query.id as string },
    { retry: false }
  );
  const deletePost = api.post.deletePost.useMutation();
  // const votePost = api.post.votePost.useMutation();
  const bookmarkPost = api.post.bookmarkPost.useMutation();

  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  useEffect(() => hljs.highlightAll(), [post]);

  useEffect(
    () =>
      setIsBookmarked(
        userMetadata.data?.bookmarks.find((value) => value == post.data?.id) !=
          undefined
      ),
    [userMetadata.data?.bookmarks, post.data?.id]
  );

  // if (post.error) {
  //   void router.push("/404");
  // }

  if (
    post.isLoading ||
    post.data == undefined ||
    post.data == null ||
    userMetadata.data == null ||
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
            {user.data?.user.id == post.data.authorId && (
              <IconButton
                icon={<PencilIcon size={20} />}
                onClick={() =>
                  router.push(`/forum/post/${router.query.id as string}/edit`)
                }
              />
            )}
            {user.data?.user.id == post.data.authorId && (
              <IconButton
                icon={<TrashIcon size={20} />}
                onClick={() => {
                  deletePost.mutate({
                    id: post.data?.id,
                    authorId: user.data?.user.id as string,
                  });
                  toastSuccess("Deleted post!");
                  void router.push("/forum");
                }}
              />
            )}
            <IconButton
              icon={
                isBookmarked ? (
                  <BookmarkFillIcon size={20} />
                ) : (
                  <BookmarkIcon size={20} />
                )
              }
              onClick={() => {
                setIsBookmarked(!isBookmarked);
                bookmarkPost.mutate({ id: post.data.id, add: !isBookmarked });
              }}
            />
          </div>
        </div>
        <div className="flex w-full flex-row items-end justify-between border-b-2 border-neutral-600 pb-3">
          <div className="w-full">
            <h5
              className={`${
                post.data.content.length > 250
                  ? "mb-4 mt-2 text-center"
                  : "my-2"
              } text-3xl font-bold tracking-tight
          text-secondary-900 text-white`}
            >
              {post.data.title}
            </h5>
            <article
              className="prose prose-neutral dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: safeContent }}
            />
          </div>
          <div className="mr-5 flex flex-col items-center gap-1">
            {/* todo */}
          </div>
        </div>
      </div>
    </AppShell>
  );
};

export function removeItem<T>(arr: Array<T>, value: T): Array<T> {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

export default PostPage;
