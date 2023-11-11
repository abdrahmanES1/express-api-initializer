import { exec } from "child_process";
import createResource from './createResource'
import { mkdir, writeFile } from "fs/promises";
import chalk from "chalk";
import { appTemplate, indexTemplate, errorMiddlewareTemplate } from '../templates/js'


export default async (appName: string, options: any, callback: Function) => {
    const getFilesExtention = (options: any) => options?.typescript ? ".ts" : ".js";
    try {
        await mkdir(`${appName}`)
        await mkdir(`${appName}/src`)
        await mkdir(`${appName}/src/controllers`)
        await mkdir(`${appName}/src/middlewares`)
        await mkdir(`${appName}/src/models`)
        await mkdir(`${appName}/src/routes`)
        await mkdir(`${appName}/config`)
        await exec(`cd ${appName} && touch index${getFilesExtention(options)}`)
        await exec(`cd ${appName}/src && touch app${getFilesExtention(options)}`)
        await exec(`cd ${appName} && npm init -y`)
        await createResource(appName, "users", options)
        await writeFile(`${appName}/src/app${getFilesExtention(options)}`, appTemplate())
        await writeFile(`${appName}/index${getFilesExtention(options)}`, indexTemplate())
        await writeFile(`${appName}/src/middlewares/error.middleware${getFilesExtention(options)}`, errorMiddlewareTemplate())
        callback()
    } catch (error: any) {
        console.log(chalk.red("🚨 " + error.message));
        return
    }

}



