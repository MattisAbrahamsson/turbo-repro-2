import { glob } from "glob";
import DtsCreator from "typed-css-modules";
const creator = new DtsCreator.default();

const filePaths = await glob("**/*.module.css");

for (const filePath of filePaths) {
  creator
    .create(filePath)
    .then((content) => content.writeFile())
    .catch((error) => console.log(error));
}

console.log("Module declarations generated");
