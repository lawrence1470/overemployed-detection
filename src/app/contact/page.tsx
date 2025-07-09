"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { HoverBorderGradient } from "~/components/ui/hover-border-gradient";
import { getComponentClasses } from "~/lib/design-system";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/react";

const contactFormSchema = z.object({
	name: z.string().min(1, "Name is required").max(100),
	email: z.string().email("Please enter a valid email address"),
	company: z.string().optional(),
	message: z
		.string()
		.min(10, "Message must be at least 10 characters")
		.max(2000),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactFormSchema),
	});

	const contactMutation = api.contact.submit.useMutation({
		onSuccess: () => {
			setIsSubmitted(true);
			reset();
		},
	});

	const onSubmit = async (data: ContactFormData) => {
		try {
			await contactMutation.mutateAsync(data);
		} catch (error) {
			console.error("Failed to submit contact form:", error);
		}
	};

	if (isSubmitted) {
		return (
			<div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-950 via-black to-gray-950 px-4">
				<motion.div
					className="w-full max-w-md text-center"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
						<motion.div
							className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500"
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
						>
							<svg
								className="h-8 w-8 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M5 13l4 4L19 7"
								/>
							</svg>
						</motion.div>
						<h1 className="mb-4 font-bold text-2xl text-white">
							Message Sent!
						</h1>
						<p className="mb-6 text-white/70">
							Thank you for contacting us. We'll get back to you within one
							business day.
						</p>
						<motion.a
							href="/"
							className={cn(
								"inline-flex items-center rounded-lg px-6 py-3",
								"border border-white/20 bg-white/10 text-white",
								"transition-all duration-200 hover:bg-white/20",
							)}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							← Back to Home
						</motion.a>
					</div>
				</motion.div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 px-4 py-20">
			<div className={cn(getComponentClasses.container(), "max-w-2xl")}>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="mb-12 text-center"
				>
					<h1
						className={cn(getComponentClasses.heading("xl"), "mb-6 text-white")}
					>
						Contact Us
					</h1>
					<p className={cn(getComponentClasses.body("lg"), "text-white/70")}>
						Have questions about VerifyHire? We'd love to hear from you.
						<br />
						We'll get back to you within one business day.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
				>
					<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
						<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
							<div>
								<label className="mb-2 block font-medium text-white">
									Name *
								</label>
								<input
									{...register("name")}
									type="text"
									className={cn(
										"w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3",
										"text-white placeholder-white/50 focus:border-white/40 focus:outline-none",
										"transition-colors duration-200",
										errors.name && "border-red-400",
									)}
									placeholder="Your full name"
								/>
								{errors.name && (
									<p className="mt-1 text-red-400 text-sm">
										{errors.name.message}
									</p>
								)}
							</div>

							<div>
								<label className="mb-2 block font-medium text-white">
									Email *
								</label>
								<input
									{...register("email")}
									type="email"
									className={cn(
										"w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3",
										"text-white placeholder-white/50 focus:border-white/40 focus:outline-none",
										"transition-colors duration-200",
										errors.email && "border-red-400",
									)}
									placeholder="your@email.com"
								/>
								{errors.email && (
									<p className="mt-1 text-red-400 text-sm">
										{errors.email.message}
									</p>
								)}
							</div>
						</div>

						<div>
							<label className="mb-2 block font-medium text-white">
								Company
							</label>
							<input
								{...register("company")}
								type="text"
								className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/50 transition-colors duration-200 focus:border-white/40 focus:outline-none"
								placeholder="Your company name (optional)"
							/>
						</div>

						<div>
							<label className="mb-2 block font-medium text-white">
								Message *
							</label>
							<textarea
								{...register("message")}
								rows={6}
								className={cn(
									"w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3",
									"text-white placeholder-white/50 focus:border-white/40 focus:outline-none",
									"resize-vertical transition-colors duration-200",
									errors.message && "border-red-400",
								)}
								placeholder="Tell us how we can help you..."
							/>
							{errors.message && (
								<p className="mt-1 text-red-400 text-sm">
									{errors.message.message}
								</p>
							)}
						</div>

						{contactMutation.error && (
							<div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4">
								<p className="text-red-400">{contactMutation.error.message}</p>
							</div>
						)}

						<div className="pt-4">
							<button
								type="submit"
								disabled={isSubmitting}
								className="group relative w-full"
							>
								<HoverBorderGradient
									as="div"
									containerClassName="w-full rounded-xl"
									className={cn(
										"relative flex min-h-[56px] w-full cursor-pointer items-center justify-center overflow-hidden bg-white px-8 py-5 font-semibold text-black transition-all duration-300 hover:bg-gray-100",
										isSubmitting &&
											"cursor-not-allowed opacity-50 hover:bg-gray-100",
									)}
								>
									<span className="relative z-10 flex h-full items-center justify-center gap-2 leading-none">
										{isSubmitting ? (
											<>
												<motion.div
													className="h-4 w-4 rounded-full border-2 border-gray-600 border-t-transparent"
													animate={{ rotate: 360 }}
													transition={{
														duration: 1,
														repeat: Number.POSITIVE_INFINITY,
														ease: "linear",
													}}
												/>
												<span className="text-gray-600">Sending...</span>
											</>
										) : (
											<>
												<span className="text-black">Send Message</span>
												<ArrowRight className="h-4 w-4 text-black transition-all duration-200 group-hover:translate-x-1" />
											</>
										)}
									</span>
								</HoverBorderGradient>
							</button>
						</div>
					</form>
				</motion.div>
			</div>
		</div>
	);
}
