# First Contributions

A website to help people make their first open source contribution.

## Features

- **Project Discovery**: Browse open source projects suitable for beginner in github
- **Issue Integration**: View "good first issue" and "help wanted" issues directly from GitHub
- **Bento Layout**: Modern, responsive card layout with varying heights    
- **Real-time Data**: Fetches live issue data from GitHub repositories
                                                                        
                                                                      
## Setup

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```sh
npm install
# or
pnpm install
```

### GitHub API Setup (Optional)

To enable live issue fetching, you'll need a GitHub Personal Access Token:

1. Go to [GitHub Settings > Personal Access Tokens](https://github.com/settings/tokens)
2. Generate a new token (no special permissions needed)
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

- **Astro**: Static site generator
- **TypeScript**: Type safety
- **GitHub API**: Live issue data
- **CSS**: Modern styling with glassmorphism effects
