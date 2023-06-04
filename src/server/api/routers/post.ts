import { TRPCError } from "@trpc/server";
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
  getPostById: publicProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      try {
        const post = await ctx.prisma.post.findUniqueOrThrow({
          where: { id: input.id },
          include: { author: true, group: true },
        });
        return post;
      } catch {
        throw new TRPCError({
          message: "Post not found!",
          code: "NOT_FOUND",
        });
      }
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
      if (group == undefined)
        throw new TRPCError({
          message: "Group not found.",
          code: "NOT_FOUND",
        });
      return await ctx.prisma.post.create({
        data: {
          title: input.metadata.title,
          content: input.metadata.content,
          authorId: input.authorId,
          groupId: group?.id,
        },
      });
    }),
  updatePost: protectedProcedure
    .input(
      z.object({
        id: z.string().uuid(),
        metadata: formSchema,
        authorId: z.string().cuid(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      if (input.authorId != ctx.session.user.id)
        throw new TRPCError({
          message: "User doesn't have permission to edit this post.",
          code: "UNAUTHORIZED",
        });
      return await ctx.prisma.post.update({
        where: { id: input.id },
        data: { title: input.metadata.title, content: input.metadata.content },
      });
    }),
  deletePost: protectedProcedure
    .input(z.object({ id: z.string().uuid(), authorId: z.string().cuid() }))
    .mutation(async ({ ctx, input }) => {
      if (input.authorId != ctx.session.user.id)
        throw new TRPCError({
          message: "User doesn't have permission to delete this post.",
          code: "UNAUTHORIZED",
        });
      return await ctx.prisma.post.delete({
        where: { id: input.id },
      });
    }),
});
