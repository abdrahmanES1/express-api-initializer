import { routeTemplate, controllerTemplate, schemaTemplate, modelTemplate, middlewareTemplate } from '../templates'
import { existsSync } from 'fs'
import chalk from 'chalk'
import createResource from './createResource'

export default async (appName: string, fileName: string, options: any) => {
    if (existsSync(`${appName}/src`)) {
        await Promise.race(
            [
                createResource(appName, "controller", fileName, options, controllerTemplate(fileName)),
                createResource(appName, "middleware", fileName, options, middlewareTemplate(fileName)),
                createResource(appName, "model", fileName, options,modelTemplate(fileName)),
                createResource(appName, "route", fileName, options, routeTemplate(fileName)),
                createResource(appName, "schema", fileName, options, schemaTemplate(fileName)),
                // createFile(appName, "view", fileName, options),
            ]
        )
    } else {
        console.log(chalk.red(`🚨 FAILED Creating Resource`));
        console.log(chalk.underline.cyan(`🚦 Initilize Project first`));
        return 
    }

}



