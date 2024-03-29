import { type NextPage } from "next";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "~/components/ui/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/Form";
import AppShell from "~/components/ui/AppShell";
import { useForm } from "react-hook-form";
import { Input } from "~/components/ui/Input";
import { Textarea } from "~/components/ui/Textarea";
import Combobox from "~/components/ui/Combobox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/Tabs";
import { api } from "~/utils/api";
import { LoadingSection } from "~/components/ui/Loading";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { PostPreviewLarge } from "~/components/sections/PostPreview";
import toast from "react-hot-toast";
import UploadImages from "~/components/sections/UploadImages";
import Head from "next/head";

export const formSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Title must be at least 2 characters.",
    })
    .max(300, {
      message: "Title must not be more than 300 characters.",
    }),
  content: z.string().max(17000, {
    message: "Content cannot be longer than 17000 characters.",
  }),
});

const WritePage: NextPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const newPost = api.post.setNewPost.useMutation();
  const router = useRouter();
  const user = useSession();
  const [group, setGroup] = useState("");

  const watchAllFields = form.watch();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (group == "") {
      alert("Choose a group to post in!");
      return;
    }
    newPost.mutate({
      metadata: values,
      authorId: user.data?.user.id as string,
      group: group,
    });
    toast.success("Post published!", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    await router.push("/forum");
  };

  const popularGroups = api.group.getPopularGroups.useQuery({ limit: 10 });

  if (popularGroups.isLoading && user.status == "loading") {
    return <LoadingSection />;
  }

  const getNames = (): string[] => {
    if (popularGroups.data == undefined) return [];
    // throw new Error("error fetching the groups");
    const arr: string[] = [];
    for (let i = 0; i < popularGroups.data?.length; i++)
      arr.push(popularGroups.data[i]?.name as string);
    return arr;
  };

  return (
    <AppShell>
      <Head>
        <title>Helix | Write new post</title>
      </Head>
      <div className="mx-auto max-w-5xl px-3">
        <h1 className="py-3 text-2xl">Write a new post</h1>
        <div className="pb-3">
          <Combobox
            onSelect={(newValue) => setGroup(newValue)}
            label="Choose a group"
            placeholder="Choose a group"
            options={[...getNames()]}
          />
        </div>
        <Tabs defaultValue="text">
          <TabsList>
            <TabsTrigger value="text">Text</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
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
                          rows={10}
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
                <Button type="submit">Post</Button>
              </form>
            </Form>
          </TabsContent>
          <TabsContent value="images">
            <UploadImages />
          </TabsContent>
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

export default WritePage;
