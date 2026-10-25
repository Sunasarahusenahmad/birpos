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
        src="/brand/logo/birstock-logo.svg"
        alt="BirStock"
        width={604}
        height={100}
        priority
        className={cn("h-7 w-auto sm:h-8 object-contain", imageClassName, wordmarkClassName)}
      />
    </Link>
  );
}

