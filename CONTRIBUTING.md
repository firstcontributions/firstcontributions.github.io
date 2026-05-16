## Fork this repository

Fork this repo by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

## Clone the repository
Now clone the forked repository to your machine. Go to your GitHub account, open the forked repo, click on the clone button and then click the *copy to clipboard* icon.

Open a terminal and run the following git command:

```
git clone "url you just copied (url of the forked repo)"
```
where "url you just copied" (without the quote marks) is the url to this repository (your fork of this project). See the previous steps to obtain the url.


For example:
```
git clone https://github.com/<github_username>/firstcontributions.github.io.git
```
where `<github_username>` is your GitHub username.
Here you're copying the contents of your firstcontributions.github.io repository on GitHub to your computer.

## Running The Project
You should have [Node.js](https://nodejs.org/en/download/) installed to run the project locally. This project can be run with npm or pnpm.

Change to the repository directory on your computer (if you are not already there):
```
cd firstcontributions.github.io
```

Then install the required dependencies using:
```
npm install
# or
pnpm install
```

*If you run into a dependencies issue, try removing `node_modules`.*

After installation, run:
```
npm run dev
# or
pnpm dev
```
Now you can open your cloned project at the local URL printed by Astro, usually `http://localhost:4321/`.
