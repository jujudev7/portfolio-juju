import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const Section = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <section className={cn("mx-auto w-3/5", props.className)}>
      {props.children}
    </section>
  );
};
