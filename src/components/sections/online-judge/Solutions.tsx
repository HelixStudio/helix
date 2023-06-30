import { Scracthpad } from "~/components/sections/Scratchpad";
import UIPanel from "~/components/ui/UIPanel";

const Solutions = () => {
  return (
    <div className="h-full">
      <UIPanel
        pages={[
          {
            name: "Solutions",
            component: <Scracthpad />,
          },
          {
            name: "Your tests",
            component: <Scracthpad />,
          },
          {
            name: "Results",
            component: <Scracthpad />,
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
