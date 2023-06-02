import { type Post } from "@prisma/client";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  getLatestPosts: publicProcedure
    .input(z.object({ limit: z.number().min(1).max(100) }))
    .query(async ({ ctx, input }) => {
      const posts: Post[] = await ctx.prisma.post.findMany({
        take: input.limit,
        where: {},
        orderBy: { updatedAt: "desc" },
      });
      return posts;
    }),
});
