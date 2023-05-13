/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  singleQuote: true,
  trailingComma: "es5",
  printWidth: 120,
};

module.exports = config;
