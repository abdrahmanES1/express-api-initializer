import chalk from "chalk";
import { writeFile } from "fs/promises";
import { existsSync } from "fs";
import getAppPath from '../helpers/getAppPath'
export default async (filePath: string, fileContent = "") => {
    let appPath = getAppPath(filePath)
    if (!await existsSync(filePath)) {
        await writeFile(filePath, fileContent).then(() => {
            console.log(chalk.green(`🚀 CREATE ${appPath}`));
        }).catch((err) => {
            console.log(chalk.red(`🚨 FAILED ${appPath}`));
        })
    }


}