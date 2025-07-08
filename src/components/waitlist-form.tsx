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
import { WaitlistSuccessModal } from "~/components/waitlist-success-modal";

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
  const [formData, setFormData] = useState<FormData>({
    email: "",
    employeeCount: "",
    hrisSystem: "",
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
      
      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
        <motion.div
          key="waitlist-form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div className="text-center mb-8">
              <h1 className={cn(getComponentClasses.heading("lg"), "text-white mb-4")}>
                VerifyHire is currently at capacity!
              </h1>
              <p className={cn(getComponentClasses.body("md"), "text-white/70 max-w-sm mx-auto")}>
                Join the waitlist and be the first to know when we're ready for new customers. Plus, get exclusive early access options.
              </p>
            </div>

            <form onSubmit={handleSubmitStep1} className="space-y-4">
              <div className="space-y-1.5">
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

              <div className="space-y-1.5">
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
                        className="absolute z-50 w-full mt-2 bg-gray-900 border border-gray-700 rounded-md shadow-xl backdrop-blur-sm overflow-hidden"
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
                              "w-full text-left px-3 py-2 text-sm text-white",
                              "hover:bg-gray-800/80 hover:text-white transition-colors",
                              formData.employeeCount === option.label && "bg-gray-700 text-white"
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

              <div className="space-y-1.5">
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
                        className="absolute z-50 w-full mt-2 bg-gray-900 border border-gray-700 rounded-md shadow-xl backdrop-blur-sm overflow-hidden max-h-60 overflow-y-auto"
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
                              "w-full text-left px-3 py-2 text-sm text-white",
                              "hover:bg-gray-800/80 hover:text-white transition-colors",
                              formData.hrisSystem === system && "bg-gray-700 text-white"
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

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative group"
                >
                  <HoverBorderGradient
                    as="div"
                    containerClassName="w-full rounded-xl"
                    className={cn(
                      "w-full bg-white text-black hover:bg-gray-100 px-8 py-5 font-semibold transition-all duration-300 cursor-pointer relative overflow-hidden flex items-center justify-center min-h-[56px]",
                      isSubmitting && "bg-gray-600/30 text-gray-500 cursor-not-allowed hover:bg-gray-600/30 border-gray-600/20"
                    )}
                  >
                    <span className="flex items-center justify-center gap-2 relative z-10 h-full leading-none">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          <span className="text-gray-400">Joining...</span>
                        </>
                      ) : (
                        <>
                          <span className="text-black">Join Waitlist</span>
                          <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-all duration-200" />
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