# Helix 👨‍💻

Helix is an open-source website to help you learn & practice programming.

# Required dependencies

Besides the specified node packages, you need to have the following software to host the frontend:

- git (any version)
- nodejs >= 16

# How to run

Firstly, clone the repository. Use the recursive argument so it also clones the backend, you can always skip this and clone the backend separately:

```bash
git clone https://github.com/NikolaTesla13/helix.git --recursively
```

Go to the newly created directory:

```bash
cd helix
```

You can use any nodejs package manager to manage the dependencies (such as npm, yarn or pnpm). During development, yarn was used:

```bash
# install required packages
yarn
```

Provide the required environment variables in a `.env` file, refer to the `.env.example` file for example usage:

```bash
# postgresql database url
DATABASE_URL=
# random secret to be used for sessions
VITE_SECRET=
```

And now you can start the services:

```bash
# starts frontend on localhost:3000
yarn dev

# starts the prisma studio on localhost:5555
yarn prisma studio

# starts the cypress testing server on localhost:59664, may depend
yarn test
```

Most common errors when running the frontend:

- database connection error: check your connection url and if the db is up and running
- dependencies error: check if a `node_modules` was created with the required libraries
- backend not running: note that some features require the backend server to be running on port 4000, please refer to its repository for more instructions
- feel free to open a new issue if you have discovered a bug
