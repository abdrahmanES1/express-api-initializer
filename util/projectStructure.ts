import { DirectoryStructure } from "../types";



export default function projectStructure(projectName: string, options: object): DirectoryStructure {
    const getFilesExtention = (options: any) => options?.typescript ? ".ts" : ".js" as string;

    return {
        [projectName]: {
            config: {

            },
            src: {
                controllers: {
                    ["users.controller" + `${getFilesExtention(options)}`]: "users controller"
                },
                models: {
                    ["users.model" + `${getFilesExtention(options)}`]: "users model"
                },
                routes: {
                    ["users.route" + `${getFilesExtention(options)}`]: "users route"
                },
                middlewares: {
                    ["users.middleware" + `${getFilesExtention(options)}`]: "users middleware"
                },
                ["app" + `${getFilesExtention(options)}`]: ""
            },
            utils: {

            },
            ["index" + `${getFilesExtention(options)}`]: ""

        }
    }


}