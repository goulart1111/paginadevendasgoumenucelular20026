import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <div className="font-display text-xs font-semibold tracking-[0.26em] text-cyan-200/80">{eyebrow}</div>
      ) : null}
      <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">{title}</h2>
      {description ? <div className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">{description}</div> : null}
    </div>
  );
}

