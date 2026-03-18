# First Contributions

A website to help people make their first open source contribution.

## Features

* **Project Discovery**: Explore beginner-friendly open source projects
* **Issue Integration**: View "good first issue" and "help wanted" issues directly from GitHub
* **Bento Layout**: Modern, responsive card layout with varying heights
* **Real-time Data**: Fetches live issue data from GitHub repositories

## How It Works

* The application fetches repositories suitable for beginners
* It retrieves "good first issue" and "help wanted" issues using the GitHub API
* Displays them in a responsive bento-style layout

## Setup

### Prerequisites

* Node.js 18+
* npm or pnpm

### Installation

```sh
npm install
# or
pnpm install
```

### GitHub API Setup (Optional)

To enable live issue fetching, you'll need a GitHub Personal Access Token:

1. Go to [GitHub Settings > Personal Access Tokens](https://github.com/settings/tokens)
2. Generate a new token (no special permissions required for public repositories)
3. Create a `.env` file in the project root:

```env
GITHUB_TOKEN=your_token_here
```

Without a token, the site will work but won't show live GitHub issues due to rate limiting.

### Development

```sh
npm run dev
# or
pnpm dev
```

### Build

```sh
npm run build
# or
pnpm build
```

## Tech Stack

* **Astro**: Static site generator
* **TypeScript**: Type safety
* **GitHub API**: Live issue data
* **CSS**: Modern styling with glassmorphism effects

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## Screenshots

(Add screenshots of the UI here)
