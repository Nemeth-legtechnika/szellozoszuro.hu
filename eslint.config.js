import vitestPlugin from '@vitest/eslint-plugin'
import { configs as airbnbConfigs } from 'eslint-config-airbnb-extended/legacy'
import prettierConfig from 'eslint-config-prettier'
import jestDomPlugin from 'eslint-plugin-jest-dom'
import prettierPlugin from 'eslint-plugin-prettier'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tailwindPlugin from 'eslint-plugin-tailwindcss'
import testingLibraryPlugin from 'eslint-plugin-testing-library'
import globals from 'globals'
import path from 'path'
import typescriptEslint from 'typescript-eslint'
import { fileURLToPath } from 'url'

// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default [
  // ── Base configs ──────────────────────────────────────────────
  ...airbnbConfigs.react.recommended,
  ...airbnbConfigs.react.hooks,
  prettierConfig,

  // ── Global ignores ────────────────────────────────────────────
  {
    ignores: ['**/node_modules/**', '**/public/**', '**/dist/**', '**/build/**'],
  },

  // ── Main rules (all JS/TS files) ─────────────────────────────
  {
    settings: {
      'import/resolver': {
        node: {
          paths: [path.resolve(__dirname, './src')],
          extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        },
      },
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      prettier: prettierPlugin,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      // ── Disabled Airbnb rules (too strict / not useful) ───────
      'class-methods-use-this': 'off',
      'func-names': 'off',
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'prefer-arrow-callback': 'off',
      'react/destructuring-assignment': 'off',
      'react/forbid-prop-types': 'off',
      'react/function-component-definition': 'off',
      'react/jsx-boolean-value': 'off',
      'react/jsx-fragments': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
      'react/sort-comp': 'off',
      'react/state-in-constructor': 'off',
      'react/static-property-placement': 'off',
      'react/react-in-jsx-scope': 'off',
      camelcase: 'off',

      // ── Import rules ─────────────────────────────────────────
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: ['eslint.config.js', '**/*.test.*', '**/*.spec.*', '**/__tests__/**', 'src/test/**'],
          optionalDependencies: false,
        },
      ],
      // Disable import/order in favor of simple-import-sort
      'import/order': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // ── Code quality ──────────────────────────────────────────
      'no-param-reassign': ['error', { props: true, ignorePropertyModificationsForRegex: ['^draft'] }],
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrors: 'none',
        },
      ],
      'no-use-before-define': ['error', { variables: true, functions: false, classes: false }],

      // ── Formatting (delegated to Prettier) ────────────────────
      'prettier/prettier': ['error'],
      'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
      quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    },
  },

  // ── Tailwind CSS ──────────────────────────────────────────────
  ...tailwindPlugin.configs['flat/recommended'],

  // ── Vitest / Testing Library (test files only) ────────────────
  {
    files: ['**/*.test.*', '**/*.spec.*', '**/__tests__/**', 'src/test/**'],
    ...vitestPlugin.configs.recommended,
    plugins: {
      ...vitestPlugin.configs.recommended.plugins,
      ...jestDomPlugin.configs['flat/recommended'].plugins,
      ...testingLibraryPlugin.configs['flat/react'].plugins,
    },
    rules: {
      ...vitestPlugin.configs.recommended.rules,
      ...jestDomPlugin.configs['flat/recommended'].rules,
      ...testingLibraryPlugin.configs['flat/react'].rules,

      'testing-library/no-node-access': 'off',
      'testing-library/prefer-user-event-setup': 'error',
    },
  },

  // ── TypeScript (*.ts, *.tsx only) ─────────────────────────────
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptEslint.parser,
      parserOptions: {
        projectService: true,
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint.plugin,
      'react-refresh': reactRefresh,
    },
    rules: {
      // Disable base rules that conflict with TS equivalents
      'no-shadow': 'off',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',

      // TypeScript-specific rules
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { caughtErrors: 'none' }],

      // React Refresh (Vite HMR safety)
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },

  // ── shadcn/ui (relaxed – auto-generated code) ──────────────────
  {
    files: ['src/shadcn/**/*.ts', 'src/shadcn/**/*.tsx'],
    rules: {
      // shadcn components don't declare explicit return types
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      // Common pattern: callbacks shadow outer variables (e.g. `open`, `api`)
      '@typescript-eslint/no-shadow': 'off',
      // Generated code may have placeholder params
      '@typescript-eslint/no-unused-vars': 'off',
      // shadcn uses named exports by design
      'import/prefer-default-export': 'off',
      // Inline context values are standard in shadcn providers
      'react/jsx-no-constructed-context-values': 'off',
      // Calendar uses nested component definitions via render props
      'react/no-unstable-nested-components': 'off',
      // Files export types + components together
      'react-refresh/only-export-components': 'off',
      // Forwarded <button> without explicit type attribute
      'react/button-has-type': 'off',
      // Chart component uses dangerouslySetInnerHTML
      'react/no-danger': 'off',
      // Custom attributes like cmdk-input-wrapper
      'react/no-unknown-property': 'off',
      // Type + const with same name (React.createContext pattern)
      'no-redeclare': 'off',
      // Sidebar reassigns `tooltip` param
      'no-param-reassign': 'off',
      // useEffect callbacks with conditional early returns
      'consistent-return': 'off',
      // Reducer without default case
      'default-case': 'off',
      // Destructuring preference
      'prefer-destructuring': 'off',
      // shadcn uses custom classnames (e.g. `toaster`, `destructive`)
      'tailwindcss/no-custom-classname': 'off',
      // Spread-only heading/content/anchor components
      'jsx-a11y/heading-has-content': 'off',
      'jsx-a11y/anchor-has-content': 'off',
    },
  },
]
