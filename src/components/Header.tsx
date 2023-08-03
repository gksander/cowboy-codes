import { ContentContainer } from "./ContentContainer";
import { FaGithub } from "./icons/FaGithub";
import { FaLinkedIn } from "./icons/FaLinkedIn";

export function Header() {
  return (
    <nav>
      <ContentContainer class="flex justify-between p-5 text-gray-700">
        <a href="/" class="inline-block font-bold text-lg text-gradient">
          gksander
        </a>
        <div class="flex gap-4 items-center">
          <a
            href="/blog"
            className="bg-gray-50 font-medium rounded border-primary-800 px-4 py-1 relative overflow-hidden before:bg-primary-gradient before:opacity-0 before:absolute before:inset-0 before:z-[-1] transition-all duration-150 hover:before:opacity-100 hover:bg-opacity-0"
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
              class="hover:text-primary-600 transition-colors duration-150"
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
