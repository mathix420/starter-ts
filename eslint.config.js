import prettierConfig from "eslint-config-prettier";
import prettier from "eslint-plugin-prettier";
import tseslint from "typescript-eslint";
import eslint from "@eslint/js";

export default [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    prettierConfig,
    {
        files: ["**/*.ts"],
        plugins: {
            prettier,
        },
        rules: {
            "prettier/prettier": "error",
        },
    },
];
