import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  variant = "tint",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "tint" | "outline" | "solid";
}) {
  const variants = {
    tint: "bg-primary-tint text-primary-darker border border-primary-tint-strong",
    outline: "border border-border-strong text-muted-foreground",
    solid: "bg-primary text-white",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
