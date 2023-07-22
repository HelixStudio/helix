import { Button } from "~/components/ui/Button";
import UIPanel from "~/components/ui/UIPanel";
import { Scracthpad } from "../Scratchpad";
import { type ProblemMetadata, StatementView } from "../StatementView";
import Link from "next/link";

const Informations = (props: { problem: ProblemMetadata }) => {
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
            component: <p>No editorial published yet for this problem.</p>,
          },
        ]}
        controls={
          <div className="flex flex-row gap-3">
            <Link
              href={`/online-judge/pdf/${props.problem.id}`}
              target={"_blank"}
            >
              <Button variant={"outline"}>Download PDF</Button>
            </Link>
            <Link
              href={`/ai-coach?prompt=${props.problem.statement}`}
              target={"_blank"}
            >
              <Button variant={"outline"}>Ask AI</Button>
            </Link>
          </div>
        }
      >
        <></>
      </UIPanel>
    </div>
  );
};

export default Informations;
