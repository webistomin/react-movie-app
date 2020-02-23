module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "ecmaVersion": 2018,
    ecmaFeatures: {
      jsx: true
    },
    "sourceType": "module",
    "allowImportExportEverywhere": false,
    "codeFrame": false,
  },
  extends: [
    "react-app",
    "prettier",
    "prettier/react",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/interface-name-prefix" : "off",
    "prettier/prettier": [
      "error",
      {
        "printWidth": 120,
        "tabWidth": 2,
        "useTabs": false,
        "semi": true,
        "singleQuote": true,
        "jsxSingleQuote": true,
        "trailingComma": "es5",
        "bracketSpacing": true,
        "jsxBracketSameLine": true,
        "arrowParens": "always",
        "requirePragma": false,
        "insertPragma": false,
        "proseWrap": "never",
      }
    ],
  },
  plugins: [
    "jsx-a11y",
    "prettier",
    "@typescript-eslint",
    "react-hooks"
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
};
