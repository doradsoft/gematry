import eslint from '@eslint/js';
import tseslint from "typescript-eslint";
import eslintPluginPrettier from "eslint-plugin-prettier";


export default tseslint.config(
  {
    plugins: {
      ['typescript-eslint']: tseslint,
      ['prettier']: eslintPluginPrettier,
    },
  },
  {
    ignores: ["**/dist/*", "**/lib/*", "**/node_modules/*"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
);
