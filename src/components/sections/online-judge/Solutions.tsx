import UIPanel from "~/components/ui/UIPanel";
import SubmissionsView from "./SubmissionsView";

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
            component: <p>your tests</p>,
          },
          {
            name: "Results",
            component: <p>results</p>,
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
