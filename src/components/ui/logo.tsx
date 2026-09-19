import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  wordmarkClassName,
}: {
  className?: string;
  wordmarkClassName?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="BirStock home"
      className={cn("group inline-flex items-center", className)}
    >
      <span
        className={cn(
          "font-display text-[1.45rem] font-extrabold tracking-tight text-foreground",
          wordmarkClassName
        )}
      >
        Bir<span className="text-primary">Stock</span>
      </span>
    </Link>
  );
}
