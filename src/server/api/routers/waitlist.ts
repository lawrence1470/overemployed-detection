import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const waitlistRouter = createTRPCRouter({
  join: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      // TODO: Add actual database storage for waitlist
      // For now, just log the email
      console.log("Waitlist signup:", input.email);
      
      // You could store in database like this:
      // await ctx.db.waitlist.create({
      //   data: {
      //     email: input.email,
      //     createdAt: new Date(),
      //   },
      // });
      
      return {
        success: true,
        message: "Successfully joined waitlist!",
      };
    }),
});