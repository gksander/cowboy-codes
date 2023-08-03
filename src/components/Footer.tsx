import { ContentContainer } from "./ContentContainer";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer class="bg-gradient-to-b from-transparent to-secondary-50 dark:to-secondary-950 py-10">
      <ContentContainer class="">
        <p class="text-gray-600 dark:text-gray-300 text-sm">
          © {year} Grant Sander. All rights reserved.
        </p>
      </ContentContainer>
    </footer>
  );
}
