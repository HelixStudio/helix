import { type Problem } from "@prisma/client";
import { Button } from "~/components/ui/Button";
import UIPanel from "~/components/ui/UIPanel";
import { Scracthpad } from "../Scratchpad";
import { StatementView } from "../StatementView";

const Informations = (props: { problem: Problem }) => {
  return (
    <div className="h-full">
      <UIPanel
        pages={[
          {
            name: "Statement",
            component: <StatementView problem={props.problem} />,
          },
          {
            name: "Scratchpad",
            component: <Scracthpad />,
          },
          {
            name: "Editorial",
            component: <Scracthpad />,
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
