const prettierConfig = require("./.prettierrc")

module.exports = {
    root: true,
    extends: ["@bcgov-elmsd/eslint-config"],
    rules: {
        "prettier/prettier": ["error", prettierConfig],
        "consistent-return": "off",
        "no-shadow": "off",
        "no-param-reassign": "warn",
        "no-underscore-dangle": "off"
    },
    ignorePatterns: ["**/dist/**/*.js"]
}
