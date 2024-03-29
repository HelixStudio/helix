import { createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "~/server/api/routers/user";
import { postRouter } from "./routers/post";
import { groupRouter } from "./routers/group";
import { codeRouter } from "./routers/code";
import { problemRouter } from "./routers/problem";
import { contestRouter } from "./routers/contest";
import { ctfRouter } from "./routers/ctf";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  post: postRouter,
  group: groupRouter,
  code: codeRouter,
  problem: problemRouter,
  contest: contestRouter,
  ctf: ctfRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
