import chalk from "chalk";
import { writeFile } from "fs/promises";
import { existsSync } from "fs";
export default async (filePath: string, fileContent = "") => {

    if (!await existsSync(filePath)) {
        await writeFile(filePath, fileContent).then(() => {
            console.log(chalk.green(`🚀 CREATE ${filePath}`));
        }).catch((err) => {
            console.log(chalk.bgRed(`${err}`));
            console.log(chalk.red(`🚨 FAILED ${filePath}`));
            console.log(chalk.red(`🚦 Initilize Project first`));
        })
    }


}