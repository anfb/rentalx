module.exports = {
    extends: 'standard-with-typescript',
    parserOptions: {
        project: './tsconfig.json'
    },
    rules: {
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-non-null-assertion': 'warn'
    },
    overrides: [
        {
            files: ['src/**/*.spec.ts', 'src/**/test-utils/*'],
            rules: {
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/consistent-type-assertions': 'off'
            }
        }
    ]
}