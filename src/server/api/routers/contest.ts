import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const contestRouter = createTRPCRouter({
  getContests: publicProcedure
    .input(z.object({ limit: z.number().min(1).max(100) }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.contest.findMany({
        take: input.limit,
        include: { author: { select: { name: true, id: true } } },
      });
    }),
  getContest: publicProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.contest.findUnique({
        where: { id: input.id },
        include: { author: { select: { name: true, id: true } } },
      });
    }),
});
