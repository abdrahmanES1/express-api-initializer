import { routeTemplate, controllerTemplate } from '../templates/js'
import { existsSync } from 'fs'
import chalk from 'chalk'
import createResource from './createResourcev2'

export default async (appName: string, fileName: string, options: any) => {
    if (existsSync(`${appName}/src`)) {
        await Promise.race(
            [
                createResource(appName, "controller", fileName, options, controllerTemplate(fileName)),
                createResource(appName, "middleware", fileName, options),
                createResource(appName, "model", fileName, options),
                createResource(appName, "route", fileName, options, routeTemplate(fileName)),
                // createFile(appName, "view", fileName, options),
            ]
        )
    } else {
        console.log(chalk.red(`🚨 FAILED Creating Resource`));
        console.log(chalk.underline.cyan(`🚦 Initilize Project first`));
        return 
    }

}



