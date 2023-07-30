import { type Session } from "next-auth";
import AppShell from "../ui/AppShell";
import { api } from "~/utils/api";
import { LoadingSection } from "../ui/Loading";
import PostPreview from "./PostPreview";
import { getRandomTip } from "~/utils/tips";
import { ContestsTable } from "./ContestsTable";
import HelixLogo from '../ui/icons/helix-logo';

const HomePage = (props: { session: Session }) => {
  const posts = api.post.getLatestPosts.useQuery({ limit: 5 });

  if (posts.isLoading) {
    return <LoadingSection />;
  }

  return (
    <AppShell>
      <div className="grid h-full grid-cols-2 py-14 md:px-24">
        <div className="col-span-2 flex justify-center md:mb-12">
          <HelixLogo /> {/* Get this to work with currentColor, too tired rn */}
        </div>
        <div className="col-span-2 md:col-span-1 flex h-full flex-col justify-evenly md:justify-evenly md:py-2 p-8 md:p-14">

          <div className="flex flex-col justify-center gap-1">
            <h3 className="text-xl md:text-3xl font-bold">
              <span className="text-neutral-300">Welcome back,  </span>
              {props.session.user.name}!
            </h3>
            <p>
              <span className="text-neutral-300">Daily tip: </span>
              {getRandomTip()}
            </p>
          </div>

          <div className="flex flex-col mb-8 md:mb-0">
            <h4 className="mb-2 text-lg md:text-xl">Upcoming contests:</h4>
            <div className="overflow-hidden rounded-lg">
              <ContestsTable />
            </div>
          </div>

          <div className="mb-8 md:mb-0">
            <h1 className="mb-2 text-2xl">New courses:</h1>
            <p>Coming soon!</p>
          </div>
          
          <div>
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

        <div className="col-span-2 md:col-span-1 flex flex-col md:py-2 p-8 md:p-14">
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
