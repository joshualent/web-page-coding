import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon-x.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://webpagecoding.joshualent.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "joshualent", // Usually your GitHub org/user name.
  projectName: "web-page-coding", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/joshualent/web-page-coding/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/social-card.jpg",
    navbar: {
      title: "Web Page Coding",
      logo: {
        alt: "Web Page Coding",
        src: "img/logo-wpc.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Index",
        },
        {
          href: "https://github.com/joshualent/web-page-coding",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Coding tools",
          items: [
            {
              label: "HTML Validator",
              href: "https://validator.w3.org/",
            },
            {
              label: "Online Code Editor",
              href: "https://codepen.io/pen/",
            },
          ],
        },
        {
          title: "HTML References",
          items: [
            {
              label: "W3Schools",
              to: "https://www.w3schools.com/html/default.asp",
            },
            {
              label: "MDN Web Docs",
              to: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            },
          ],
        },
        {
          title: "Further Learning",
          items: [
            {
              label: "Learn HTML - YouTube",
              href: "https://www.youtube.com/watch?v=kUMe1FH4CHE",
            },
            {
              label: "freeCodeCamp",
              href: "https://www.freecodecamp.org/learn",
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} Joshua Lent in partnership with KVCC`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
