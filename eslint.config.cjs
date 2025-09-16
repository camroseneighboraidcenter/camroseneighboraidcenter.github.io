/* eslint-env node */

const js = require("@eslint/js");
const pluginAstro = require("eslint-plugin-astro");
const eslintConfigPrettier = require("eslint-config-prettier");
const tseslint = require("typescript-eslint");

module.exports = [
  {
    ignores: [
      "node_modules/",
      "dist/",
      ".astro/",
      ".husky/",
      "public/",
      "**/.eslintrc.*",
    ],
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,
  ...(pluginAstro.configs && pluginAstro.configs["flat/recommended"]
    ? pluginAstro.configs["flat/recommended"]
    : []),
  ...(pluginAstro.configs && pluginAstro.configs["flat/jsx-a11y-recommended"]
    ? pluginAstro.configs["flat/jsx-a11y-recommended"]
    : []),

  eslintConfigPrettier,
  {
    files: ["**/*.astro/*.ts", "**/*.astro/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
    },
  },

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },

  {
    files: ["**/*.{js,jsx,ts,tsx,astro}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },

  {
    files: ["**/*.cjs", "eslint.config.*"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: {
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
      },
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "no-undef": "off",
    },
  },
];
