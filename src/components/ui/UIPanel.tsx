import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "~/utils/cn";

type PanelPage = {
  name: string;
  component: React.ReactNode;
  x?: number;
};

const UIPanel = (props: {
  pages: PanelPage[];
  leading?: React.ReactNode;
  controls?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const PAGE_LENGTH = 125;

  for (let i = 0; i < props.pages.length; i++)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    props.pages[i]!.x = PAGE_LENGTH * i;

  const [activePage, setActivePage] = useState(props.pages[0]);

  return (
    <div className="flex h-full flex-col bg-secondary-800">
      <div className="m-2 flex h-12 min-h-[3rem] flex-row items-center justify-between rounded-md bg-secondary-700 px-3">
        {props.pages.length > 0 && (
          <div className="flex flex-row gap-3">
            <motion.div
              animate={{
                x: activePage?.x,
                y: 5,
              }}
              className="absolute z-10 h-10 w-28 rounded-md bg-secondary-800"
            />
            {props.pages.map((page) => (
              <button
                key={page.name}
                onClick={() => setActivePage(page)}
                className={cn(
                  "z-20 my-1 h-10 w-28 rounded-md p-2 transition-all hover:cursor-pointer",
                  page.name == activePage?.name
                    ? "text-accent-400"
                    : "hover:bg-secondary-600 hover:bg-opacity-70"
                )}
              >
                {page.name}
              </button>
            ))}
          </div>
        )}
        {props.pages.length == 0 && props.leading}
        {props.controls !== undefined && props.controls}
      </div>
      <div className="h-full overflow-y-scroll bg-secondary-800 px-3">
        {activePage?.component}
        {props.pages.length == 0 && props.children}
      </div>
    </div>
  );
};

export default UIPanel;
