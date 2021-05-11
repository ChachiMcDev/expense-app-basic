
1) git init
2) git status   shows file structure/ contextual information
3) git add     adds files to staging area
3.a) git add .    ***adds everything from changes***

*** git add adds files to staging, things in stage need to be committed ***

4)git commit -m "enter message here"


--- working tree -- the file structure

git log    view recent commits

https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh

creating ssh keys w/ git-bash
::  ssh-keygen -t rsa -b 4096 -C "chachimcdev@gmail.com"
to verify ssh key pairs exist   ls -a ~/.ssh
to create/start the ssh agent:  eval "$(ssh-agent -s)"

adding new identity/ add the new key ssh-add ~/.ssh/id_rsa  (using the private file)

make a connection to github:  ssh -T git@github.com

adding to remote repository(github):  git remote add origin git@github.com:ChachiMcDev/expense-app-basic.git

initial push to github upstream repo:  git push -u origin main
