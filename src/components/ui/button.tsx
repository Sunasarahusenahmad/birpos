import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

const variants: Record<NonNullable<ButtonBaseProps["variant"]>, string> = {
  primary:
    "bg-primary text-white shadow-[0_1px_0_0_rgb(255_255_255_/_0.15)_inset] hover:bg-primary-dark active:bg-primary-darker",
  secondary:
    "bg-surface-sunken text-foreground hover:bg-border/60 border border-border",
  outline:
    "border border-border-strong text-foreground hover:border-primary hover:text-primary-darker bg-white",
  ghost: "text-foreground hover:bg-surface-muted",
};

const sizes: Record<NonNullable<ButtonBaseProps["size"]>, string> = {
  sm: "text-sm px-3.5 py-2 gap-1.5 rounded-[var(--radius-sm)]",
  md: "text-sm px-5 py-2.5 gap-2 rounded-[var(--radius-md)]",
  lg: "text-base px-6 py-3.5 gap-2 rounded-[var(--radius-md)]",
};

const base =
  "inline-flex items-center justify-center font-medium transition-all duration-200 whitespace-nowrap disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none";

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonBaseProps & { href: string } & Omit<
    React.ComponentProps<typeof Link>,
    "href" | "className"
  >) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
