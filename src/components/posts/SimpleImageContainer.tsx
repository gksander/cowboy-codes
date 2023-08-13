import type { ComponentChild } from "preact";

export const SimpleImageContainer = ({
  children,
}: {
  children: ComponentChild;
}) => (
  <div class="border dark:border-gray-700 w-fit rounded-lg overflow-hidden shadow-md mx-auto p-2">
    {children}
  </div>
);
