/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true,
    node: true,
  },
  "parserOptions": {
    "ecmaFeatures": {
        "jsx": true,
        "modules": true
    }
  }
};
