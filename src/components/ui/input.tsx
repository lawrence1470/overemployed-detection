"use client";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import * as React from "react";
import { cn } from "~/lib/utils";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	containerClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, containerClassName, type, ...props }, ref) => {
		const radius = 100; // change this to increase the radius of the hover effect
		const [visible, setVisible] = React.useState(false);

		const mouseX = useMotionValue(0);
		const mouseY = useMotionValue(0);

		function handleMouseMove({
			currentTarget,
			clientX,
			clientY,
		}: React.MouseEvent<HTMLDivElement>) {
			const { left, top } = currentTarget.getBoundingClientRect();

			mouseX.set(clientX - left);
			mouseY.set(clientY - top);
		}

		return (
			<motion.div
				style={{
					background: useMotionTemplate`
        radial-gradient(
          ${visible ? `${radius}px` : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--blue-500),
          transparent 80%
        )
      `,
				}}
				onMouseMove={handleMouseMove}
				onMouseEnter={() => setVisible(true)}
				onMouseLeave={() => setVisible(false)}
				className={cn(
					"group/input rounded-lg p-[2px] transition duration-300",
					containerClassName,
				)}
			>
				<input
					type={type}
					className={cn(
						"flex h-10 w-full rounded-md border border-gray-700 bg-gray-900/50 px-3 py-2 text-sm text-white transition duration-400 file:border-0 file:bg-transparent file:font-medium file:text-sm placeholder:text-gray-500 hover:border-gray-600 focus-visible:border-blue-500 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50",
						className,
					)}
					ref={ref}
					{...props}
				/>
			</motion.div>
		);
	},
);
Input.displayName = "Input";

export { Input };
