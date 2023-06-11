import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { runCode } from "~/utils/code";

export const codeRouter = createTRPCRouter({
  runCode: publicProcedure
    .input(z.object({ code: z.string(), language: z.string() }))
    .mutation(async ({ input }) => {
      const output = await runCode(input.code, input.language);
      return output?.run.output;
    }),
});
