import { z } from "zod";
import { sendContactFormEmail } from "~/lib/email";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const contactRouter = createTRPCRouter({
	submit: publicProcedure
		.input(
			z.object({
				name: z.string().min(1, "Name is required").max(100),
				email: z.string().email("Please enter a valid email address"),
				company: z.string().optional(),
				message: z
					.string()
					.min(10, "Message must be at least 10 characters")
					.max(2000),
			}),
		)
		.mutation(async ({ input }) => {
			try {
				// Send contact form email to support team
				const emailResult = await sendContactFormEmail({
					name: input.name,
					email: input.email,
					company: input.company,
					message: input.message,
				});

				if (!emailResult.success) {
					console.error("Failed to send contact email:", emailResult.error);
					throw new Error("Failed to send your message. Please try again.");
				}

				console.log("Contact form email sent successfully:", emailResult.data);

				return {
					success: true,
					message:
						"Thank you for contacting us! We'll get back to you within one business day.",
				};
			} catch (error) {
				console.error("Contact form submission error:", error);
				throw new Error("Failed to send your message. Please try again.");
			}
		}),
});
