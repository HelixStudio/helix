# Helix 👨‍💻

Helix is an open-source website to help you learn & practice programming.

# Required dependencies

Besides the specified node packages, you need to have the following software to host the frontend:

- git (any version)
- nodejs >= 16

# How to run

Firstly, clone the repository:

```bash
git clone https://github.com/NikolaTesla13/helix.git
```

Go to the newly created directory:

```bash
cd helix
```

You can use any nodejs package manager to manage the dependencies (such as npm, yarn or pnpm). During development, npm was used:

```bash
# install required packages
npm install
```

Provide the required environment variables in a `.env` file, refer to the `.env.example` file for example usage:

```bash
NODE_ENV="development"

NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET=""

DATABASE_URL=""

UPLOADTHING_SECRET=""
UPLOADTHING_APP_ID=""

HUGGINGFACE_API_KEY=""

DISCORD_CLIENT_ID=""
DISCORD_CLIENT_SECRET=""

GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""

GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

TWITTER_CLIENT_ID=""
TWITTER_CLIENT_SECRET=""
```

And now you can start the services:

```bash
# starts frontend on localhost:3000
npm run dev

# starts the prisma studio on localhost:5555
npx prisma studio

# starts the storybook testing server on localhost:6006
npm run storybook
```

Most common errors when running the frontend:

- database connection error: check your connection url and if the db is up and running
- dependencies error: check if a `node_modules` was created with the required libraries
- backend not running: note that some features require the backend server to be running
- feel free to open a new issue if you have discovered a bug
