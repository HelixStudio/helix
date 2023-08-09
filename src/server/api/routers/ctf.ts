import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { type CTFChallenge } from "~/utils/ctf";

export const ctfRouter = createTRPCRouter({
  getChallenges: publicProcedure.query(async ({ ctx }) => {
    const res = await fetch("https://helix-ctf-server.fly.dev/challenges");
    const data = (await res.json()) as CTFChallenge[];

    if (ctx.session == null) {
      return data.map((challenge) => {
        return {
          ...challenge,
          solved: false,
        };
      });
    }

    const solved = await ctx.prisma.user.findFirst({
      where: { id: ctx.session.user.id },
      select: { solved_ctf: true },
    });

    return data.map((challenge) => {
      return {
        ...challenge,
        solved: solved?.solved_ctf.includes(challenge.id),
      };
    });
  }),
  checkFlag: protectedProcedure
    .input(z.object({ id: z.number(), flag: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const res = await fetch("https://helix-ctf-server.fly.dev/check", {
        body: JSON.stringify({
          id: input.id.toString(),
          user_flag: input.flag,
        }),
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = (await res.json()) as { message: string };

      if (data.message == "correct") {
        const solved = await ctx.prisma.user.findFirst({
          where: { id: ctx.session.user.id },
          select: { solved_ctf: true },
        });

        if (!solved?.solved_ctf.includes(input.id)) {
          await ctx.prisma.user.update({
            where: { id: ctx.session.user.id },
            data: { solved_ctf: { push: input.id } },
          });
        }
      }

      return data;
    }),
  getProgress: publicProcedure.query(async ({ ctx }) => {
    if (ctx.session == undefined) {
      return { count: 0, progress: 0.0 };
    }

    const userData = await ctx.prisma.user.findUnique({
      where: { id: ctx.session.user.id },
      select: { solved_ctf: true },
    });

    if (userData == undefined) {
      return { count: 0, progress: 0.0 };
    }

    const res = await fetch("https://helix-ctf-server.fly.dev/challenges");
    const data = (await res.json()) as CTFChallenge[];

    return {
      count: userData.solved_ctf.length,
      progress: (userData.solved_ctf.length / data.length) * 100.0,
    };
  }),
});
