"use client";

import {
	ArrowRight,
	Building2,
	Check,
	ChevronDown,
	Mail,
	Users,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { HoverBorderGradient } from "~/components/ui/hover-border-gradient";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { WaitlistSuccessModal } from "~/components/waitlist-success-modal";
import { designSystem, getComponentClasses } from "~/lib/design-system";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/react";

interface FormData {
	email: string;
	employeeCount: string;
	hrisSystem: string;
	customHrisSystem: string;
}

const employeeCountOptions = [
	{ value: "1-10", label: "1-10 employees" },
	{ value: "11-50", label: "11-50 employees" },
	{ value: "51-200", label: "51-200 employees" },
	{ value: "201-500", label: "201-500 employees" },
	{ value: "501-1000", label: "501-1000 employees" },
	{ value: "1000+", label: "1000+ employees" },
];

const hrisSystems = [
	"Workday",
	"ADP",
	"BambooHR",
	"Paychex",
	"Paycom",
	"SAP SuccessFactors",
	"Oracle HCM",
	"Rippling",
	"Gusto",
	"JustWorks",
	"Deel",
	"Other",
];

export function WaitlistForm() {
	const [formData, setFormData] = useState<FormData>({
		email: "",
		employeeCount: "",
		hrisSystem: "",
		customHrisSystem: "",
	});
	const [showEmployeeDropdown, setShowEmployeeDropdown] = useState(false);
	const [showHrisDropdown, setShowHrisDropdown] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [showExistingUserModal, setShowExistingUserModal] = useState(false);

	const joinWaitlistMutation = api.waitlist.join.useMutation({
		onSuccess: (data) => {
			if (data.success) {
				// Store form data in sessionStorage and redirect to pricing page
				if (typeof window !== "undefined") {
					sessionStorage.setItem("waitlistFormData", JSON.stringify(formData));
					window.location.href = "/early-access";
				}
			} else {
				// Handle case where user is already on waitlist - show modal
				setShowExistingUserModal(true);
				setIsSubmitting(false);
			}
		},
		onError: (error) => {
			console.error("Failed to join waitlist:", error);
			alert("Failed to join waitlist. Please try again.");
			setIsSubmitting(false);
		},
	});

	const handleSubmitStep1 = async (e: React.FormEvent) => {
		e.preventDefault();
		
		// Check if all required fields are filled
		const isOtherSelected = formData.hrisSystem === "Other";
		const isCustomHrisRequired = isOtherSelected && !formData.customHrisSystem.trim();
		
		if (formData.email && formData.employeeCount && formData.hrisSystem && !isCustomHrisRequired) {
			// Save email to cookies for 30 days
			const expirationDate = new Date();
			expirationDate.setDate(expirationDate.getDate() + 30);
			document.cookie = `userEmail=${encodeURIComponent(formData.email)}; expires=${expirationDate.toUTCString()}; path=/`;
			
			// If "Other" is selected, use the custom HRIS system name
			const hrisSystemToSubmit = isOtherSelected && formData.customHrisSystem
				? formData.customHrisSystem
				: formData.hrisSystem;

			setIsSubmitting(true);
			joinWaitlistMutation.mutate({
				email: formData.email,
				employeeCount: formData.employeeCount,
				hrisSystem: hrisSystemToSubmit,
			});
		}
	};

	const handleExistingUserModalClose = () => {
		setShowExistingUserModal(false);
	};

	return (
		<>
			{/* Modal for existing users */}
			<WaitlistSuccessModal
				isOpen={showExistingUserModal}
				onClose={handleExistingUserModalClose}
				email={formData.email}
				isExistingUser={true}
			/>

			<div className="mx-auto max-w-2xl px-4 sm:px-0">
				<AnimatePresence mode="wait">
					<motion.div
						key="waitlist-form"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.5 }}
					>
						<div>
							<div className="mb-6 text-center sm:mb-8">
								<h1
									className={cn(
										getComponentClasses.heading("lg"),
										"mb-3 text-white sm:mb-4 text-2xl sm:text-3xl lg:text-4xl",
									)}
								>
									VerifyHire is currently at capacity!
								</h1>
								<p
									className={cn(
										getComponentClasses.body("md"),
										"mx-auto max-w-xs sm:max-w-sm text-white/70 text-sm sm:text-base",
									)}
								>
									Join the waitlist and get notified when we're ready for new customers.
								</p>
							</div>

							<form onSubmit={handleSubmitStep1} className="space-y-3 sm:space-y-4">
								<div className="space-y-1 sm:space-y-1.5">
									<Label htmlFor="email" className="text-white/90 text-sm">
										Work Email
									</Label>
									<Input
										id="email"
										type="email"
										placeholder="you@company.com"
										value={formData.email}
										onChange={(e) =>
											setFormData({ ...formData, email: e.target.value })
										}
										containerClassName="w-full"
										className="border-gray-700 bg-gray-900/50 text-white placeholder:text-gray-500 h-10 sm:h-11"
										required
									/>
								</div>

								<div className="space-y-1 sm:space-y-1.5">
									<Label htmlFor="employeeCount" className="text-white/90 text-sm">
										Company Size
									</Label>
									<div className="relative">
										<button
											type="button"
											onClick={() =>
												setShowEmployeeDropdown(!showEmployeeDropdown)
											}
											className={cn(
												"flex w-full items-center justify-between",
												"border border-gray-700 bg-gray-900/50 text-white",
												"rounded-md px-3 py-2 text-sm h-10 sm:h-11",
												"transition-colors hover:bg-gray-800/50",
												formData.employeeCount ? "text-white" : "text-gray-500",
											)}
										>
											<span className="flex items-center gap-2">
												<Users className="h-4 w-4" />
												{formData.employeeCount || "Select employee count"}
											</span>
											<ChevronDown
												className={cn(
													"h-4 w-4 transition-transform",
													showEmployeeDropdown && "rotate-180",
												)}
											/>
										</button>

										<AnimatePresence>
											{showEmployeeDropdown && (
												<motion.div
													initial={{ opacity: 0, y: -10 }}
													animate={{ opacity: 1, y: 0 }}
													exit={{ opacity: 0, y: -10 }}
													className="absolute z-50 mt-2 w-full overflow-hidden rounded-md border border-gray-700 bg-gray-900 shadow-xl backdrop-blur-sm"
												>
													{employeeCountOptions.map((option) => (
														<button
															key={option.value}
															type="button"
															onClick={() => {
																setFormData({
																	...formData,
																	employeeCount: option.label,
																});
																setShowEmployeeDropdown(false);
															}}
															className={cn(
																"w-full px-3 py-2 text-left text-sm text-white",
																"transition-colors hover:bg-gray-800/80 hover:text-white",
																formData.employeeCount === option.label &&
																	"bg-gray-700 text-white",
															)}
														>
															{option.label}
														</button>
													))}
												</motion.div>
											)}
										</AnimatePresence>
									</div>
								</div>

								<div className="space-y-1 sm:space-y-1.5">
									<Label htmlFor="hrisSystem" className="text-white/90 text-sm">
										Current HRIS System
									</Label>
									<div className="relative">
										<button
											type="button"
											onClick={() => setShowHrisDropdown(!showHrisDropdown)}
											className={cn(
												"flex w-full items-center justify-between",
												"border border-gray-700 bg-gray-900/50 text-white",
												"rounded-md px-3 py-2 text-sm h-10 sm:h-11",
												"transition-colors hover:bg-gray-800/50",
												formData.hrisSystem ? "text-white" : "text-gray-500",
											)}
										>
											<span className="flex items-center gap-2">
												<Building2 className="h-4 w-4" />
												{formData.hrisSystem || "Select your HRIS"}
											</span>
											<ChevronDown
												className={cn(
													"h-4 w-4 transition-transform",
													showHrisDropdown && "rotate-180",
												)}
											/>
										</button>

										<AnimatePresence>
											{showHrisDropdown && (
												<motion.div
													initial={{ opacity: 0, y: -10 }}
													animate={{ opacity: 1, y: 0 }}
													exit={{ opacity: 0, y: -10 }}
													className="absolute z-50 mt-2 max-h-60 w-full overflow-hidden overflow-y-auto rounded-md border border-gray-700 bg-gray-900 shadow-xl backdrop-blur-sm"
												>
													{hrisSystems.map((system) => (
														<button
															key={system}
															type="button"
															onClick={() => {
																setFormData({
																	...formData,
																	hrisSystem: system,
																	// Clear custom HRIS field when selecting a different option
																	customHrisSystem: system === "Other" ? formData.customHrisSystem : "",
																});
																setShowHrisDropdown(false);
															}}
															className={cn(
																"w-full px-3 py-2 text-left text-sm text-white",
																"transition-colors hover:bg-gray-800/80 hover:text-white",
																formData.hrisSystem === system &&
																	"bg-gray-700 text-white",
															)}
														>
															{system}
														</button>
													))}
												</motion.div>
											)}
										</AnimatePresence>
									</div>
								</div>

								{/* Custom HRIS System Text Field - shown when "Other" is selected */}
								<AnimatePresence>
									{formData.hrisSystem === "Other" && (
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: "auto" }}
											exit={{ opacity: 0, height: 0 }}
											transition={{ duration: 0.3 }}
											className="space-y-1 sm:space-y-1.5"
										>
											<Label htmlFor="customHrisSystem" className="text-white/90 text-sm">
												Please specify your HRIS system
											</Label>
											<Input
												id="customHrisSystem"
												type="text"
												placeholder="e.g., Custom ERP, Proprietary System..."
												value={formData.customHrisSystem}
												onChange={(e) =>
													setFormData({ ...formData, customHrisSystem: e.target.value })
												}
												containerClassName="w-full"
												className="border-gray-700 bg-gray-900/50 text-white placeholder:text-gray-500 h-10 sm:h-11"
												required={formData.hrisSystem === "Other"}
											/>
										</motion.div>
									)}
								</AnimatePresence>

								<div className="pt-3 sm:pt-4">
									<button
										type="submit"
										disabled={isSubmitting}
										className="group relative w-full"
									>
										<HoverBorderGradient
											as="div"
											containerClassName="w-full rounded-xl"
											className={cn(
												"relative flex min-h-[48px] sm:min-h-[56px] w-full cursor-pointer items-center justify-center overflow-hidden bg-white px-6 sm:px-8 py-3 sm:py-5 font-semibold text-black transition-all duration-300 hover:bg-gray-100",
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
														<span className="text-gray-400">Joining...</span>
													</>
												) : (
													<>
														<span className="text-black">Get Started</span>
														<ArrowRight className="h-4 w-4 text-black transition-all duration-200 group-hover:translate-x-1" />
													</>
												)}
											</span>
										</HoverBorderGradient>
									</button>
								</div>
							</form>
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
		</>
	);
}
