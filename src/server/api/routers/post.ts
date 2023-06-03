import { z } from "zod";
import { formSchema } from "~/pages/forum/write";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  getLatestPosts: publicProcedure
    .input(z.object({ limit: z.number().min(1).max(100) }))
    .query(async ({ ctx, input }) => {
      const posts = await ctx.prisma.post.findMany({
        take: input.limit,
        where: {},
        include: { author: true, group: true },
        orderBy: { updatedAt: "desc" },
      });
      return posts;
    }),
  setNewPost: protectedProcedure
    .input(
      z.object({
        metadata: formSchema,
        authorId: z.string().cuid(),
        group: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const group = await ctx.prisma.group.findFirst({
        where: { name: input.group },
      });
      if (group == undefined) throw new Error("group not found");
      return await ctx.prisma.post.create({
        data: {
          title: input.metadata.title,
          content: input.metadata.content,
          authorId: input.authorId,
          groupId: group?.id,
        },
      });
    }),
});
