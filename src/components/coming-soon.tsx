"use client";

import { Eye, EyeOff, Lock } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { HoverBorderGradient } from "~/components/ui/hover-border-gradient";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";

interface ComingSoonProps {
	onBypass: () => void;
}

export function ComingSoon({ onBypass }: ComingSoonProps) {
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [isInvalid, setIsInvalid] = useState(false);
	const [attempts, setAttempts] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		// Simulate verification delay
		await new Promise((resolve) => setTimeout(resolve, 800));

		if (password === "catsarecool") {
			// Store bypass in sessionStorage so they don't need to re-enter
			sessionStorage.setItem("admin-bypass", "true");
			onBypass();
		} else {
			setIsInvalid(true);
			setAttempts((prev) => prev + 1);
			setPassword("");
			setIsLoading(false);

			// Reset invalid state after animation
			setTimeout(() => setIsInvalid(false), 500);
		}
	};

	return (
		<div className="relative min-h-screen overflow-hidden bg-black text-white">
			{/* Background Effects */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-black/80 to-purple-950/20" />
				<motion.div
					className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-600/5 blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.02, 0.05, 0.02],
					}}
					transition={{
						duration: 8,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-purple-600/5 blur-3xl"
					animate={{
						scale: [1.2, 1, 1.2],
						opacity: [0.02, 0.05, 0.02],
					}}
					transition={{
						duration: 10,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
					}}
				/>
			</div>

			{/* Content */}
			<div className="relative z-10 flex min-h-screen items-center justify-center px-4">
				<div className="w-full max-w-md">
					<motion.div
						className="mb-12 text-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						{/* Logo */}
						<motion.div
							className="mb-8 font-bold text-4xl"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							VerifyHire
						</motion.div>

						{/* Coming Soon Badge */}
						<motion.div
							className="mb-8 inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 font-medium text-orange-400 text-sm backdrop-blur-sm"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: 0.4 }}
						>
							🚀 Coming Soon
						</motion.div>

						<motion.h1
							className="mb-4 font-bold text-3xl lg:text-4xl"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
						>
							We're Building Something
							<br />
							<span className="text-orange-400">Revolutionary</span>
						</motion.h1>

						<motion.p
							className="mb-8 text-lg text-white/70"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.8 }}
						>
							The most advanced dual employment detection platform is coming
							soon.
						</motion.p>
					</motion.div>

					{/* Admin Access */}
					<motion.div
						className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 1 }}
					>
						<div className="mb-4 flex items-center gap-3">
							<Lock className="h-5 w-5 text-white/60" />
							<span className="font-medium text-white/80">Admin Access</span>
						</div>

						<form onSubmit={handleSubmit} className="space-y-4">
							<div className="relative">
								<Input
									type={showPassword ? "text" : "password"}
									placeholder="Enter admin password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className={cn(
										"border-white/20 bg-white/5 pr-12 text-white placeholder:text-white/40",
										isInvalid && "border-red-500/50 bg-red-500/5",
									)}
									containerClassName="w-full"
								/>
								<button
									type="button"
									onClick={() => setShowPassword(!showPassword)}
									className="-translate-y-1/2 absolute top-1/2 right-3 text-white/40 transition-colors hover:text-white/60"
								>
									{showPassword ? (
										<EyeOff className="h-4 w-4" />
									) : (
										<Eye className="h-4 w-4" />
									)}
								</button>
							</div>

							<button type="submit" className="w-full" disabled={isLoading}>
								<HoverBorderGradient
									as="div"
									containerClassName="w-full rounded-xl"
									className={cn(
										"w-full cursor-pointer bg-white/10 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-white/20",
										isLoading &&
											"cursor-not-allowed opacity-50 hover:bg-white/10",
									)}
								>
									{isLoading ? (
										<div className="flex items-center justify-center gap-2">
											<motion.div
												className="h-4 w-4 rounded-full border-2 border-white border-t-transparent"
												animate={{ rotate: 360 }}
												transition={{
													duration: 1,
													repeat: Number.POSITIVE_INFINITY,
													ease: "linear",
												}}
											/>
											Verifying...
										</div>
									) : (
										"Access Site"
									)}
								</HoverBorderGradient>
							</button>
						</form>

						<AnimatePresence>
							{isInvalid && (
								<motion.div
									className="mt-3 text-center text-red-400 text-sm"
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: 10 }}
									transition={{ duration: 0.3 }}
								>
									Invalid password. Try again.
									{attempts > 2 && (
										<div className="mt-1 text-white/40 text-xs">
											Hint: Felines are awesome
										</div>
									)}
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>

					{/* Footer */}
					<motion.div
						className="mt-8 text-center text-sm text-white/40"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 1.2 }}
					>
						© 2025 VerifyHire. Launching soon.
					</motion.div>
				</div>
			</div>
		</div>
	);
}
