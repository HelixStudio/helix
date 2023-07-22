import UIPanel from "~/components/ui/UIPanel";
import SubmissionsView from "./SubmissionsView";

// TODO: use atom to manage loading state
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
            component: <p>Your custom tests will be here. Work in progress.</p>,
          },
          {
            name: "Results",
            component: (
              <p>
                Results from the custom tests will be here. Work in progress.
              </p>
            ),
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
