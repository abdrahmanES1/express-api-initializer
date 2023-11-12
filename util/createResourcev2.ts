import createFile from "./createFilev2";
export default async (appName: string, fileType: string, fileName: string, options: any, fileContent = "") => {
    const getFilesExtention = (options: any) => options?.typescript ? ".ts" : ".js";
    
    if (fileType == "config") {
        await createFile(`${appName}/${fileType}s/${fileName}.${fileType}${getFilesExtention(options)}`, fileContent)
    } else {
        await createFile(`${appName}/src/${fileType}s/${fileName}.${fileType}${getFilesExtention(options)}`, fileContent)
    }


}