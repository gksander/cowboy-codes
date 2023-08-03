import { ContentContainer } from "./ContentContainer";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer class="bg-gradient-to-b from-transparent to-primary-100 py-10">
      <ContentContainer class="">
        <p class="text-gray-600 text-sm">
          © {year} Grant Sander. All rights reserved.
        </p>
      </ContentContainer>
    </footer>
  );
}
