import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { sendWaitlistThankYouEmail } from "~/lib/email";

export const waitlistRouter = createTRPCRouter({
  // Get waitlist statistics (protected or public as needed)
  stats: publicProcedure
    .query(async ({ ctx }) => {
      try {
        const totalCount = await ctx.db.waitlist.count();
        const emailsSent = await ctx.db.waitlist.count({
          where: { emailSent: true },
        });
        const recentSignups = await ctx.db.waitlist.count({
          where: {
            createdAt: {
              gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // Last 7 days
            },
          },
        });
        
        return {
          totalSignups: totalCount,
          emailsSent,
          recentSignups,
        };
      } catch (error) {
        console.error('Failed to get waitlist stats:', error);
        return {
          totalSignups: 0,
          emailsSent: 0,
          recentSignups: 0,
        };
      }
    }),
    
  join: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        employeeCount: z.string().optional(),
        hrisSystem: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        // Check if email already exists
        const existingEntry = await ctx.db.waitlist.findUnique({
          where: { email: input.email },
        });
        
        if (existingEntry) {
          return {
            success: false,
            message: "You're already on the waitlist! Check your email for confirmation.",
            emailSent: existingEntry.emailSent,
          };
        }
        
        // Send thank you email first
        const emailResult = await sendWaitlistThankYouEmail({
          email: input.email,
          employeeCount: input.employeeCount,
          hrisSystem: input.hrisSystem,
        });
        
        // Store in database
        const waitlistEntry = await ctx.db.waitlist.create({
          data: {
            email: input.email,
            employeeCount: input.employeeCount,
            hrisSystem: input.hrisSystem,
            emailSent: emailResult.success,
          },
        });
        
        console.log('Waitlist signup saved:', waitlistEntry.id);
        
        if (!emailResult.success) {
          console.warn('Email sending failed:', emailResult);
          // Don't fail the whole request if email fails
        }
        
        return {
          success: true,
          message: emailResult.success 
            ? "Successfully joined waitlist! Check your email for confirmation."
            : "Successfully joined waitlist! Email confirmation will be sent shortly.",
          emailSent: emailResult.success,
          id: waitlistEntry.id,
        };
      } catch (error) {
        console.error('Waitlist signup error:', error);
        
        // Check if it's a unique constraint error (duplicate email)
        if (error instanceof Error && error.message.includes('Unique constraint')) {
          return {
            success: false,
            message: "You're already on the waitlist!",
            emailSent: false,
          };
        }
        
        throw new Error('Failed to join waitlist. Please try again.');
      }
    }),
});