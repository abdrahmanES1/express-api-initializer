#!/usr/bin/env node
import commander, { Command } from "commander";
import createApp from "../lib/createApp";
const figlet = require("figlet");
import chalk from "chalk";
import cliSelect from "cli-select";
import packageJson from "../package.json";
import createResources from "../lib/createResources";
import createResource from "../lib/createResource";
import {
  EmptyMiddleware,
  EmptyModel,
  EmptyRoute,
  EmptySchema,
  Emptycontroller,
} from "../templates/src/empty";
const program = new Command();
console.log(
  chalk.cyanBright(
    figlet.textSync(packageJson.name, {
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 150,
      whitespaceBreak: true,
    })
  )
);

program
  .version(packageJson.version)
  .description(
    "Express API Initializer is a tool designed to streamline the process of generating Express.js applications.    "
  )
  .option("-d, --debug", "output extra debugging")
  .option("-ts, --typescript", "use TypeScript")
  .option("-v, --version", "package version");

program
  .command("new")
  .description("Create new Express App")
  .argument("<app-name>", "App Name")
  .action(async (appName, options) => {
    console.log("Select Type Of The App : ");
    cliSelect({
      values: ["RESTful API", "Web App"],
      selected: "👉",
      unselected: "  ",
      cleanup: false,
      valueRenderer: (value, selected) => {
        if (selected) {
          return chalk.underline.cyan(value);
        }
        return value;
      },
    }).then(async (value) => {
      if (value.id === 0) {
        try {
          await createApp(appName, options);

          console.log(chalk.blue.bold(`\n🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉`));
          console.log(chalk.blue.bold(`\n     cd ${appName}`));
          // console.log(chalk.blue.bold(`     npm install express express-async-handler`));
          console.log(chalk.blue.bold(`     npm run start\n`));
        } catch (error) {
          console.log(console.log(chalk.red(error)));
        }
      } else
        console.log(chalk.blue(`🚧 🚧 🚧 Web app Coming soon .. 🚧 🚧 🚧`));
    });
  });

program
  .command("g")
  .description(
    "Generate new App Resource  controller, model, middleware, route, resource, schema"
  )
  .addArgument(
    new commander.Argument(
      "<file-type>",
      "file type Controller Service"
    ).choices([
      "controller",
      "model",
      "middleware",
      "route",
      "resource",
      "config",
      "schema",
    ])
  )
  .argument("<file-name>", "file name ex. users ")
  .action((fileType, fileName, options) => {
    if (fileType == "resource") {
      createResources(`${process.cwd()}`, fileName, options);
    } else {
      createResource(`${process.cwd()}`, fileType, fileName, options);
    }
  });

program.parse(process.argv);
