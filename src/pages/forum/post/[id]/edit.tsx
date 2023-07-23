/* eslint-disable @typescript-eslint/no-unsafe-call */
import { type NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import AppShell from "~/components/ui/AppShell";
import { LoadingSection } from "~/components/ui/Loading";
import { api } from "~/utils/api";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useSession } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type z } from "zod";
import { PostPreviewLarge } from "~/components/sections/PostPreview";
import { Button } from "~/components/ui/Button";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormDescription,
  Form,
} from "~/components/ui/Form";
import { Textarea } from "~/components/ui/Textarea";
import { formSchema } from "../../write";
import { Input } from "~/components/ui/Input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/Tabs";
import { toastSuccess } from "~/utils/toast";

dayjs.extend(relativeTime);

const EditPostPage: NextPage = () => {
  const router = useRouter();
  const user = useSession();

  const post = api.post.getPostById.useQuery({ id: router.query.id as string });
  const updatePost = api.post.updatePost.useMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post.data?.title ?? "",
      content: post.data?.content ?? "",
    },
  });
  const watchAllFields = form.watch();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    updatePost.mutate({
      id: router.query.id as string,
      metadata: values,
      authorId: user.data?.user.id as string,
    });
    toastSuccess("Posted edited!");
    await router.push("/forum");
  };

  useEffect(() => {
    if (
      post.isLoading ||
      watchAllFields.title != "" ||
      watchAllFields.content != ""
    )
      return;
    form.setValue("title", post.data?.title as string);
    form.setValue("content", post.data?.content as string);
  });

  if (user.data?.user.id != post.data?.authorId) {
    void router.push("/forum");
    return <LoadingSection />;
  }

  if (
    post.isLoading ||
    post.data == undefined ||
    post.data == null ||
    user.status == "loading"
  ) {
    return <LoadingSection />;
  }

  return (
    <AppShell>
      <div className="mx-auto max-w-5xl px-3">
        <h1 className="py-3 text-2xl">Edit post</h1>
        <Tabs defaultValue="text">
          <TabsList>
            <TabsTrigger value="text">Text</TabsTrigger>
            {/* <TabsTrigger value="images">Images</TabsTrigger> */}
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          <TabsContent value="text" className="w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-8"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder={"Title"} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          rows={20}
                          placeholder={"Content"}
                          {...field}
                        ></Textarea>
                      </FormControl>
                      <FormDescription>
                        Format your text using markdown!
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Update</Button>
              </form>
            </Form>
          </TabsContent>
          {/* <TabsContent value="images">Upload your images here.</TabsContent> */}
          <TabsContent value="preview">
            <PostPreviewLarge
              title={watchAllFields.title}
              content={watchAllFields.content}
            />
          </TabsContent>
        </Tabs>
      </div>
    </AppShell>
  );
};

export default EditPostPage;
