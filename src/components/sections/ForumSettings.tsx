import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "~/components/ui/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/Form";
import { Input } from "~/components/ui/Input";
import { useForm } from "react-hook-form";
import { api } from "~/utils/api";
import { Textarea } from "~/components/ui/Textarea";
import { toastSuccess } from "~/utils/toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs";
import { Switch } from "../ui/Switch";
import Link from "next/link";
import { useRouter } from "next/router";
import PostPreview from "./PostPreview";

const ForumSettings = () => {
  const router = useRouter();

  const createGroup = api.group.createGroup.useMutation();

  const yourGroups = api.user.getGroups.useQuery();
  const latestPosts = api.user.getLatestPosts.useQuery();
  const bookmarks = api.user.getBookmarkedPosts.useQuery();

  const formSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    description: z.string().max(255, {
      message: "Description must not be longer than 255 characters.",
    }),
    rules: z.string().max(255 * 10, {
      message:
        "Your group can't have more than 10 questions each with 255 characters.",
    }),
    private: z.boolean(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      rules: "",
      private: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    createGroup.mutate({
      name: values.name,
      description: values.description,
      rules: values.rules.split("\n"),
      private: values.private,
    });
    toastSuccess("Group created!");
    void router.push("/forum");
  };

  if (latestPosts.isLoading || bookmarks.isLoading || yourGroups.isLoading) {
    return (
      <div className="flex h-[20vh] items-center justify-center">
        {/* <LoadingSpinner size={25} /> too many spinners */}
      </div>
    );
  }

  return (
    <div className="py-2">
      <h1 className="my-4 border-b-2 text-2xl">Forum settings</h1>
      <Tabs defaultValue="your-posts">
        <TabsList>
          <TabsTrigger value="your-posts">Your posts</TabsTrigger>
          <TabsTrigger value="bookmarks">Bookmarks</TabsTrigger>
          <TabsTrigger value="your-groups">Your grops</TabsTrigger>
          <TabsTrigger value="new-group">Create group</TabsTrigger>
        </TabsList>
        <TabsContent value="your-groups">
          <ul className="ml-7 list-disc">
            {yourGroups.data?.map((group) => (
              <li key={group.id}>
                <Link
                  href={`forum/group/${group.name}`}
                  className="w-fit hover:underline"
                >
                  {group.name}
                </Link>
                :
                {` ${group.joined.length ?? 0} member${
                  group.joined.length != 1 ? "s" : ""
                } joined`}
              </li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="new-group">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Group name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      Pick a short and representive name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea {...field}></Textarea>
                    </FormControl>
                    <FormDescription>
                      What&apos;s your group about?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rules"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rules</FormLabel>
                    <FormControl>
                      <Textarea {...field}></Textarea>
                    </FormControl>
                    <FormDescription>
                      Write your rules. Each rule sepparated on a new line.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="private"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-row items-center gap-3">
                      <FormLabel>Is it private?</FormLabel>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </div>
                    <FormDescription>
                      Private means you will be the only one who can post.
                      Select this if you want your own personal blog.
                    </FormDescription>
                  </FormItem>
                )}
              />
              <div>
                <Button type="submit">Create group</Button>
                <p className="py-2">
                  By creating a group you agree to our{" "}
                  <Link href="/mod-guidlines" className="hover:underline">
                    Moderator Guidlines
                  </Link>
                  .
                </p>
              </div>
            </form>
          </Form>
        </TabsContent>
        <TabsContent value="your-posts">
          {(latestPosts.data?.created_posts.length as number) > 0 ? (
            latestPosts.data?.created_posts.map((post) => (
              <PostPreview key={post.id} post={post} uid={post.authorId} />
            ))
          ) : (
            <p>You have no posts.</p>
          )}
        </TabsContent>
        <TabsContent value="bookmarks">
          {(bookmarks.data?.length as number) > 0 ? (
            bookmarks.data?.map((post) => (
              <PostPreview key={post.id} post={post} uid={post.authorId} />
            ))
          ) : (
            <p>You have no bookmarked posts.</p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ForumSettings;
