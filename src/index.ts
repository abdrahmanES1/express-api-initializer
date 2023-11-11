#!/usr/bin/env node
import commander, { Command } from "commander";
import createApp from '../util/createApp'
import createFile from "../util/createFile";
const figlet = require("figlet");
import chalk from "chalk";
import cliSelect from "cli-select";
import createResource from "../util/createResource";
import packageJson from '../package.json'

const program = new Command();
console.log(chalk.cyanBright(figlet.textSync(packageJson.name, {
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 150,
    whitespaceBreak: true
})));

program
    .version(packageJson.version)
    .description("Express API Initializer is a tool designed to streamline the process of generating Express.js applications.    ")
    .option("-d, --debug", "output extra debugging")
    .option('-ts, --typescript', 'use TypeScript')

type X = { id: number, value: string }
program.command('new')
    .description('Create new Express App')
    .argument('<app-name>', 'App Name')
    .action(async (appName, options) => {
        console.log("Select Type Of The App : ");
        cliSelect({
            values: ['RESTful API', 'Web App'],
            selected: "👉",
            unselected: " ",
            cleanup: false,
            valueRenderer: (value, selected) => {
                if (selected) {
                    return chalk.underline.cyan(value);
                }
                return value;
            },
        }).then(async (value) => {
            if (value.id === 0) {
                await createApp(appName, options, () => { })
                    .then(() => {
                        console.log(chalk.blue.bold(`\n🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉`));
                        console.log(chalk.blue.bold(`\n     cd ${appName}`));
                        console.log(chalk.blue.bold(`     npm install express express-async-handler`));
                        console.log(chalk.blue.bold(`     node index.js\n`));
                    }).catch((err) => {
                        console.log(console.log(chalk.red(err)));
                    })
            }
            else console.log(chalk.blue(`🚧 🚧 🚧 Web app Coming soon .. 🚧 🚧 🚧`));
        })

    });




program.command('g')
    .description("Generate new App Resource  controller, model, middleware, route, resource")
    .addArgument(new commander.Argument('<file-type>', 'file type Controller Service').choices(['controller', 'model', 'middleware', "route", "resource", "view"]))
    .argument('<file-name>', 'file name ex. users ')
    .action((fileType, fileName, options) => {
        if (fileType == "resource") {
            createResource(`${process.cwd()}`, fileName, options);
        } else {
            createFile(`${process.cwd()}`, fileType, fileName, options);
        }
    });

program.parse(process.argv);

// const options = program.opts();
