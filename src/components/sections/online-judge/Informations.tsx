import { Button } from "~/components/ui/Button";
import UIPanel from "~/components/ui/UIPanel";
import { Scracthpad } from "../Scratchpad";
import { type ProblemMetadata, StatementView } from "../StatementView";

const Informations = (props: { problem: ProblemMetadata }) => {
  return (
    <div className="h-full">
      <UIPanel
        pages={[
          {
            name: "Statement",
            component: <StatementView problem={props.problem} />,
          },
          // {
          //   name: "Scratchpad",
          //   component: <Scracthpad />,
          // },
          {
            name: "Editorial",
            component: <p>Editorial</p>,
          },
        ]}
        controls={
          <div className="flex flex-row gap-3">
            <Button variant={"outline"}>Download PDF</Button>
            <Button variant={"outline"}>Ask AI</Button>
          </div>
        }
      >
        <></>
      </UIPanel>
    </div>
  );
};

export default Informations;
