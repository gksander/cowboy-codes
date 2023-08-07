import { ContentContainer } from "./ContentContainer";
import { FaGithub } from "./icons/FaGithub";
import { FaLinkedIn } from "./icons/FaLinkedIn";
import clsx from "clsx";

export function Header({ isFat = false }: { isFat?: boolean }) {
  return (
    <nav>
      <ContentContainer
        class="flex justify-between p-5 text-gray-700 dark:text-gray-300"
        isFat={isFat}
      >
        <a href="/" class="inline-block font-bold text-lg text-gradient">
          gksander
        </a>
        <div class="flex gap-4 md:gap-6 items-center">
          <a
            href="/blog"
            className={clsx(
              "font-medium rounded px-4 py-1 relative overflow-hidden before:bg-primary-gradient before:opacity-0 before:absolute before:inset-0 before:z-[-1]  ",
              "bg-gray-50 dark:bg-gray-700",
              "hover:before:opacity-100 hover:bg-opacity-0 hover:text-white",
              "transition-all duration-150",
            )}
          >
            Blog
          </a>
          {SOCIAL_LINKS.map((link) => (
            <a
              href={link.href}
              key={link.href}
              aria-label={`Link to social profile`}
              target="_blank"
              rel="noreferrer noopener"
              class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-150"
            >
              <link.icon className="w-7 h-7" />
            </a>
          ))}
        </div>
      </ContentContainer>
    </nav>
  );
}

const SOCIAL_LINKS = [
  { icon: FaGithub, href: "https://github.com/gksander" },
  {
    icon: FaLinkedIn,
    href: "https://linkedin.com/in/gksander",
  },
];
