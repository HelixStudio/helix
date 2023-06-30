import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const problemRouter = createTRPCRouter({
  getProblems: publicProcedure
    .input(z.object({ limit: z.number().min(1).max(100) }))
    .query(async ({ ctx, input }) => {
      const problems = await ctx.prisma.problem.findMany({
        take: input.limit,
        include: { author: { select: { name: true, id: true } } },
      });
      return problems;
    }),
  getProblemById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const problem = await ctx.prisma.problem.findUnique({
        where: { id: input.id },
        include: { author: { select: { name: true, id: true } } },
      });
      return problem;
    }),
});
