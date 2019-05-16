#!/usr/bin/env bash
npm run-script lint
npm run-script generate-jsdocs
git add -A
git commit
git tag -a $2  
git pull origin $1
git push --tags origin $1

#!/usr/bin/env bash
read -p "branch name: " branchName
git branch | grep -w $branchName

if [ $? != 0 ]; then
echo "no local git branch named $branchName ... exiting ..."
exit 
fi

echo "WARNING! will 'git pull' from $branchName & 'git push' to $branchName"
read -p "continue? (y or n)? " ans

read "New version number: " version 

ans=$(echo "$ans" | tr '[:upper:]' '[:lower:]') 

if [ $ans == 'n' ]; then
  exit 
else 
  echo "running linter ..."
  npm run-script lint
  if [ $1 == 'nd' ]; then 
    echo "no docs generated"
  else
    echo "running document generator ..."
    npm run-script generate-jsdocs
  fi
  echo "adding files to staging area ..."
  git add -A
  echo "commiting changes ..."
  git commit
  echo "creating a git tag with verion number $version ..."
  git tag -a $version
  echo "pulling from $branchName ..."
  git pull origin $branchName
  echo "pushing to $branchName ..."
  git push --tags origin $branchName
fi
echo "success!"
exit 
