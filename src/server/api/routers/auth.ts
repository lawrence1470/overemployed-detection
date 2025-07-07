import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { auth } from "~/server/auth";

export const authRouter = createTRPCRouter({
  signIn: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(8),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const result = await auth.api.signInEmail({
          body: {
            email: input.email,
            password: input.password,
          },
        });
        
        return {
          success: true,
          user: result.user,
          session: result.session,
        };
      } catch (error) {
        throw new Error("Invalid credentials");
      }
    }),

  signUp: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(8),
        name: z.string().min(2),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const result = await auth.api.signUpEmail({
          body: {
            email: input.email,
            password: input.password,
            name: input.name,
          },
        });
        
        return {
          success: true,
          user: result.user,
          session: result.session,
        };
      } catch (error) {
        throw new Error("Registration failed");
      }
    }),

  signOut: publicProcedure
    .mutation(async () => {
      try {
        await auth.api.signOut({
          headers: new Headers(),
        });
        
        return {
          success: true,
        };
      } catch (error) {
        throw new Error("Sign out failed");
      }
    }),

  getSession: publicProcedure
    .query(async ({ ctx }) => {
      try {
        const session = await auth.api.getSession({
          headers: ctx.headers,
        });
        
        return session;
      } catch (error) {
        return null;
      }
    }),
});