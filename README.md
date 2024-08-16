# Turbo-repro

This is a minimal reproduction of a Turborepo issue where the watch mode keeps running every second or so,
it seems to be because of the Turborepo living inside a folder of the Git repository, moving everything to
the root fixes the issue.

To reproduce:

```
cd frontend
yarn install
yarn dev
```
