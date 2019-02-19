const readline = require("readline");
const path = require("path");
const fs = require("fs");
const template = require("./template");

const colors = require("./colors");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(
  `What is the name of your component? (this should use PascalCase) `,
  componentName => {
    console.log(
      colors.FgGreen,
      `Creating files for your component: ${componentName}`
    );

    // write the component into core
    const componentPath = path.resolve(`../core/src/${componentName}`);
    fs.mkdirSync(componentPath);
    fs.writeFileSync(
      `${componentPath}/${componentName}.js`,
      template.react(componentName)
    );
    fs.writeFileSync(
      `${componentPath}/${componentName}.less`,
      template.css(componentName)
    );
    fs.writeFileSync(
      `${componentPath}/index.js`,
      `export { ${componentName} } from './${componentName}'`
    );

    // add to the core src index
    fs.appendFileSync(
      "../core/src/index.js",
      `
export { ${componentName} } from './${componentName}'`
    );

    // create the guide for the component
    const guidePath = path.resolve(`../app/guides`);
    fs.writeFileSync(
      `${guidePath}/${componentName}Guide.js`,
      template.guide(componentName)
    );
    console.log(
      colors.FgGreen,
      `Completed writing component shell for ${componentName}Guide`
    );

    // add to the guide index
    fs.appendFileSync(
      `${guidePath}/index.js`,
      `
export { ${componentName}Guide } from './${componentName}Guide'`
    );

    // add the item to the navigation
    rl.question(
      `Will this component be an atom, molecule, or organism? `,
      type => {
        if (type !== "molecule" && type !== "atom" && type !== "organism") {
          console.log(colors.BgYellow, "That is not a valid item type");
          console.log(
            colors.FgRed,
            "You will have to manually add it to the items array in app/items.json"
          );
          return rl.close();
        }
        const rawItems = fs.readFileSync("../app/items.json");
        const itemsJson = JSON.parse(rawItems);
        itemsJson[`${type}s`].push(componentName);
        fs.writeFileSync("../app/items.json", JSON.stringify(itemsJson));
        console.log(
          colors.FgGreen,
          `${componentName} has been added to the navigation`
        );
        // add route reminder
        console.log(
          colors.BgMagenta,
          "Until you run 'npm run build' in core your component will not load into the library"
        );
        console.log(colors.FgGreen, "Go make something useful!");
        rl.close();
      }
    );
  }
);
