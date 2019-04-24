#!/usr/bin/env bash
npm run-script lint
npm run-script generate-jsdocs
git add -A
git commit
git push origin $1