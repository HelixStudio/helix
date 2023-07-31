import { type Session } from "next-auth";
import { api } from "~/utils/api";
import { LoadingSection } from "../ui/Loading";
import { useAtomValue } from "jotai";
import { homepageLayoutAtom } from "~/utils/atoms";
import HomePageLarge from "./LargeHomePage";
import HomePageSmall from "./SmallHomePage";

const HomePage = (props: { session: Session }) => {
  const posts = api.post.getLatestPosts.useQuery({ limit: 5 });

  const layout = useAtomValue(homepageLayoutAtom);

  if (posts.isLoading) {
    return <LoadingSection />;
  }

  if (layout == "spacious")
    return <HomePageLarge posts={posts.data ?? []} session={props.session} />;
  else
    return <HomePageSmall posts={posts.data ?? []} session={props.session} />;
};

export default HomePage;
