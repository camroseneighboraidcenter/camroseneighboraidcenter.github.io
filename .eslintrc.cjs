module.exports = {
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
        "jsx-a11y/heading-has-content": "warn",
        "jsx-a11y/html-has-lang": "error",
        "jsx-a11y/no-redundant-roles": "error",
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
  ],
};
