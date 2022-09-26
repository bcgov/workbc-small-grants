module.exports = {
    "*.{js,jsx}": ["npx eslint --fix", "npx prettier --write"],
    "*.code-workspace": ["npx prettier --parser json --write"],
    "*.json": ["npx prettier --write"],
    "package.json": ["npx sort-package-json"]
}
