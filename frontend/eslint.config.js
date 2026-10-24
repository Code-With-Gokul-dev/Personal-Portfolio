import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import reactDoctor from 'eslint-plugin-react-doctor';

export default defineConfig([
  globalIgnores(['dist']),
  {

    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-doctor/no-derived-state-effect': 'error',
      "react-doctor/no-unsafe-useeffect": 'error',
      "react-doctor/advanced-event-handlers-refs": 'error',
    },
    plugins:{
      'react-doctor': reactDoctor,
    }
  },
])
