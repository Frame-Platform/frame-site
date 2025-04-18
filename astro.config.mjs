// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import studiocmsUi from "@studiocms/ui";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Frame",
      customCss: ["./src/styles/global.css"],
      logo: {
        src: "./src/assets/frame-logo.svg",
      },
      components: {
        Footer: "./src/components/Footer.astro",
        Header: "./src/components/Header.astro",
        MobileMenuFooter: "./src/components/MobileMenuFooter.astro",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/UntitledCapstoneProj",
        },
        {
          icon: "linkedin",
          label: "LinkedIn",
          href: "https://www.linkedin.com/company/frame-platform/about/",
        },
      ],
      sidebar: [
        {
          label: "Case Study",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Introduction", slug: "case-study/introduction" },
            {
              label: "The Challenge of Organizing Images",
              slug: "case-study/background",
            },
            {
              label: "Building an Image Search System",
              slug: "case-study/building-image-search",
            },
            {
              label: "Introducing Frame",
              slug: "case-study/introducing-frame",
            },
            {
              label: "Frame’s Architecture",
              slug: "case-study/architecture-overview",
            },
            {
              label: "Design Decisions",
              slug: "case-study/design-decisions",
            },
            {
              label: "Conclusion",
              slug: "case-study/conclusion",
            },
          ],
        },
        {
          label: "Documentation",
          items: [
            { label: "Deploying Frame", slug: "documentation/deployment" },
            {
              label: "Using the Frame SDK",
              slug: "documentation/sdk",
            },
            {
              label: "API",
              slug: "documentation/api",
            },
          ],
        },
      ],
    }),
    studiocmsUi(),
  ],
});
