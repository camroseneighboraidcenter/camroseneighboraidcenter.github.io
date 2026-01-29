/* eslint-env node */
/**
 * Lighthouse CI Configuration
 * Configures automated Lighthouse audits for CI/CD pipelines.
 */
module.exports = {
  ci: {
    collect: {
      url: [
        "http://localhost:4321/",
        "http://localhost:4321/about",
        "http://localhost:4321/contact",
        "http://localhost:4321/donate",
        "http://localhost:4321/programs",
        "http://localhost:4321/programs/food-bank-services",
        "http://localhost:4321/programs/food-for-kids",
        "http://localhost:4321/programs/marthas-table",
        "http://localhost:4321/programs/medical-transportation",
        "http://localhost:4321/programs/emergency-financial-assistance",
        "http://localhost:4321/programs/referral-services",
      ],
      startServerCommand: "npm run preview",
      startServerReadyPattern: "Local",
      startServerReadyTimeout: 30000,
      numberOfRuns: 3,
      settings: {
        preset: "desktop",
        throttling: {
          cpuSlowdownMultiplier: 1,
        },
      },
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.7 }],
        "categories:accessibility": ["error", { minScore: 0.95 }],
        "categories:best-practices": ["warn", { minScore: 0.9 }],
        "categories:seo": ["error", { minScore: 0.9 }],
        "color-contrast": "error",
        "html-has-lang": "error",
        "html-lang-valid": "error",
        "meta-description": "error",
        "document-title": "error",
        "image-alt": "error",
        "link-name": "error",
        "button-name": "error",
        "bypass": "error",
        "heading-order": "warn",
        "landmark-one-main": "error",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
