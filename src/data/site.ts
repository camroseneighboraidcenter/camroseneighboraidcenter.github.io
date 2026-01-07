/**
 * Site Configuration
 * Site-wide settings, API tokens, and metadata.
 * This file contains configuration that applies across the entire site.
 */

/**
 * Site metadata used in BaseLayout and SEO.
 */
export const siteConfig = {
  name: "Camrose Neighbor Aid Center",
  shortName: "Neighbor Aid",
  tagline: "Hands linked in Christ's name to meet the needs of others.",
  url: "https://camroseneighboraidcenter.ca",
  locale: "en_CA",
};

/**
 * Third-party API tokens and keys.
 * In a production environment with SSR, these should be environment variables.
 * For static sites, they are acceptable here but should be non-sensitive.
 */
export const apiTokens = {
  web3forms: "8e96c192-1da8-48b3-9df9-e4620106f482",
};

/**
 * Default images used across the site.
 */
export const defaultImages = {
  ogImage: "/images/og-image.jpg",
};
