
import { existsSync, rmSync } from 'fs'

import createApp from '../../lib/createApp'
import createResource from '../../lib/createResource'
import createResources from '../../lib/createResources'

describe("e2e testing", () => {
    const appName: string = "e2e-test-app"
    const appPath: string = process.cwd() + "/" + appName;
    const options: any = {}
    const filesExtention: string = options?.typescript ? ".ts" : ".js";

    beforeAll(async () => {
        if (existsSync(appPath)) {
            await rmSync(appPath, { recursive: true, force: true });
        }
    })

    describe('Inilialize a App', () => {
        it('should Create a app', async () => {
            await createApp(appName, options);
            expect(existsSync(appPath)).toBeTruthy()
            expect(existsSync(appPath + "/src/controllers/users.controller" + filesExtention)).toBeTruthy()
            expect(existsSync(appPath + "/src/models/users.model" + filesExtention)).toBeTruthy()
            expect(existsSync(appPath + "/src/routes/users.route" + filesExtention)).toBeTruthy()

        })
    })

    describe('Generate Resources', () => {
        describe('Generate Resource', () => {
            it('should Create Resource by given name : products', async () => {
                await createResources(appName, "products", options)
                expect(existsSync(appPath + "/src/controllers/products.controller" + filesExtention)).toBeTruthy()
                expect(existsSync(appPath + "/src/models/products.model" + filesExtention)).toBeTruthy()
                expect(existsSync(appPath + "/src/routes/products.route" + filesExtention)).toBeTruthy()
            })
        })

        describe('Generate Controller', () => {
            it('should Create Controller by given name', async () => {
                await createResource(appName, 'controller', 'articles', options)
                expect(existsSync(appPath + "/src/controllers/articles.controller" + filesExtention)).toBeTruthy()
            })
        })

        describe('Generate Model', () => {
            it('should Create Model by given name', async () => {
                await createResource(appName, 'model', 'articles', options)
                expect(existsSync(appPath + "/src/models/articles.model" + filesExtention)).toBeTruthy()
            })
        })

        describe('Generate Router', () => {
            it('should Create Router by given name', async () => {
                await createResource(appName, 'route', 'articles', options)
                expect(existsSync(appPath + "/src/routes/articles.route" + filesExtention)).toBeTruthy()
            })
        })
        describe('Generate Middleware', () => {
            it('should Create Middleware by given name', async () => {
                await createResource(appName, 'middleware', 'articles', options)
                expect(existsSync(appPath + "/src/middlewares/articles.middleware" + filesExtention)).toBeTruthy()
            })
        })

        describe('Generate Config', () => {
            it('should Create Config by given name', async () => {
                await createResource(appName, 'config', 'articles', options)
                expect(existsSync(appPath + "/configs/articles.config" + filesExtention)).toBeTruthy()
            })
        })

    })

    afterAll(async () => {
        if (existsSync(appPath)) {
            await rmSync(appPath, { recursive: true, force: true });
        }
    })
})