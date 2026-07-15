// https://docs.expo.dev/guides/using-eslint/

import pluginQuery from "@tanstack/eslint-plugin-query";
import { defineConfig, globalIgnores } from "eslint/config";
import expoConfig from "eslint-config-expo/flat.js";

export default defineConfig([
	globalIgnores(["dist/*"]),
	expoConfig,
	...pluginQuery.configs["flat/recommended-strict"],
]);
