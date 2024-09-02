const babelParser = require("@babel/eslint-parser")

module.exports = {
  languageOptions: {
    parser:  babelParser,
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      requireConfigFile: false,
      babelOptions: {
        presets: ['@babel/preset-typescript'],
      }
    },
  },
  rules: {
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
  ignores: [".config/*"],
  files: ["**/*.ts"]

};
