module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    "sourceType": "module",
    "allowImportExportEverywhere": false,
    "codeFrame": false
  },
  extends: [
    "react-app",
    "prettier",
    "prettier/react",
    "plugin:jsx-a11y/recommended",
  ],
  rules: {
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
  ]
};
