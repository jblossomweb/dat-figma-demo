import { defineConfig, globalIgnores } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      "@stylistic/indent": ["error", 2],
      "@stylistic/comma-dangle": ["error", "always-multiline"],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/eol-last": ["error", "always"],
      "no-restricted-syntax": [
        "error",
        {
          selector: "JSXElement[openingElement.name.name='Link'] JSXElement[openingElement.name.name='button']",
          message: "Do not nest a button inside a Link; style the Link itself as a button.",
        },
        {
          selector: "JSXElement[openingElement.name.name='Link'] > JSXExpressionContainer > Identifier[name='button']",
          message: "Do not render a button inside a Link; style the Link itself as a button.",
        },
        {
          selector: "JSXElement[openingElement.name.name='a'] JSXElement[openingElement.name.name='button']",
          message: "Do not nest a button inside an anchor; use one interactive element.",
        },
      ],
    },
  },
]);

export default eslintConfig;
