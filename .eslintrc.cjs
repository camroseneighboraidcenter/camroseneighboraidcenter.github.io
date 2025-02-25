module.exports = {
  env: {
    node: true,
    browser: true,
    es2022: true,
  },
  plugins: ["@typescript-eslint", "jsx-a11y"],
  extends: [
    "eslint:recommended",
    "plugin:astro/recommended",
    "plugin:astro/jsx-a11y-recommended",
    "plugin:markdown/recommended",
  ],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
        sourceType: "module",
      },
      env: {
        node: true,
        "astro/astro": true,
        es2020: true,
      },
      rules: {
        "astro/no-set-html-directive": "off", // Required for our markdown processing
        "astro/no-unused-css-selector": "off",
        "astro/prefer-class-list-directive": "warn",
        "astro/prefer-object-class-list": "warn",
        "astro/prefer-split-class-list": "warn",
        // Accessibility rules
        "jsx-a11y/heading-has-content": "error",
        "jsx-a11y/html-has-lang": "error",
        "jsx-a11y/no-redundant-roles": "error",
        "jsx-a11y/anchor-has-content": "error",
        "jsx-a11y/aria-props": "error",
        "jsx-a11y/aria-proptypes": "error",
        "jsx-a11y/aria-unsupported-elements": "error",
        "jsx-a11y/click-events-have-key-events": "error",
        "jsx-a11y/no-static-element-interactions": "error",
        "jsx-a11y/role-has-required-aria-props": "error",
        "jsx-a11y/role-supports-aria-props": "error",
        "jsx-a11y/tabindex-no-positive": "error",
        // TypeScript rules
        "@typescript-eslint/no-unused-vars": "warn",
      },
    },
    {
      files: ["**/*.astro/*.js", "*.astro/*.js"],
      env: {
        browser: true,
        es2020: true,
      },
      parserOptions: {
        sourceType: "module",
      },
    },
    {
      files: ["**/*.astro/*.ts", "*.astro/*.ts"],
      env: {
        browser: true,
        es2020: true,
      },
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        project: null,
      },
    },
    {
      files: ["*.mjs", "*.js"],
      env: {
        node: true,
        es2020: true,
      },
      parserOptions: {
        sourceType: "module",
        ecmaVersion: 2020,
      },
    },
    {
      files: ["*.cjs"],
      env: {
        node: true,
      },
      parserOptions: {
        sourceType: "script",
        ecmaVersion: 2020,
      },
    },
  ],
};
