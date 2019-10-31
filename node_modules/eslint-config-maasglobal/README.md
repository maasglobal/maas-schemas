# eslint-config-maasglobal

## [ESLint](http://eslint.org/docs/developer-guide/shareable-configs) shareable config to be used across [MaaS](https://github.com/maasglobal/) projects

### Usage

In `package.json` reference `eslint-config-maasglobal` and `eslint-plugin-import` as one of `devDependencies`, and configure eslint as:

```json
{
  "eslintConfig": {
    "extends": "maasglobal"
  }
}
```

### Prettier integration

Note that provided eslint setup doesn't handle eventual code style formatting. This is supposed to be solely guarded by [Prettier](https://prettier.io/)

Within new projects, ensure `prettier` as one of `devDependencies` and setup `.prettierrc.js` as:

```javascript
'use strict';

module.exports = require('eslint-config-maasglobal/.prettierrc');
```

It's highly recommended that for consistent whitespace formatting, an IDE is configured to also apply Prettier formatting on each file save.

### Scripts setup and CI integration

For proper CI integration it's recommended that all MaaS projects have following scripts preconfgured:

```json
{
  "lint": "eslint --ignore-path=.gitignore .",
  "lint-updated": "pipe-git-updated --ext=js -- eslint --ignore-pattern '!*'",
  "prettier-check-updated": "pipe-git-updated --ext=css --ext=html --ext=js --ext=json --ext=md --ext=yaml --ext=yml -- prettier -c",
  "prettify": "prettier --write --ignore-path .gitignore '**/*.{css,html,js,json,md,yaml,yml}'",
  "prettify-updated": "pipe-git-updated --ext=css --ext=html --ext=js --ext=json --ext=md --ext=yaml --ext=yml -- prettier --write"
}
```

_Note: Scripts require additional `git-list-updated` dependency to be installed, reference it in `devDependencies`_

In Travis CI configuration, ensure that following validation is made on each PR build (but not on branch deployment):

```bash
npm run lint-updated && npm run prettier-check-updated
```
