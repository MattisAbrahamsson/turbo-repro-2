# Turbo-repro

This is a minimal reproduction of a Turborepo issue where the watch mode does not run when my CSS files are changed

To reproduce:

```
cd frontend
yarn install
yarn dev
Make a change in the Button css file, such as renaming the class
Notice that the generate-css-module-declarations job hasn't run
```
