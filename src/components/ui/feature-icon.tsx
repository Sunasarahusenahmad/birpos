import {
  ScanBarcode,
  Boxes,
  BookUser,
  Truck,
  ReceiptText,
  CloudUpload,
  BarChart3,
  ShieldCheck,
  CalendarClock,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Feature } from "@/data/features";

const iconMap: Record<Feature["icon"], LucideIcon> = {
  billing: ScanBarcode,
  inventory: Boxes,
  khata: BookUser,
  supplier: Truck,
  gst: ReceiptText,
  backup: CloudUpload,
  reports: BarChart3,
  security: ShieldCheck,
  "financial-year": CalendarClock,
};

export function FeatureIcon({
  icon,
  className,
  iconClassName,
}: {
  icon: Feature["icon"];
  className?: string;
  iconClassName?: string;
}) {
  const Icon = iconMap[icon];
  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] bg-primary-tint text-primary-darker",
        className
      )}
    >
      <Icon className={cn("h-5 w-5", iconClassName)} strokeWidth={2} />
    </span>
  );
}
