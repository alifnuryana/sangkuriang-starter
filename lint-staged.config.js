/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
  '*.{js,json,mjs,ts,vue}': ['eslint --fix'],
}
