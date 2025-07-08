"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { cn } from "~/lib/utils";
import { getComponentClasses, designSystem } from "~/lib/design-system";
import { HoverBorderGradient } from "~/components/ui/hover-border-gradient";
import { ArrowRight, Building2, Users, ChevronDown, Check, Mail } from "lucide-react";
import { api } from "~/trpc/react";

interface FormData {
  email: string;
  employeeCount: string;
  hrisSystem: string;
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
  "Other",
];

export function WaitlistForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    employeeCount: "",
    hrisSystem: "",
  });
  const [showEmployeeDropdown, setShowEmployeeDropdown] = useState(false);
  const [showHrisDropdown, setShowHrisDropdown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const joinWaitlistMutation = api.waitlist.join.useMutation({
    onSuccess: (data) => {
      if (data.success) {
        setStep(2);
      } else {
        // Handle case where user is already on waitlist
        alert(data.message);
      }
      setIsSubmitting(false);
    },
    onError: (error) => {
      console.error('Failed to join waitlist:', error);
      alert('Failed to join waitlist. Please try again.');
      setIsSubmitting(false);
    },
  });

  const handleSubmitStep1 = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.employeeCount && formData.hrisSystem) {
      setIsSubmitting(true);
      joinWaitlistMutation.mutate({
        email: formData.email,
        employeeCount: formData.employeeCount,
        hrisSystem: formData.hrisSystem,
      });
    }
  };

  const handleSkipPayment = () => {
    // Handle regular waitlist signup
    console.log("Regular waitlist signup:", formData);
    // Redirect to success or show success message
  };

  const handlePaymentFlow = () => {
    // Handle early access payment flow
    console.log("Early access payment:", formData);
    // Store form data in sessionStorage for the payment page
    if (typeof window !== "undefined") {
      sessionStorage.setItem("waitlistFormData", JSON.stringify(formData));
      window.location.href = "/early-access";
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {step === 1 ? (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h1 className={cn(designSystem.typography.display.md, "text-white mb-6")}>
                VerifyHire is currently at capacity!
              </h1>
              <p className={cn(getComponentClasses.body("lg"), "text-white/70 max-w-xl mx-auto")}>
                Join the waitlist and be the first to know when we're ready for new customers. Plus, get exclusive early access options.
              </p>
            </div>

            <form onSubmit={handleSubmitStep1} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/90">
                  Work Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  containerClassName="w-full"
                  className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="employeeCount" className="text-white/90">
                  Company Size
                </Label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowEmployeeDropdown(!showEmployeeDropdown)}
                    className={cn(
                      "w-full flex items-center justify-between",
                      "bg-gray-900/50 border border-gray-700 text-white",
                      "px-3 py-2 rounded-md text-sm",
                      "hover:bg-gray-800/50 transition-colors",
                      formData.employeeCount ? "text-white" : "text-gray-500"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {formData.employeeCount || "Select employee count"}
                    </span>
                    <ChevronDown className={cn("w-4 h-4 transition-transform", showEmployeeDropdown && "rotate-180")} />
                  </button>
                  
                  <AnimatePresence>
                    {showEmployeeDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-10 w-full mt-2 bg-gray-900 border border-gray-700 rounded-md shadow-lg overflow-hidden"
                      >
                        {employeeCountOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, employeeCount: option.label });
                              setShowEmployeeDropdown(false);
                            }}
                            className={cn(
                              "w-full text-left px-3 py-2 text-sm text-white/80",
                              "hover:bg-gray-800 hover:text-white transition-colors",
                              formData.employeeCount === option.label && "bg-gray-800 text-white"
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

              <div className="space-y-2">
                <Label htmlFor="hrisSystem" className="text-white/90">
                  Current HRIS System
                </Label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowHrisDropdown(!showHrisDropdown)}
                    className={cn(
                      "w-full flex items-center justify-between",
                      "bg-gray-900/50 border border-gray-700 text-white",
                      "px-3 py-2 rounded-md text-sm",
                      "hover:bg-gray-800/50 transition-colors",
                      formData.hrisSystem ? "text-white" : "text-gray-500"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      {formData.hrisSystem || "Select your HRIS"}
                    </span>
                    <ChevronDown className={cn("w-4 h-4 transition-transform", showHrisDropdown && "rotate-180")} />
                  </button>
                  
                  <AnimatePresence>
                    {showHrisDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-10 w-full mt-2 bg-gray-900 border border-gray-700 rounded-md shadow-lg overflow-hidden max-h-60 overflow-y-auto"
                      >
                        {hrisSystems.map((system) => (
                          <button
                            key={system}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, hrisSystem: system });
                              setShowHrisDropdown(false);
                            }}
                            className={cn(
                              "w-full text-left px-3 py-2 text-sm text-white/80",
                              "hover:bg-gray-800 hover:text-white transition-colors",
                              formData.hrisSystem === system && "bg-gray-800 text-white"
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

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.email || !formData.employeeCount || !formData.hrisSystem}
                  className="w-full relative group"
                >
                  <HoverBorderGradient
                    as="div"
                    containerClassName="w-full rounded-xl"
                    className={cn(
                      "w-full bg-white text-black hover:bg-gray-100 px-8 py-4 font-semibold transition-all duration-300 cursor-pointer",
                      (isSubmitting || !formData.email || !formData.employeeCount || !formData.hrisSystem) && "opacity-50 cursor-not-allowed"
                    )}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-4 h-4 border-2 border-black border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Joining...
                        </>
                      ) : (
                        <>
                          Join Waitlist
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </span>
                  </HoverBorderGradient>
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
            >
              <Check className="w-8 h-8 text-white" />
            </motion.div>

            <h2 className={cn(getComponentClasses.heading("xl"), "text-white mb-6")}>
              You're on the list!
            </h2>
            
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-2xl p-6 border border-green-500/20 mb-8">
              <div className="flex items-center gap-3 text-green-400 mb-3">
                <Mail className="w-5 h-5" />
                <span className="font-medium">Check your email!</span>
              </div>
              <p className={cn(getComponentClasses.body("md"), "text-white/80")}>
                We've sent a confirmation email to <span className="text-white font-medium">{formData.email}</span> with next steps and exclusive content.
              </p>
            </div>
            
            <p className={cn(getComponentClasses.body("lg"), "text-white/70 mb-12 max-w-lg mx-auto")}>
              We'll notify you when we're ready for new customers. In the meantime, explore the threat landscape.
            </p>

            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/20 mb-8">
              <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                Limited Offer
              </div>
              
              <h3 className={cn(getComponentClasses.heading("md"), "text-white mb-4")}>
                Skip the line with Early Access
              </h3>
              
              <p className={cn(getComponentClasses.body("md"), "text-white/70 mb-6")}>
                Get immediate access to VerifyHire and start protecting your company today. Limited spots available.
              </p>

              <div className="space-y-4">
                <HoverBorderGradient
                  as="button"
                  onClick={handlePaymentFlow}
                  containerClassName="w-full rounded-xl"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 px-8 py-4 font-semibold transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    Get Early Access - $499
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </HoverBorderGradient>

                <button
                  onClick={handleSkipPayment}
                  className="w-full text-white/50 hover:text-white/70 text-sm transition-colors"
                >
                  No thanks, I'll wait
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}