#!/bin/sh
yarn build
yarn docs
echo Deploying docs to GitHub pages of ${TRAVIS_REPO_SLUG}
git remote add origin-pages https://github:${GITHUB_API_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git
yarn gh-pages -o origin-pages
