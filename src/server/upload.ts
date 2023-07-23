import type { NextApiRequest, NextApiResponse } from "next";
import { createUploadthing, type FileRouter } from "uploadthing/next-legacy";
import { getServerAuthSession } from "./auth";
import { prisma } from "./db";

const f = createUploadthing();

const auth = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerAuthSession({ req, res });
  if (!session) return undefined;
  return { id: session.user.id };
};

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "8MB", maxFileCount: 3 } })
    .middleware(async (req, res) => {
      const user = await auth(req, res);

      // might not work on the deployed version for some reason
      // debug later...
      if (!user) throw new Error("Unauthorized! User not logged in.");

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      await prisma.user.update({
        where: { id: metadata.userId },
        data: { uploaded_images: { push: file.url } },
      });
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
