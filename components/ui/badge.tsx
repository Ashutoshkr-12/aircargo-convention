import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-mono uppercase tracking-[0.14em] transition-colors",
  {
    variants: {
      variant: {
        default: "border-white/15 bg-white/5 text-white/80",
        signal: "border-[var(--signal)]/40 bg-[var(--signal)]/10 text-[var(--signal)]",
        outline: "border-[var(--ink)]/15 bg-transparent text-[var(--ink)]/70",
        sky: "border-[var(--sky)]/40 bg-[var(--sky)]/10 text-[var(--sky)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props} />
  );
}

export { Badge, badgeVariants };
