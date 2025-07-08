import { cn } from "~/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular" | "rounded";
  width?: string | number;
  height?: string | number;
  animation?: "pulse" | "wave" | "none";
}

export function Skeleton({
  className,
  variant = "rectangular",
  width,
  height,
  animation = "pulse",
  ...props
}: SkeletonProps) {
  const animationClasses = {
    pulse: "animate-pulse",
    wave: "animate-shimmer",
    none: "",
  };

  const variantClasses = {
    text: "rounded",
    circular: "rounded-full",
    rectangular: "rounded-none",
    rounded: "rounded-md",
  };

  return (
    <div
      className={cn(
        "bg-gray-800/50",
        animationClasses[animation],
        variantClasses[variant],
        className
      )}
      style={{
        width: width,
        height: height,
      }}
      {...props}
    />
  );
}

// Specific skeleton components for common use cases
export function SkeletonText({ className, lines = 3 }: { className?: string; lines?: number }) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          height="1rem"
          width={i === lines - 1 ? "80%" : "100%"}
        />
      ))}
    </div>
  );
}

export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-4 p-4", className)}>
      <Skeleton variant="rectangular" height="12rem" />
      <SkeletonText lines={2} />
      <div className="flex gap-2">
        <Skeleton variant="rounded" width="100px" height="32px" />
        <Skeleton variant="rounded" width="100px" height="32px" />
      </div>
    </div>
  );
}

export function SkeletonAvatar({ size = 40 }: { size?: number }) {
  return <Skeleton variant="circular" width={size} height={size} />;
}

// Form skeleton for waitlist
export function SkeletonForm({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="space-y-2">
        <Skeleton variant="text" width="100px" height="1rem" />
        <Skeleton variant="rounded" height="40px" />
      </div>
      <div className="space-y-2">
        <Skeleton variant="text" width="120px" height="1rem" />
        <Skeleton variant="rounded" height="40px" />
      </div>
      <div className="space-y-2">
        <Skeleton variant="text" width="140px" height="1rem" />
        <Skeleton variant="rounded" height="40px" />
      </div>
      <Skeleton variant="rounded" height="48px" className="w-full" />
    </div>
  );
}