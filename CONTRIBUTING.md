 **# Contributing to First Contributions Web App**

**Thank you for your interest in contributing to the First Contributions web app!** 

We welcome contributions of all kinds, from code to documentation to design. Here's a guide to get you started:

**1. Fork the Repository**

- Click the "Fork" button in the top right corner of the GitHub repository page. This creates a copy of the repository in your own GitHub account.

**2. Clone the Repository**

- Open a terminal and run the following command to clone your forked repository to your local machine:

```bash
git clone https://github.com/<your-username>/firstcontributions.github.io.git
```

- Replace `<your-username>` with your actual GitHub username.

**3. Create a Branch**

- Navigate to the cloned repository directory:

```bash
cd firstcontributions.github.io
```

- Create a new branch for your changes:

```bash
git checkout -b <branch-name>
```

- Replace `<branch-name>` with a descriptive name for your changes.

**4. Make Your Changes**

- Make your desired changes to the code, documentation, or design.
- Follow the project's coding style and conventions.
- Write clear and concise code comments.

**5. Commit Your Changes**

- Add the changed files to the staging area:

```bash
git add <file1> <file2> ...
```

- Commit your changes with a descriptive message:

```bash
git commit -m "Description of your changes"
```

**6. Push Your Changes**

- Push your branch to your forked repository on GitHub:

```bash
git push origin <branch-name>
```

**7. Open a Pull Request**

- Go to the original repository on GitHub.
- Click the "Pull Request" button.
- Select your branch as the source and `main` as the target branch.
- Provide a clear and concise description of your changes.

**8. Await Review**

- The repository maintainers will review your pull request and provide feedback.
- You may be asked to make additional changes or address any issues.

**9. Merge (If Accepted)**

- If your pull request is approved, it will be merged into the main repository.
- Your contribution will be part of the project!

**Additional Notes:**

- Before starting work, check for existing issues or discussions related to your idea to avoid duplication.
- If you're unsure about anything, feel free to ask questions in the issue tracker or discussions.
- We value diversity and inclusivity, so please be respectful of others in all project interactions.

## Running The Project
You should have [yarn](https://yarnpkg.com/en/docs/install) and [node](https://nodejs.org/en/download/) to run the project locally.

Change to the repository directory on your computer (if you are not already there):
```
cd firstcontributions.github.io
```

Then install the required Dependencies using:
```
 yarn install
```

*If you run into a dependencies issue, try removing `node_modules`.*

After installation, run:
```
yarn start
```
Now you can open your cloned project at ` http://localhost:3000/
`

**Thank you for contributing!** ✨
