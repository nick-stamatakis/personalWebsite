import { ReactNode } from "react";

export function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-5 first:pt-0">
      <h2 className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}
