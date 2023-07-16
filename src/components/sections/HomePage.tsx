import { type Session } from "next-auth";
import AppShell from "../ui/AppShell";
import { api } from "~/utils/api";
import { LoadingSection } from "../ui/Loading";
import PostPreview from "./PostPreview";
import { getRandomTip } from "~/utils/tips";
import { ContestsTable } from "./ContestsTable";

const HomePage = (props: { session: Session }) => {
  const posts = api.post.getLatestPosts.useQuery({ limit: 5 });

  if (posts.isLoading) {
    return <LoadingSection />;
  }

  return (
    <AppShell>
      <div className="m-1 grid h-full grid-flow-row md:grid-flow-col md:grid-cols-3">
        <div className="flex h-full flex-col justify-evenly px-2 md:col-span-2 md:justify-between md:py-2">
          <div className="space-y-2">
            <div className="col-span-1 flex flex-col">
              <h1 className="mb-2 text-2xl">Upcoming contests:</h1>
              <div className="overflow-hidden rounded-lg">
                <ContestsTable />
              </div>
            </div>
            <div className="col-span-1 flex flex-col py-2">
              <h1 className="mb-2 text-2xl">New courses:</h1>
              <p>Coming soon!</p>
            </div>
            <div className="col-span-1 flex flex-col py-2">
              <h1 className="mb-2 text-2xl">Latest changes:</h1>
              <ul className="ml-5 list-disc">
                <li>
                  27.06.2023: You can now participate in coding contests on
                  Helix!
                </li>
                <li>23.06.2023: Save & share files from the new CodeRunner</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-1 md:flex-row md:p-3">
            <p>
              <span className="text-neutral-300">Logged in as </span>
              {props.session.user.name}
            </p>
            <p className="hidden md:inline"> • </p>
            <p>
              <span className="text-neutral-300">Random tip: </span>
              {getRandomTip()}
            </p>
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
