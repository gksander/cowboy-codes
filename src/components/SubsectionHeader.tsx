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
      <h3 className="font-bold text-xl mb-1">{children}</h3>
      {subtitle && <p className="mb-6 text-sm text-gray-700">{subtitle}</p>}
    </div>
  );
}
