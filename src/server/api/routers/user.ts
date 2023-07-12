import { type Prisma } from "@prisma/client";
import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  getMetadata: publicProcedure
    .input(
      z.object({
        id: z.string().optional(),
        name: z.string().optional(),
        posts: z.boolean().default(false),
      })
    )
    .query(async ({ ctx, input }) => {
      let user = undefined;
      const includeBody: Prisma.UserInclude = {
        created_posts: input.posts
          ? {
              include: { author: true, group: true },
              orderBy: { createdAt: "desc" },
            }
          : false,
      };
      if (input.name != undefined) {
        user = await ctx.prisma.user.findUnique({
          where: { name: input.name },
          include: includeBody,
        });
      } else {
        const id = input.id ?? ctx.session?.user.id;
        if (!id) return null;
        user = await ctx.prisma.user.findUnique({
          where: { id: id },
          include: includeBody,
        });
      }
      return user;
    }),
  getLatestPosts: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.user.findUnique({
      where: { id: ctx.session?.user.id },
      select: {
        created_posts: {
          include: { author: true, group: true },
          orderBy: { createdAt: "desc" },
        },
      },
    });
  }),
  getBookmarkedPosts: publicProcedure.query(async ({ ctx }) => {
    const bookmarkIds = await ctx.prisma.user.findUnique({
      where: { id: ctx.session?.user.id },
      select: { bookmarks: true },
    });
    return await ctx.prisma.post.findMany({
      where: { id: { in: bookmarkIds?.bookmarks } },
      orderBy: { createdAt: "desc" },
      include: { author: true, group: true },
    });
  }),
  getGroups: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.group.findMany({
      where: { authorId: ctx.session?.user.id },
      orderBy: { createdAt: "desc" },
      select: { id: true, name: true, joined: true },
    });
  }),
  getUploadedImages: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.user.findUnique({
      where: { id: ctx.session?.user.id },
      select: { uploaded_images: true },
    });
  }),
  updateMetadata: protectedProcedure
    .input(
      z.object({
        id: z.string().optional(),
        username: z.string().min(2),
        bio: z.string().max(255),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const id = input.id ?? ctx.session?.user.id;
      const newUser = await ctx.prisma.user.update({
        where: { id: id },
        data: { name: input.username, bio: input.bio },
      });
      return newUser;
    }),
});
