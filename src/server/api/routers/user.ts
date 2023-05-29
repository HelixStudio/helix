import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  getMetadata: publicProcedure
    .input(z.object({ id: z.string().optional() }))
    .query(async ({ ctx, input }) => {
      const id = input.id ?? ctx.session?.user.id;
      const user = await ctx.prisma.user.findUnique({
        where: { id: id },
      });
      return user;
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
