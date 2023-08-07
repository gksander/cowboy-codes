import type { ComponentChildren } from "preact";
import clsx from "clsx";

export function ContentContainer({
  children,
  class: className,
  isFat = false,
}: {
  class?: string;
  children: ComponentChildren;
  isFat?: boolean;
}) {
  return (
    <div
      class={clsx(
        "container px-4 md:px-8",
        isFat ? "max-w-5xl" : "max-w-3xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
