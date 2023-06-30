"use client";

import {
  type ExcalidrawProps,
  type ExcalidrawAPIRefValue,
} from "@excalidraw/excalidraw/types/types";
import {
  useState,
  useEffect,
  type ForwardRefExoticComponent,
  type MemoExoticComponent,
  type RefAttributes,
} from "react";
import { LoadingSpinner } from "../ui/Loading";

declare type PublicExcalidrawProps = Omit<ExcalidrawProps, "forwardedRef">;

type ExcalidrawEditor = MemoExoticComponent<
  ForwardRefExoticComponent<
    PublicExcalidrawProps & RefAttributes<ExcalidrawAPIRefValue>
  >
>;

export const Scracthpad = () => {
  const [Excalidraw, setExcalidraw] = useState<ExcalidrawEditor | null>(null);

  useEffect(() => {
    import("@excalidraw/excalidraw")
      .then((comp) => setExcalidraw(comp.Excalidraw))
      .catch((reason) => {
        console.log(reason);
      });
  }, []);

  if (!Excalidraw) return <LoadingSpinner />;

  return (
    <div className="h-full">
      {Excalidraw && (
        <div className="custom-excalidraw h-full">
          <Excalidraw theme={"dark"} />
        </div>
      )}
    </div>
  );
};
