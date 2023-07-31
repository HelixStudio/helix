import { type Session } from "next-auth";
import AppShell from "../ui/AppShell";
import { api } from "~/utils/api";
import { LoadingSection } from "../ui/Loading";
import PostPreview from "./PostPreview";
import { getRandomTip } from "~/utils/tips";
import { ContestsTable } from "./ContestsTable";
import HelixLogo from "../ui/icons/HelixLogo";
import { Balancer } from "react-wrap-balancer";

const HomePage = (props: { session: Session }) => {
  const posts = api.post.getLatestPosts.useQuery({ limit: 5 });

  if (posts.isLoading) {
    return <LoadingSection />;
  }

  return (
    <AppShell>
      <div className="grid h-full grid-cols-2 px-0 pt-10 md:px-4 md:py-14 xl:px-24">
        <div className="col-span-2 flex justify-center md:mb-12">
          <HelixLogo />
        </div>
        <div className="col-span-2 flex flex-col p-8 md:col-span-1 md:p-14 md:py-2">
          <div className="flex flex-col justify-center gap-1">
            <h3 className="text-xl font-bold md:text-3xl">
              <Balancer>
                <span className="text-neutral-300">Welcome back, </span>
                {props.session.user.name}!
              </Balancer>
            </h3>
            <p>
              <Balancer>
                <span className="text-neutral-300">Random tip: </span>
                {getRandomTip()}
              </Balancer>
            </p>
          </div>

          <div className="mb-8 flex flex-col md:mb-0">
            <h4 className="mb-2 text-lg md:text-xl">Upcoming contests:</h4>
            <div className="overflow-hidden rounded-lg">
              <ContestsTable isSmall={true} />
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
                27.06.2023: You can now participate in coding contests on Helix!
              </li>
              <li>23.06.2023: Save & share files from the new CodeRunner</li>
            </ul>
          </div>
        </div>

        <div className="col-span-2 flex flex-col p-8 md:col-span-1 md:p-14 md:py-2">
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
