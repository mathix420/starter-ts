/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
    plugins: ["@typescript-eslint", "prettier"],
    parser: "@typescript-eslint/parser",
    rules: {
        "prettier/prettier": "error",
    },
};
