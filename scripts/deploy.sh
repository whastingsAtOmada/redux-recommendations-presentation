#!/usr/bin/env bash

set -e

npm run build
mkdir /tmp/redux-recommendations
cp index.html /tmp/redux-recommendations
cp -r dist/ /tmp/redux-recommendations/dist
git checkout gh-pages
rm -rf dist/ index.html
mv /tmp/redux-recommendations/dist ./dist
mv /tmp/redux-recommendations/index.html .
rm -rf /tmp/redux-recommendations
git add -A
git commit -m "Deploy"
git push origin gh-pages
git checkout master