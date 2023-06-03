import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const groupRouter = createTRPCRouter({
  getPopularGroups: publicProcedure
    .input(z.object({ limit: z.number().min(1).max(100) }))
    .query(async ({ ctx, input }) => {
      const groups = await ctx.prisma.group.findMany({
        select: { name: true, id: true },
        take: input.limit,
        orderBy: { posts: { _count: "desc" } },
      });
      return groups;
    }),
});
