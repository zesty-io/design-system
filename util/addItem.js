const chalk = require("chalk");
const readline = require("readline");
const path = require("path");
const fs = require("fs");
const template = require("./template");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What is the name of your component?`, componentName => {
  console.log(
    chalk.green(`Creating files for your component: ${componentName}`)
  );
  const componentPath = path.resolve(`../core/src/${componentName}`);
  fs.mkdirSync(componentPath);
  fs.writeFileSync(
    `${componentPath}/${componentName}.js`,
    template.react(componentName)
  );
  fs.writeFileSync(
    `${componentPath}/${componentName}.css`,
    template.css(componentName)
  );
  const guidePath = path.resolve(`../app/guides`);
  fs.writeFileSync(
    `${guidePath}/${componentName}Guide.js`,
    template.guide(componentName)
  );
  //close the process
  rl.close();
});
