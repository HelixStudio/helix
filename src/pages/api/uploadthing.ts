import { createNextPageApiHandler } from "uploadthing/next-legacy";

import { ourFileRouter } from "~/server/upload";

const handler = createNextPageApiHandler({
  router: ourFileRouter,
});

export default handler;
