import type { ComponentChildren } from "preact";
import clsx from "clsx";

export function SectionHeader({
  children,
  subtitle,
  align = "center",
  hasGradientTitle = false,
  isLarge = false,
  className,
}: {
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  hasGradientTitle?: boolean;
  isLarge?: boolean;
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
          "font-bold mb-2",
          hasGradientTitle ? "text-gradient" : "dark:text-gray-200",
          isLarge
            ? "text-3xl md:text-6xl leading-norm"
            : "text-2xl sm:text-3xl",
        )}
      >
        {children}
      </h2>
      {subtitle && (
        <p className="text-gray-700 dark:text-gray-300 text-lg">{subtitle}</p>
      )}
    </div>
  );
}
