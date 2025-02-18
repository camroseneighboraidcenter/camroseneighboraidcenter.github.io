import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginHtml from "eslint-plugin-html";

export default [
  {
    ignores: ["node_modules", "dist", "build"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      prettier: eslintPluginPrettier,
      html: eslintPluginHtml,
    },
    rules: {
      "consistent-return": "error",
      curly: "error",
      eqeqeq: "error",
      "no-alert": "error",
      "no-console": "warn",
      "no-debugger": "warn",
      "no-else-return": "error",
      "no-multi-spaces": "error",
      "no-multiple-empty-lines": "error",
      "no-trailing-spaces": "error",
      "no-unused-vars": "error",
      "no-var": "error",
      "prefer-const": "error",
      "prettier/prettier": "warn",
    },
  },
];
