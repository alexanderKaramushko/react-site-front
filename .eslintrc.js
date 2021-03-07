const config = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    'lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: true,
    }],
    'padded-blocks': ['error', {
      classes: 'always',
    }],
    'no-unused-vars': ['error', {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: false,
    }],
    'implicit-arrow-linebreak': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      json: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'import/prefer-default-export': 'off',
    indent: ['error', 4, {
      ignoredNodes: ['JSXElement'],
    }],
    'linebreak-style': ['error', 'windows'],
    'linebreak-style': 0,
    'max-len': ['error', {
      code: 120,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true,
    }],
    'no-console': 'error',
    'no-debugger': 'error',
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxBOF: 0,
      maxEOF: 0,
    }],
    quotes: ['error', 'single'],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'warn',
    'react/jsx-filename-extension': [1, {
      extensions: ['.tsx', '.jsx'],
    }],
    'react/jsx-indent': ['error', 4],
    'react/jsx-indent-props': ['error', 4],
    'react/prop-types': 'off',
    'sort-keys': ['error', 'asc', {
      caseSensitive: true,
      natural: false,
    }],
    'object-curly-newline': ['error', {
      ObjectPattern: { multiline: true },
      ImportDeclaration: 'never',
      ExportDeclaration: { multiline: true, minProperties: 3 },
    }],
    indent: ['error', 2],
    'newline-after-var': ['error', 'always'],
  },
  settings: {
    'import/extensions': ['.ts', '.tsx', '.json'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.json'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};

module.exports = config;
