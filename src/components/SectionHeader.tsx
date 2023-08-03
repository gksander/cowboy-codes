import type { ComponentChildren } from "preact";
import clsx from "clsx";

export function SectionHeader({
  children,
  subtitle,
  align = "center",
  hasGradientTitle = false,
  className,
}: {
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  hasGradientTitle?: boolean;
  children: ComponentChildren;
}) {
  return (
    <div
      className={clsx(
        className,
        align === "left" ? "text-left" : "text-center",
      )}
    >
      <h2
        className={clsx(
          "font-bold text-2xl sm:text-3xl mb-2",
          hasGradientTitle ? "text-gradient" : null,
        )}
      >
        {children}
      </h2>
      {subtitle && <p className="text-gray-700 text-lg">{subtitle}</p>}
    </div>
  );
}
