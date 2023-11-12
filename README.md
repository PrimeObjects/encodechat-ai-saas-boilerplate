## New branch

git branch branch-name //create branch
git push -u origin branch-name

## Use branch

git checkout branch-name
git pull
git add .
git commit -m ""
git push

https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request?tool=cli

## rebase into main

When you have uppers done, all the Test branch's commits will be moved onto the head of Master branch. The major benefit of rebasing is that you get a linear and much cleaner project history.

https://www.atlassian.com/git/tutorials/merging-vs-rebasing

```git
git checkout master
git pull
git checkout your-branch
git pull
git rebase -i master
git checkout master
git merge your-branch
```
