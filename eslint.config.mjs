import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import prettierConfig from "eslint-config-prettier";

export default [
	js.configs.recommended,
	prettierConfig,
	{
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
				ecmaFeatures: { jsx: true },
			},
			globals: {
				window: "readonly",
				document: "readonly",
				navigator: "readonly",
				console: "readonly",
				process: "readonly",
				setTimeout: "readonly",
				clearTimeout: "readonly",
				setInterval: "readonly",
				clearInterval: "readonly",
			},
		},
		plugins: {
			"@typescript-eslint": tsPlugin,
			"react-hooks": reactHooksPlugin,
		},
		rules: {
			...tsPlugin.configs.recommended.rules,
			...reactHooksPlugin.configs.recommended.rules,
			"@typescript-eslint/no-explicit-any": "warn",
		},
	},
	{
		ignores: [".next/**", "node_modules/**"],
	},
];
