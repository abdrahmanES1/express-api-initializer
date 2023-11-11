import chalk from "chalk";
import { existsSync } from "fs";
import { writeFile } from "fs/promises";

export default async (appName: string, fileType: string, fileName: string, options: any, fileContent = "") => {
    const getFilesExtention = (options: any) => options?.typescript ? ".ts" : ".js";

    if(existsSync(`${appName}/src/${fileType}s`)){
        await writeFile(`${appName}/src/${fileType}s/${fileName}.${fileType}${getFilesExtention(options)}`, fileContent).then(() => {
            console.log(chalk.green(`🚀 CREATE /src/${fileType}s/${fileName}.${fileType}${getFilesExtention(options)}`));
        })
    }else
    {
        console.log(chalk.red(`🚨 FAILED /src/${fileType}s/${fileName}.${fileType}${getFilesExtention(options)}`));
        console.log(chalk.red(`🚦 Initilize Project first`));
        return 
    }
    
}