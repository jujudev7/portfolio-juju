import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const Section = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <section className={cn("mx-auto max-w-5xl", props.className)}>
      {props.children}
    </section>
  );
};
