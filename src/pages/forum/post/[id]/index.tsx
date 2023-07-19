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
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "~/components/ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/Form";
import { Input } from "~/components/ui/Input";
import { CommentPreview } from "~/components/sections/CommentPreview";
import Head from "next/head";

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

  const ctx = api.useContext();
  const createComment = api.post.createComment.useMutation({
    onSuccess: async () => {
      await ctx.post.getPostById.invalidate({ id: router.query.id as string });
    },
  });

  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  useEffect(() => hljs.highlightAll(), [post]);

  useEffect(() => {
    if (userMetadata != null)
      setIsBookmarked(
        userMetadata.data?.bookmarks.find((value) => value == post.data?.id) !=
          undefined
      );
  }, [userMetadata.data?.bookmarks, post.data?.id, userMetadata]);

  const formSchema = z.object({
    comment: z.string().min(2).max(100),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    createComment.mutate({
      comment: values.comment,
      postId: post.data?.id as string,
    });
    form.setValue("comment", "");
    toastSuccess("Comment posted!");
  }

  if (
    post.isLoading ||
    post.data == undefined ||
    userMetadata.isLoading ||
    user.status == "loading"
  ) {
    return <LoadingSection />;
  }

  const renderedContent = marked.parse(post.data.content);
  const safeContent = sanitize(renderedContent);

  return (
    <AppShell>
      <Head>
        <title>Helix | {post.data.title}</title>
        <meta
          name="description"
          content={post.data.content.substring(0, 255)}
        />
      </Head>
      <div className="mx-auto max-w-5xl p-3">
        <div className="flex w-full flex-row items-center justify-between pb-2">
          <p className="text-sm">
            <Link
              href={`../group/${post.data.group.name}`}
              className="hover:underline"
            >
              {post.data.group.name}
            </Link>
            {` • `}
            <span className="text-neutral-400">
              Posted by{" "}
              <Link
                className="hover:underline"
                href={`/user/${post.data.author.id}`}
              >
                {post.data.author.name}
              </Link>
              <span>{`, ${dayjs(post.data.createdAt).fromNow()}`}</span>
            </span>
          </p>
          <div className="flex flex-row gap-2">
            {user.data?.user.id == post.data.authorId && (
              <IconButton
                icon={<PencilIcon size={20} />}
                label={"edit post"}
                onClick={() =>
                  router.push(`/forum/post/${router.query.id as string}/edit`)
                }
              />
            )}
            {user.data?.user.id == post.data.authorId && (
              <IconButton
                label={"delete post"}
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
            {user.status == "authenticated" && (
              <IconButton
                label="bookmark post"
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
            )}
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
              className="prose prose-neutral min-w-full dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: safeContent }}
            />
          </div>
          <div className="mr-5 flex flex-col items-center gap-1">
            {/* todo likes */}
          </div>
        </div>
        <div className="my-3">
          {user.status == "authenticated" && (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex w-full flex-row gap-3 space-y-8"
              >
                <FormField
                  control={form.control}
                  name="comment"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Comments</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Write a comment"
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          )}
          <div className="my-2">
            {post.data.comments.map((comment) => (
              <CommentPreview comment={comment} key={comment.id} />
            ))}
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
