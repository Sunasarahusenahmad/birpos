import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  imageClassName,
  wordmarkClassName,
}: {
  className?: string;
  imageClassName?: string;
  wordmarkClassName?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="BirStock home"
      className={cn("group inline-flex items-center transition-opacity hover:opacity-95", className)}
    >
      <Image
        src="/birstock-logo-transparent.png"
        alt="BirStock - Offline POS & Inventory Software"
        width={320}
        height={80}
        priority
        className={cn("h-8 w-auto sm:h-9 object-contain", imageClassName, wordmarkClassName)}
      />
    </Link>
  );
}

