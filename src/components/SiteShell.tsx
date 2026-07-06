import type { ReactNode } from "react";
import SiteBackground from "@/components/SiteBackground";

type SiteShellProps = {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
};

export default function SiteShell({ children, header, footer }: SiteShellProps) {
  return (
    <div className="min-h-dvh bg-zinc-950 text-zinc-100">
      <SiteBackground />
      {header}
      <main>{children}</main>
      {footer}
    </div>
  );
}

