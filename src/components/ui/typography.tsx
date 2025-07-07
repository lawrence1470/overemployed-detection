import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "~/lib/utils";

const headingVariants = cva("font-semibold text-gray-50 tracking-tight", {
	variants: {
		variant: {
			h1: "scroll-m-20 font-extrabold text-4xl tracking-tight lg:text-5xl",
			h2: "scroll-m-20 border-gray-800 border-b pb-2 font-semibold text-3xl tracking-tight first:mt-0",
			h3: "scroll-m-20 font-semibold text-2xl tracking-tight",
			h4: "scroll-m-20 font-semibold text-xl tracking-tight",
			h5: "scroll-m-20 font-semibold text-lg tracking-tight",
			h6: "scroll-m-20 font-semibold text-base tracking-tight",
		},
	},
	defaultVariants: {
		variant: "h1",
	},
});

const textVariants = cva("text-gray-300", {
	variants: {
		variant: {
			default: "text-base leading-7",
			large: "font-medium text-lg leading-7",
			small: "font-medium text-sm leading-6",
			muted: "text-gray-500 text-sm",
			lead: "text-gray-200 text-xl leading-8",
			subtle: "text-gray-400 text-sm",
			code: "relative rounded bg-gray-900 px-[0.3rem] py-[0.2rem] font-mono font-semibold text-gray-300 text-sm",
			link: "cursor-pointer text-primary-400 underline-offset-4 hover:underline",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

export interface HeadingProps
	extends React.HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof headingVariants> {
	asChild?: boolean;
}

export interface TextProps
	extends React.HTMLAttributes<HTMLParagraphElement>,
		VariantProps<typeof textVariants> {
	asChild?: boolean;
}

const Heading = ({
	className,
	variant,
	asChild = false,
	...props
}: HeadingProps) => {
	const Comp = asChild ? "span" : variant || "h1";
	return (
		<Comp className={cn(headingVariants({ variant, className }))} {...props} />
	);
};

const Text = ({ className, variant, asChild = false, ...props }: TextProps) => {
	const Comp = asChild ? "span" : "p";
	return (
		<Comp className={cn(textVariants({ variant, className }))} {...props} />
	);
};

const Quote = ({
	className,
	...props
}: React.HTMLAttributes<HTMLQuoteElement>) => (
	<blockquote
		className={cn(
			"mt-6 border-primary-600 border-l-4 bg-gray-900/50 px-6 py-4 text-gray-300 italic",
			className,
		)}
		{...props}
	/>
);

const List = ({
	className,
	...props
}: React.HTMLAttributes<HTMLUListElement>) => (
	<ul
		className={cn("my-6 ml-6 list-disc text-gray-300 [&>li]:mt-2", className)}
		{...props}
	/>
);

const InlineCode = ({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) => (
	<code
		className={cn(
			"relative rounded border border-gray-800 bg-gray-900 px-[0.3rem] py-[0.2rem] font-mono font-semibold text-gray-300 text-sm",
			className,
		)}
		{...props}
	/>
);

const Badge = ({
	className,
	variant,
	...props
}: React.HTMLAttributes<HTMLDivElement> & {
	variant?:
		| "default"
		| "secondary"
		| "destructive"
		| "outline"
		| "success"
		| "warning";
}) => {
	const badgeVariants = cva(
		"inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
		{
			variants: {
				variant: {
					default:
						"border-transparent bg-primary-600 text-primary-50 hover:bg-primary-700",
					secondary:
						"border-transparent bg-gray-800 text-gray-300 hover:bg-gray-700",
					destructive:
						"border-transparent bg-red-600 text-red-50 hover:bg-red-700",
					outline: "border-gray-700 text-gray-300 hover:bg-gray-800",
					success:
						"border-transparent bg-green-600 text-green-50 hover:bg-green-700",
					warning:
						"border-transparent bg-orange-600 text-orange-50 hover:bg-orange-700",
				},
			},
			defaultVariants: {
				variant: "default",
			},
		},
	);

	return (
		<div className={cn(badgeVariants({ variant }), className)} {...props} />
	);
};

export {
	Heading,
	Text,
	Quote,
	List,
	InlineCode,
	Badge,
	headingVariants,
	textVariants,
};
