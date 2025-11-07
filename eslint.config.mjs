// @ts-check
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default {
  root: true,
  env: {
    node: true,
    es2024: true,
    jest: true
  },
  ignorePatterns: ['dist/', 'build/', 'node_modules/', 'eslint.config.mjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // aponta para o tsconfig para regras que requerem checagem de tipo
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  plugins: ['@typescript-eslint', 'import', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // rules that require type information
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jest/recommended'
  ],
  settings: {
    // ajuda o plugin import a resolver paths do TS
    'import/resolver': {
      typescript: {
        project: './tsconfig.json'
      }
    }
  },
  rules: {
    /***** TypeScript / quality *****/
    '@typescript-eslint/no-explicit-any': 'warn', // migrar gradualmente; mudar para 'error' quando possível
    '@typescript-eslint/no-floating-promises': 'error', // evita esquecer await
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    /***** JS best-practices *****/
    'no-var': 'error',
    'prefer-const': ['error', { destructuring: 'all' }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'prefer-arrow-callback': 'warn',

    /***** Import rules (organization) *****/
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
          'type'
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true }
      }
    ],
    'import/no-unresolved': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.{test,spec}.{ts,tsx,js,jsx}',
          'test/**',
          'scripts/**',
          '**/setupTests.*'
        ]
      }
    ]
  },
  overrides: [
    // testes
    {
      files: ['**/*.test.*', '**/*.spec.*', 'test/**', '**/__tests__/**'],
      env: { jest: true },
      rules: {
        // em alguns testes é aceitável não aguardar promessas ou usar console
        '@typescript-eslint/no-floating-promises': 'off',
        'no-console': 'off'
      }
    },
    // arquivos JS (scripts/configs) — não exigem project => evita erro de parser
    {
      files: ['**/*.js', '**/*.cjs', 'scripts/**'],
      parserOptions: { project: null },
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ]
};