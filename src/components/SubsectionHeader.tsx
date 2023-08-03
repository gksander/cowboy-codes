import type { ComponentChildren } from "preact";

export function SubsectionHeader({
  children,
  subtitle,
  className,
}: {
  subtitle?: string;
  className?: string;
  children: ComponentChildren;
}) {
  return (
    <div className={className}>
      <h3 className="font-bold text-xl mb-1 dark:text-gray-200">{children}</h3>
      {subtitle && (
        <p className="mb-6 text-sm text-gray-700 dark:text-gray-300">
          {subtitle}
        </p>
      )}
    </div>
  );
}
