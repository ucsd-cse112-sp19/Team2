#!/usr/bin/env bash
read -p "branch name: " branchName
git branch | grep -w $branchName

if [ $? != 0 ]; then
echo "no local git branch named $branchName ... exiting ..."
exit 
fi

echo "WARNING! will 'git pull' from $branchName & 'git push' to $branchName"
read -p "continue? (y or n)? " ans

ans=$(echo "$ans" | tr '[:upper:]' '[:lower:]') 

read -p "Do you want to generate api docs? (y or n)? " docsAns

docsAns=$(echo "$docsAns" | tr '[:upper:]' '[:lower:]') 

if [ $ans == 'n' ]; then
  exit 
else 
  rm -rf instrumented
  rm -rf lib
 # rm bundle.js
  echo "running linter ..."
  npm run-script lint
  if [ $? -eq 0 ]; then
    echo "ESLint success"
  else
    echo "ESLint failed! GO FIX ESLINT ERRORS BEFORE RUNNING PIPE"
    echo "npm pipe was unsuccessful! exiting..."
    exit
  fi
  if [ $docsAns == 'n' ]; then 
    echo "no docs generated"
  else
    echo "running document generator ..."
    npm run-script generate-jsdocs
  fi
  echo "adding files to staging area ..."
  git add -A
  echo "commiting changes ..."
  git commit
  echo "pulling from $branchName ..."
  git pull origin $branchName
  echo "pushing to $branchName ..."
  git push origin $branchName
fi
echo "success!"
exit 
