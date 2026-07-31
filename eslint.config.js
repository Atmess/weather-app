import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
// 1. Add this import at the very top:
import eslintConfigPrettier from "eslint-config-prettier";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser } 
  },
  eslintConfigPrettier, 
]);
