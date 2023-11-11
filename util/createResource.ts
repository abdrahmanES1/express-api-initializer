
import createFile from './createFile'
import { routeTemplate, controllerTemplate } from '../templates/js'

export default async (appName: string, fileName: string, options: any) => {
    await Promise.race(
        [
            createFile(appName, "controller", fileName, options, controllerTemplate(fileName)),
            createFile(appName, "middleware", fileName, options),
            createFile(appName, "model", fileName, options),
            createFile(appName, "route", fileName, options, routeTemplate(fileName)),
            // createFile(appName, "view", fileName, options),
        ]
    )
}



