import { ContentContainer } from "./ContentContainer";
import { FaGithub } from "./icons/FaGithub";
import { FaLinkedIn } from "./icons/FaLinkedIn";
import type { ComponentChildren } from "preact";

export function Header({ children }: { children?: ComponentChildren }) {
  return (
    <div class="isolate">
      <ContentContainer class="flex justify-between p-5 text-gray-700">
        <a href="/" class="inline-block font-bold text-lg text-gradient">
          gksander
        </a>
        <div class="flex gap-4 items-center">
          {SOCIAL_LINKS.map((link) => (
            <a
              href={link.href}
              key={link.href}
              aria-label={`Link to social profile`}
              target="_blank"
              rel="noreferrer noopener"
              class="hover:text-primary-600 transition-colors duration-150"
            >
              <link.icon className="w-7 h-7" />
            </a>
          ))}
          <a
            href="/blog"
            class="border-2 rounded border-primary-800 px-4 py-1 text-primary-800"
          >
            Blog
          </a>
        </div>
      </ContentContainer>
      {children}
    </div>
  );
}

const SOCIAL_LINKS = [
  { icon: FaGithub, href: "https://github.com/gksander" },
  {
    icon: FaLinkedIn,
    href: "https://linkedin.com/in/gksander",
  },
];
