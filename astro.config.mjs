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
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/UntitledCapstoneProj",
        },
      ],
      sidebar: [
        {
          label: "Case Study",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Introduction", slug: "case-study/introduction" },
            { label: "Background", slug: "case-study/background" },
            {
              label: "Existing Solutions",
              slug: "case-study/existing-solutions",
            },
            {
              label: "Architecture Overview",
              slug: "case-study/architecture-overview",
            },
            {
              label: "Design Decisions & Tradeoffs",
              slug: "case-study/design-decisions",
            },
            {
              label: "Conclusion",
              slug: "case-study/conclusion",
            },
            {
              label: "Future Work",
              slug: "case-study/future-work",
            },
            {
              label: "References",
              slug: "case-study/references",
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
          ],
        },
      ],
    }),
    studiocmsUi(),
  ],
});
