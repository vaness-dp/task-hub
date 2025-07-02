import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname
})

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	{
		rules: {
			'@typescript-eslint/no-unused-vars': 'error',
			'@typescript-eslint/prefer-const': 'error',
			'@typescript-eslint/no-explicit-any': 'warn',
			'react-hooks/exhaustive-deps': 'error',
			'import/order': 'off', // prettier plugin handles this
			'prefer-const': 'error',
			'no-var': 'error'
		}
	}
]

export default eslintConfig
