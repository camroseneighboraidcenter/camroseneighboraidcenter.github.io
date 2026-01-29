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
      "**/.astro/**",
      ".husky/",
      "public/",
      "**/.eslintrc.*",
    ],
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,
  ...(pluginAstro.configs && pluginAstro.configs["flat/recommended"]
    ? pluginAstro.configs["flat/recommended"]
    : []),
  ...(pluginAstro.configs && pluginAstro.configs["flat/jsx-a11y-recommended"]
    ? pluginAstro.configs["flat/jsx-a11y-recommended"]
    : []),

  {
    files: ["**/*.{js,jsx,ts,tsx,astro}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },

  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
    },
  },

  {
    files: ["**/*.{js,jsx}"],
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },

  {
    files: ["**/*.cjs", "eslint.config.*"],
    languageOptions: {
      ecmaVersion: "latest",
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

  eslintConfigPrettier,
];
