import chalk from "chalk";
import { writeFile } from "fs/promises";

export default async (appName: string, fileType: string, fileName: string, options: any, fileContent = "") => {
    const getFilesExtention = (options: any) => options?.typescript ? ".ts" : ".js";

    await writeFile(`${appName}/src/${fileType}s/${fileName}.${fileType}${getFilesExtention(options)}`, fileContent).then(() => {

        console.log(chalk.green(`CREATE /src/${fileType}s/${fileName}.${fileType}${getFilesExtention(options)}`));

    })

}