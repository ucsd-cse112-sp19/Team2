#!/usr/bin/env bash
npm run-script lint
npm run-script generate-jsdocs
git add -A
git commit
git tag -a $2  
git pull origin $1
git push --tags origin $1