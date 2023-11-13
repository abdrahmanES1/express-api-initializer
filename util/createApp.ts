import { exec } from "child_process";
import chalk from "chalk";
import { appTemplate, indexTemplate, errorMiddlewareTemplate } from "../templates/js"
import createDirectory from "./createDirectory"
import createFile from "./createFile"
import createResources from "./createResources";


export default async (appName: string, options: any) => {
    const getFilesExtention = (options: any) => options?.typescript ? ".ts" : ".js";

    try {
        // Create Directories

        await createDirectory(`${appName}`)
        await createDirectory(`${appName}/src`)
        await createDirectory(`${appName}/src/controllers`)
        await createDirectory(`${appName}/src/middlewares`)
        await createDirectory(`${appName}/src/models`)
        await createDirectory(`${appName}/src/routes`)
        await createDirectory(`${appName}/configs`)
        await createDirectory(`${appName}/public`)

        // Create files

        await createResources(appName, "users", options)
        await createFile(`${appName}/src/middlewares/error.middleware${getFilesExtention(options)}`, errorMiddlewareTemplate())
        await createFile(`${appName}/index${getFilesExtention(options)}`, indexTemplate());
        await createFile(`${appName}/src/app${getFilesExtention(options)}`, appTemplate());
        await exec(`cd ${appName} && npm init -y`)

    } catch (error: any) {
        console.log(chalk.red("🚨 " + error.message));
        return
    }

}



