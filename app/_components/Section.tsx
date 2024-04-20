import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const Section = (props: PropsWithChildren<{className?:string}>) => {
    return (
        <section className={cn("max-w-80 px-4 m-auto", props.className)}>{props.children}</section>
    )
}