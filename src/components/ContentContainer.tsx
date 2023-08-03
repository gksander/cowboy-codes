import type { ComponentChildren } from "preact";
import clsx from "clsx";

export function ContentContainer({
  children,
  class: className,
}: {
  class?: string;
  children: ComponentChildren;
}) {
  return (
    <div class={clsx("container px-4 max-w-4xl", className)}>{children}</div>
  );
}
