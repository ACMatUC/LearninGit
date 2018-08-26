# LearninGit

A repository to accompany ACM's August 25th meeting, a git workshop.

[Check out the presentation here!](https://docs.google.com/presentation/d/1iZkIKBSVzhJRVIUgU1Lyav5LrjOXcKG428YARdFFeYo/edit?usp=sharing)

[Enjoy tons of free software at from the github education pack!](http://education.github.com)

Some of our favorite git guides:
* [Atlassian](https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud)  
* [UC QuickFix Workshop (UC private github)](https://github.uc.edu/QuickFixes/just-gittin-started)  
* [Gitready](http://gitready.com/)  
* [Git Tips](https://github.com/git-tips/tips)  

## Cheat Sheet

#### Create a repo

`$ git init` => Creates new repo in current directory  
`$ git clone [https://github.com/ACMatUC/LearninGit.git]` => Copies repo down from remote directory  
  
##### Committing

`$ git status`  => See status of files in repo  
`$ git diff`  => See change since last commit  
`$ git add [file name]` => Add specific file(s) to the commit, add ‘--all’ to add all files to the commit  
`$ git commit -m “[Informative commit message]”` => Commit added files to repo, with message  

#### Branching

`$ git checkout [Branch Name]` => Switch to a different branch of given name, Add ‘-b’ to create the branch and then switch to it  
`$ git merge [Merge Branch]` => Merges changes from named branch to current branch  
`$ git branch -d [Branch Name]` => Delete a branch when you’re done with it  

#### Working with a Remote

`$ git pull origin` => Pulls repo from remote repository  
`$ git push origin` => Pushes repo to remote repository  
