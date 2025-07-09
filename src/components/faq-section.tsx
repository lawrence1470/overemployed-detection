"use client";

import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { getComponentClasses } from "~/lib/design-system";
import { cn } from "~/lib/utils";

const faqs = [
	{
		question: "Will my data be shared with other companies?",
		answer:
			"We never share confidential data with other companies. When a match is found, subscribers will be notified of the at-risk employee, your company name, and contact details for your team to get in touch.",
	},
	{
		question: "Is VerifyHire free to use?",
		answer:
			"Yes! We have a forever free plan which allows you to integrate your HRIS, monitor your employees, and be notified if an employee is at-risk. We make money from paid subscribers which includes additional information on your at-risk hires and more signals.",
	},
];

export function FAQSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	// FAQ Schema for SEO
	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer,
			},
		})),
	};

	return (
		<section className="relative bg-gradient-to-b from-gray-950 to-black py-20 lg:py-32">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
			/>
			{/* Background Effects */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-transparent to-purple-950/20" />
				<motion.div
					className="absolute top-20 left-20 h-72 w-72 rounded-full bg-indigo-600/5 blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.05, 0.1, 0.05],
					}}
					transition={{
						duration: 8,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute right-20 bottom-20 h-96 w-96 rounded-full bg-purple-600/5 blur-3xl"
					animate={{
						scale: [1.2, 1, 1.2],
						opacity: [0.05, 0.1, 0.05],
					}}
					transition={{
						duration: 10,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
						delay: 2,
					}}
				/>
			</div>

			<div className={cn(getComponentClasses.container(), "relative z-10")}>
				{/* Section Header */}
				<motion.div
					className="mb-16 text-center lg:mb-20"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<motion.div
						className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium text-sm text-white/80 backdrop-blur-sm"
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
					>
						❓ Frequently Asked Questions
					</motion.div>

					<h2
						className={cn(
							getComponentClasses.heading("xl"),
							"mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-white",
						)}
					>
						Got Questions? We've Got Answers
					</h2>
				</motion.div>

				{/* FAQ Items */}
				<motion.div
					className="mx-auto max-w-4xl space-y-4"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3 }}
					viewport={{ once: true }}
				>
					{faqs.map((faq, index) => (
						<motion.div
							key={index}
							className="overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
							viewport={{ once: true }}
						>
							<motion.button
								className="group flex w-full items-center justify-between px-6 py-6 text-left transition-colors duration-200 hover:bg-white/5 lg:px-8"
								onClick={() => toggleFAQ(index)}
								whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
								whileTap={{ scale: 0.98 }}
							>
								<h3
									className={cn(
										getComponentClasses.heading("sm"),
										"pr-4 text-white transition-colors group-hover:text-white/90",
									)}
								>
									{faq.question}
								</h3>
								<motion.div
									animate={{ rotate: openIndex === index ? 180 : 0 }}
									transition={{ duration: 0.3, ease: "easeInOut" }}
									className="flex-shrink-0"
								>
									<svg
										className="h-5 w-5 text-white/70 transition-colors group-hover:text-white/90"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</motion.div>
							</motion.button>

							<AnimatePresence>
								{openIndex === index && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3, ease: "easeInOut" }}
										className="overflow-hidden"
									>
										<div className="border-white/10 border-t px-6 pb-6 lg:px-8">
											<motion.p
												className={cn(
													getComponentClasses.body("md"),
													"pt-4 text-white/80 leading-relaxed",
												)}
												initial={{ opacity: 0, y: 10 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ duration: 0.3, delay: 0.1 }}
											>
												{faq.answer}
											</motion.p>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</motion.div>

				{/* Contact Section */}
				<motion.div
					className="mt-16 text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					viewport={{ once: true }}
				>
					<p
						className={cn(getComponentClasses.body("md"), "mb-6 text-white/70")}
					>
						Still have questions? We're here to help.
					</p>
					<motion.a
						href="mailto:support@verifyhire.com"
						className="group inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/10"
						whileHover={{ scale: 1.02, y: -2 }}
						whileTap={{ scale: 0.98 }}
					>
						<span>Contact Support</span>
						<motion.svg
							className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</motion.svg>
					</motion.a>
				</motion.div>
			</div>
		</section>
	);
}
