import { generateReactHelpers } from "@uploadthing/react/hooks";
import { type OurFileRouter } from "~/server/upload";

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();
