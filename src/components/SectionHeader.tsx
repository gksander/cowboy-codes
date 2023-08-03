import type { ComponentChildren } from "preact";

export function SectionHeader({
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
      <h2 className="text-center font-bold text-2xl sm:text-3xl mb-2">
        {children}
      </h2>
      {subtitle && (
        <p className="text-gray-700 text-center text-lg">{subtitle}</p>
      )}
    </div>
  );
}
