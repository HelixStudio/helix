import UIPanel from "~/components/ui/UIPanel";
import SubmissionsView from "./SubmissionsView";
import { YourTests } from "./YourTests";
import { Results } from "./Results";

const Solutions = ({ problemId }: { problemId: number }) => {
  return (
    <div className="h-full">
      <UIPanel
        pages={[
          {
            name: "Solutions",
            component: <SubmissionsView problemId={problemId} />,
          },
          {
            name: "Your tests",
            component: <YourTests />,
          },
          {
            name: "Results",
            component: <Results />,
          },
        ]}
        controls={<></>}
      >
        <></>
      </UIPanel>
    </div>
  );
};

export default Solutions;
