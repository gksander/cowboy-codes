import { FaExternalLink } from "@components/icons/FaExternalLink";
import type { ComponentChild } from "preact";

type DefinitionProps = {
  term: string;
  source?: {
    title: string;
    url: string;
  };
  children: ComponentChild;
};

export function Definition({ term, children, source }: DefinitionProps) {
  return (
    <div class="p-3 -ml-3 bg-gradient-to-tl from-gray-100 dark:from-gray-700 dark:to-30% via-transparent to-transparent rounded overflow-hidden not-prose flex flex-col gap-y-2">
      <div class="flex items-center justify-between text-sm">
        <span class="font-bold text-gray-300">{term}</span>
        {source && (
          <a
            href={source.url}
            target="_blank"
            rel="noreferrer"
            class="text-secondary-800 dark:text-secondary-300 flex items-center gap-x-1"
          >
            <span>source</span>
            <FaExternalLink className="w-2" />
          </a>
        )}
      </div>
      <div class="text-sm leading-6">{children}</div>
    </div>
  );
}
