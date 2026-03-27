import eslint from '@eslint/js'
import globals from 'globals'
import tslint from 'typescript-eslint'
import prettierRecommend from 'eslint-plugin-prettier/recommended'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  eslint.configs.recommended,
  ...tslint.configs.recommended,
  prettierRecommend,

  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.es2025,
        ...globals.node,
      },
    },
  },

  {
    files: ['**/*.ts'],
    rules: {
      'prettier/prettier': 'error',

      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-unused-vars': 'off',
    },
  },
  {
    ignores: ['node_modules/', 'dist/'],
  },
])
