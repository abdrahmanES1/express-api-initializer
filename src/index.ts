#!/usr/bin/env node
import commander, { Command } from "commander";
import createApp from '../util/createApp'
import createFile from "../util/createFile";
const figlet = require("figlet");
import chalk from "chalk";
import cliSelect from "cli-select";
import createResource from "../util/createResource";

const program = new Command();
console.log(chalk.cyanBright(figlet.textSync("Express Cli", {

    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
})));

program
    .version("1.0.0")
    .description("An example CLI for managing a directory")
    // .option("-l, --ls  [value]", "List directory contents")
    // .option("-m, --mkdir <value>", "Create a directory")
    .option('-ts, --typescript', 'use TypeScript')
    .option("-d, --debug", "output extra debugging")

type X = { id: number, value: string }
program.command('new')
    .description('Create new Express App')
    .argument('<app-name>', 'App Name')
    .action(async (appName, options) => {
        console.log("Select Type Of The App : ");
        cliSelect({
            values: ['RESTful API', 'Web App'],
            selected: "->",
            unselected: "-",
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
                        console.log(chalk.blue(`cd ${appName}`));
                        console.log(chalk.blue(`npm install express express-async-handler`));
                        console.log(chalk.blue(`node index.js`));
                    })
            }
            else console.log(chalk.blue(`Web app Coming soon ..`));
        })

    });




program.command('g')
    .description('Generate new App Resource')
    .addArgument(new commander.Argument('<fileType>', 'file type Controller Service').choices(['controller', 'model', 'middleware', "route", "resource", "view"]))
    .argument('<fileName>', 'file name ex. users ')
    .action((fileType, fileName, options) => {
        if (fileType == "resource") {
            createResource(`${process.cwd()}`, fileName, options);
        } else {
            createFile(`${process.cwd()}`, fileType, fileName, options);
        }
    });

program.parse(process.argv);

// const options = program.opts();
