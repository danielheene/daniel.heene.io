const websiteTsConfig = require('./website/tsconfig.json');
const studioTsConfig = require('./studio/tsconfig.json');
const paths = [
  ...Object.keys(websiteTsConfig.compilerOptions.paths || {}),
  ...Object.keys(studioTsConfig.compilerOptions.paths || {}),
]
  .map((path) => path.replace('/*', ''))
  .join('|');

module.exports = {
  root: true,
  // parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   ecmaFeatures: {
  //     jsx: true,
  //   },
  //   // tsconfigRootDir: __dirname,
  //   project: ['./studio/tsconfig.json', './website/tsconfig.json'],
  // },
  // plugins: ['@typescript-eslint', 'simple-import-sort'],
  // extends: [
  //   'eslint:recommended',
  //   'plugin:@typescript-eslint/recommended',
  //   'prettier',
  // ],
  // ignorePatterns: [
  //   '**/tailwind.config.js',
  //   '.eslintrc.js',
  //   '**/.next/**',
  //   '**/.vercel/**',
  //   '**/dist/**',
  //   '**/lib/**',
  //   '**/node_modules/**',
  // ],
  // overrides: [
  //   {
  //     files: ['website/**'],
  //     extends: ['next'],
  //   },
  //   {
  //     files: ['studio/**'],
  //     extends: ['@sanity/eslint-config-studio'],
  //   },
  // ],
  // rules: {
  //   'simple-import-sort/imports': [
  //     'error',
  //     {
  //       groups: [
  //         [`^(${require('module').builtinModules.join('|')})(/|$)`],
  //         ['^react', '^next', `^(?!(${paths}))(@?\\w+)`],
  //         [
  //           `^(${paths})`,
  //           '^\\.\\.(?!/?$)',
  //           '^\\.\\./?$',
  //           '^\\./(?=.*/)(?!/?$)',
  //           '^\\.(?!/?$)',
  //           '^\\./?$',
  //         ],
  //       ],
  //     },
  //   ],
  //   'sort-imports': 'off',
  //   'import/order': 'off',
  //   'react/display-name': 'off',
  //   '@typescript-eslint/no-unsafe-assignment': 'off',
  //   '@typescript-eslint/no-unsafe-call': 'off',
  //   '@typescript-eslint/no-unsafe-member-access': 'off',
  //   '@typescript-eslint/restrict-template-expressions': 'off',
  // },
};
