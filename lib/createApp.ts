import { exec } from "child_process";
import chalk from "chalk";
import {
  appTemplate,
  indexTemplate,
  errorMiddlewareTemplate,
  packageTemplate,
  validationMiddlewareTemplate,
  envExampleTemplate,
  databaseTemplate,
  errorReponseTemplate
} from "../templates";
import createDirectory from "./createDirectory";
import createFile from "./createFile";
import createResources from "./createResources";

export default async (appName: string, options: any) => {
  const getFilesExtention = (options: any) =>
    options?.typescript ? ".ts" : ".js";
  try {
    // Create Directories

    await createDirectory(`${appName}`);
    await createDirectory(`${appName}/src`);
    await createDirectory(`${appName}/src/controllers`);
    await createDirectory(`${appName}/src/middlewares`);
    await createDirectory(`${appName}/src/models`);
    await createDirectory(`${appName}/src/routes`);
    await createDirectory(`${appName}/src/schemas`);
    await createDirectory(`${appName}/src/utils`);
    await createDirectory(`${appName}/configs`);
    await createDirectory(`${appName}/public`);

    // Create files
    await createFile(
        `${appName}/src/utils/errorResponse${getFilesExtention(options)}`,
        errorReponseTemplate()
      );
    await createFile(
      `${appName}/configs/database.config${getFilesExtention(options)}`,
      databaseTemplate()
    );
    await createResources(appName, "users", options);
    await createFile(
      `${appName}/src/middlewares/error.middleware${getFilesExtention(
        options
      )}`,
      errorMiddlewareTemplate()
    );
    await createFile(
      `${appName}/src/middlewares/validationMiddleware.middleware${getFilesExtention(
        options
      )}`,
      validationMiddlewareTemplate()
    );
    await createFile(
      `${appName}/index${getFilesExtention(options)}`,
      indexTemplate()
    );
    await createFile(
      `${appName}/src/app${getFilesExtention(options)}`,
      appTemplate()
    );
    await createFile(`${appName}/package.json`, packageTemplate(appName));
    await createFile(`${appName}/.env.example`, envExampleTemplate());
    await createFile(`${appName}/.env`, envExampleTemplate());
  } catch (error: any) {
    console.log(chalk.red("🚨 " + error.message));
    return;
  }

  try {
    console.log(chalk.red("🪄 installing packages...."));
    await exec(`cd ${appName} && npm install`);
  } catch (error: any) {
    console.log(chalk.red("🚨 " + error.message));
    return;
  }
};
