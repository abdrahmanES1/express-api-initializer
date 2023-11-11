
import createFile from './createFile'
import { routeTemplate, controllerTemplate } from '../templates/js'
import { existsSync } from 'fs'
import chalk from 'chalk'

export default async (appName: string, fileName: string, options: any) => {

    if (existsSync(`${appName}/src`)) {
        await Promise.race(
            [
                createFile(appName, "controller", fileName, options, controllerTemplate(fileName)),
                createFile(appName, "middleware", fileName, options),
                createFile(appName, "model", fileName, options),
                createFile(appName, "route", fileName, options, routeTemplate(fileName)),
                // createFile(appName, "view", fileName, options),
            ]
        )
    } else {
        console.log(chalk.red(`🚨 FAILED Creating Resource`));
        console.log(chalk.underline.cyan(`🚦 Initilize Project first`));
        return 
    }

}



