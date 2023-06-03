import { type NextPage } from "next";
import React from "react";
import AppShell from "~/components/ui/AppShell";
import IconButton from "~/components/ui/IconButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/Tabs";
import { BsPencilSquare } from "react-icons/bs";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import { api } from "~/utils/api";
import { LoadingSection } from "~/components/ui/Loading";
import PostPreview from "~/components/sections/PostPreview";

const ForumPage: NextPage = () => {
  const router = useRouter();
  const posts = api.post.getLatestPosts.useQuery({ limit: 10 });

  if (posts.isLoading) return <LoadingSection />;

  return (
    <AppShell>
      <div className="mx-auto max-w-5xl sm:px-3">
        <Tabs defaultValue="new">
          <div className="flex w-full flex-row items-center justify-between bg-secondary-800 px-3 py-2 sm:my-3 sm:rounded-lg">
            <TabsList>
              <TabsTrigger value="best">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mr-2 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                </svg>
                Best
              </TabsTrigger>
              <TabsTrigger value="new">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mr-2 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                  />
                </svg>
                New
              </TabsTrigger>
            </TabsList>
            <div className="flex flex-row gap-5">
              <IconButton
                icon={<BsPencilSquare size={20} />}
                onClick={() => {
                  router.push("/forum/write");
                }}
              />
              <IconButton
                icon={<HiMagnifyingGlass size={20} />}
                onClick={() => {
                  alert("search");
                }}
              />
            </div>
          </div>
          <div className="px-3 sm:px-0">
            <TabsContent value="best">best </TabsContent>
            <TabsContent value="new">
              {posts.data?.map((post) => (
                <PostPreview post={post} key={post.id} />
              ))}
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </AppShell>
  );
};

export default ForumPage;
