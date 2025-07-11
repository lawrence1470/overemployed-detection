"use client";

import { Check, Mail, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { HoverBorderGradient } from "~/components/ui/hover-border-gradient";
import { getComponentClasses } from "~/lib/design-system";
import { cn } from "~/lib/utils";

interface WaitlistSuccessModalProps {
	isOpen: boolean;
	onClose: () => void;
	email: string;
	isExistingUser?: boolean;
}

export function WaitlistSuccessModal({
	isOpen,
	onClose,
	email,
	isExistingUser = false,
}: WaitlistSuccessModalProps) {
	const handleEarlyAccess = () => {
		// Store form data in sessionStorage for the payment page
		if (typeof window !== "undefined") {
			window.location.href = "/early-access";
		}
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className="fixed inset-0 z-50 flex items-center justify-center p-4"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					style={{ alignItems: "center", justifyContent: "center" }}
				>
					{/* Backdrop */}
					<motion.div
						className="absolute inset-0 bg-black/80 backdrop-blur-sm"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
					/>

					{/* Modal Content */}
					<motion.div
						className="relative w-full max-w-sm rounded-xl border border-gray-700/50 bg-gray-900/95 p-4 sm:p-6 shadow-2xl backdrop-blur-xl"
						initial={{ opacity: 0, scale: 0.95, y: 10 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.95, y: 10 }}
						transition={{
							duration: 0.3,
							type: "spring",
							stiffness: 400,
							damping: 25,
						}}
					>
						{/* Close Button */}
						<button
							onClick={onClose}
							className="absolute top-3 right-3 text-gray-500 transition-colors hover:text-white"
						>
							<X className="h-4 w-4" />
						</button>

						{/* Success Animation */}
						<div className="mb-3 sm:mb-4 text-center">
							<motion.div
								className="mx-auto mb-2 sm:mb-3 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-green-500"
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{ delay: 0.1, type: "spring", stiffness: 400 }}
							>
								<Check className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
							</motion.div>

							<motion.h2
								className="mb-0 font-semibold text-white text-lg sm:text-xl"
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2, duration: 0.3 }}
							>
								{isExistingUser
									? "You're already on the list!"
									: "You're on the list!"}
							</motion.h2>
						</div>

						{/* Email Confirmation */}
						<motion.div
							className="mb-4 sm:mb-6 text-center"
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, duration: 0.3 }}
						>
							<p className="mb-1 sm:mb-2 text-gray-400 text-sm">
								{isExistingUser ? (
									<>
										You're already registered with{" "}
										<span className="font-medium text-white">{email}</span>
									</>
								) : (
									<>
										Confirmation sent to{" "}
										<span className="font-medium text-white">{email}</span>
									</>
								)}
							</p>
							<p className="text-gray-500 text-xs">
								{isExistingUser
									? "We'll notify you when we're ready!"
									: "Check your email for next steps"}
							</p>
						</motion.div>

						{/* Early Access Offer */}
						<motion.div
							className="space-y-2 sm:space-y-3"
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4, duration: 0.3 }}
						>
							<div className="text-center">
								<div className="mb-2 sm:mb-3 inline-flex items-center gap-1 rounded-full bg-purple-500/20 px-3 py-1 font-medium text-purple-300 text-xs">
									<Sparkles className="h-3 w-3" />
									Limited Offer
								</div>
								<h3 className="mb-1 sm:mb-2 font-semibold text-base sm:text-lg text-white">
									Priority Waitlist Position
								</h3>
								<p className="mb-3 sm:mb-4 text-gray-400 text-sm">
									We are only prioritizing serious customers, if you'd like early access please commit a $100 fully refundable deposit to bump you to the top of the list.
								</p>
							</div>

							<div className="space-y-2">
								<HoverBorderGradient
									as="button"
									onClick={handleEarlyAccess}
									containerClassName="w-full rounded-lg"
									className="w-full bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2.5 sm:py-3 font-semibold text-sm text-white transition-all duration-300 hover:from-purple-700 hover:to-blue-700"
								>
									Secure Priority Position - $100
								</HoverBorderGradient>

								<button
									onClick={onClose}
									className="w-full py-1.5 sm:py-2 text-gray-400 text-sm transition-colors hover:text-white"
								>
									No thanks, I'll wait
								</button>
							</div>
						</motion.div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
