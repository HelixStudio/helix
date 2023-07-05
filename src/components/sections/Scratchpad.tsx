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
import { type ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";

declare type PublicExcalidrawProps = Omit<ExcalidrawProps, "forwardedRef">;

type ExcalidrawEditor = MemoExoticComponent<
  ForwardRefExoticComponent<
    PublicExcalidrawProps & RefAttributes<ExcalidrawAPIRefValue>
  >
>;

export const Scracthpad = () => {
  const [Excalidraw, setExcalidraw] = useState<ExcalidrawEditor | null>(null);

  useEffect(() => {
    // TODO: loads pretty slow...
    import("@excalidraw/excalidraw")
      .then((comp) => setExcalidraw(comp.Excalidraw))
      .catch((reason) => {
        console.log(reason);
      });
  }, []);

  if (!Excalidraw) return <LoadingSpinner />;

  const getStoredElements = () => {
    const elements = localStorage.getItem("scratchpadElements");
    if (elements == null) return [];
    return JSON.parse(elements) as ExcalidrawElement[];
  };

  return (
    <div className="h-full">
      {Excalidraw && (
        <div className="custom-excalidraw h-full">
          <Excalidraw
            onChange={(newElements: readonly ExcalidrawElement[]) => {
              localStorage.setItem(
                "scratchpadElements",
                JSON.stringify(newElements)
              );
            }}
            initialData={{
              elements: getStoredElements(),
            }}
            theme={"dark"}
          />
        </div>
      )}
    </div>
  );
};
