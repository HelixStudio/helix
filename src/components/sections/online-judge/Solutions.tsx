import UIPanel from "~/components/ui/UIPanel";

const Solutions = () => {
  return (
    <div className="h-full">
      <UIPanel
        pages={[
          {
            name: "Solutions",
            component: <p>solutions</p>,
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
