## Fork this repository

Fork this repo by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

## Clone the repository
Now clone the forked repo to your machine. Go to your GitHub account, open the forked repo, click on the clone button and then click the *copy to clipboard* icon.

Open a terminal and run the following git command:

```
git clone "url you just copied"
```
where "url you just copied" (without the quote marks) is the url to this repository (your fork of this project). See the previous steps to obtain the url.


For example:
```
git clone https://github.com/this-is-you/firstcontributions.github.io.git
```
where `this-is-you` is your GitHub username.
Here you're copying the contents of the first-contributions repository in GitHub to your computer.

## Running The Project
Change to the repository directory on your computer (if you are not already there):
```
cd firstcontributions.github.io
```

Then install the required Dependencies using:
```
 yarn install
```

After installation, run:
```
yarn start
```
Now you can open your cloned project at ` http://localhost:3000/
`
## Make necessary changes and commit those changes
After you have made the changes in your local system, run `git status` to see your changes.

Add those changes to the branch you just created using the `git add` command:
```
git add .
```
Or, if you want to add files in patch mode, use:
```
git add -p
```

## Push changes to GitHub
Push your changes using the command `git push`:
```
git push origin <add-your-branch-name>
```
replacing `<add-your-branch-name>` with the name of the branch you had your changes on.

## Submit your changes for review

If you go to your repository on GitHub, you'll see a  `Compare & pull request` button.  Click on that button.
Now submit the pull request.
You will get a notification email once the changes have been merged.

# Keeping your fork synced with this repository
To keep your two repos up-to-date with the public repo, our first move is to fetch and merge the public repo with your local machine's repo.
Our second move will be to push your local repo to your GitHub fork. As you've seen earlier, it's only from your fork that you can ask for a "pull request". So your GitHub fork is the last repo to be updated.

Now, let's see how to do it:

First, you must be on your master branch. To know which branch you are on, check the first line of:
```
git status
```
if you are not already on source:
```
git checkout source
```

Then you should add my public repo to your git with `add upstream remote-url`:
```
git remote add upstream https://github.com/firstcontributions/firstcontributions.github.io
```
This is a way of telling git that another version of this project exists in the specified url and we're calling it `upstream`. Once your git has a name let's fetch the latest version of the public repository:
```
git fetch upstream
```

You've just fetched the latest version of my fork (`upstream` remote). Now, you need to merge the public repository into your source branch.
```
git rebase upstream/source
```
Here you're merging the public repository with your source branch. Your local machine's source branch is now up-to-date. Lastly, if you push your source branch to your fork, your GitHub fork will also have the changes:
```
git push origin source
```
Notice here you're pushing to the remote named `origin`.

At this point, all your repositories are up-to-date. Well done! You should do this, everytime your GitHub repo tells you that you are a few commits behind.

