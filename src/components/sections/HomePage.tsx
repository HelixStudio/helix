import { type Session } from "next-auth";
import AppShell from "../ui/AppShell";
import { api } from "~/utils/api";
import { LoadingSection } from "../ui/Loading";
import PostPreview from "./PostPreview";

const HomePage = (props: { session: Session }) => {
  const posts = api.post.getLatestPosts.useQuery({ limit: 5 });

  if (posts.isLoading) {
    return <LoadingSection />;
  }

  return (
    <AppShell>
      <div className="m-1 grid grid-flow-row md:grid-flow-col md:grid-cols-3">
        <div className="space-y-2 p-2 md:col-span-2">
          <div className="flex flex-row items-center gap-2">
            <p className="text-2xl">Hello, {props.session.user?.name}!</p>
          </div>
        </div>
        <div className="col-span-1 flex flex-col p-2">
          <h1 className="mb-2 text-2xl">Latest posts</h1>
          {posts.data?.map((post) => (
            <PostPreview
              key={post.id}
              size={"sm"}
              post={post}
              uid={props.session.user.id}
            />
          ))}
        </div>
      </div>
    </AppShell>
  );
};

export default HomePage;
