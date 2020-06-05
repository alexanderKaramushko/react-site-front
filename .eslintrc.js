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
		'implicit-arrow-linebreak': 'off',
		'import/extensions': ['error', 'ignorePackages', {
			js: 'never',
			json: 'never',
			jsx: 'never',
			ts: 'never',
			tsx: 'never',
		}],
		'import/prefer-default-export': 'off',
		'linebreak-style': ['error', 'windows'],
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
		'react-hooks/exhaustive-deps': 'warn',
		'react-hooks/rules-of-hooks': 'warn',
		'react/jsx-filename-extension': [1, {
			extensions: ['.tsx', '.jsx'],
		}],
		"indent": ["error", 4, { "ignoredNodes": ["JSXElement"] }],
		"react/jsx-indent": ["error", 4],
		"react/jsx-indent-props": ['error', 4],
		'react/prop-types': 'off',
		'sort-keys': ['error', 'asc', {
			caseSensitive: true,
			natural: false,
		}],
		quotes: ['error', 'single'],
		'no-tabs': 0,
	},
	settings: {
		'import/extensions': ['.ts', '.tsx', '.json'],
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx', '.json'],
		},
		'import/resolver': {
			'node': {
				'extensions': [
					'.js',
					'.jsx',
					'.ts',
					'.tsx'
				]
			}
		},
		react: {
			pragma: 'React',
			version: 'detect',
		},
	},
};

module.exports = config;