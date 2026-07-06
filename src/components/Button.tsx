import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-cyan-400/15 text-white shadow-glowCyan ring-1 ring-cyan-300/30 hover:bg-cyan-300/20",
  secondary:
    "bg-white/6 text-white/90 ring-1 ring-white/16 hover:bg-white/10 hover:text-white",
  ghost: "text-white/80 hover:bg-white/8 hover:text-white",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant };

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return <button className={cn(base, variants[variant], className)} {...props} />;
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: ButtonVariant };

export function ButtonLink({ className, variant = "primary", ...props }: ButtonLinkProps) {
  return <a className={cn(base, variants[variant], className)} {...props} />;
}

