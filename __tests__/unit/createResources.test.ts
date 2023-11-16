import { existsSync } from 'fs'
import createResources from '../../lib/createResources'

describe('Generate Resource Before App Initialization', () => {
    const appName: string = "testPP"
    const appPath: string = process.cwd() + "/" + appName;
    const options: any = {}
    const filesExtention: string = options?.typescript ? ".ts" : ".js";


    it('should Not Create Resource by given name ', async () => {
        await createResources(appName, "products", options)
        expect(await existsSync(appPath + "/src/controllers/products.controller" + filesExtention)).toBeFalsy()
        expect(await existsSync(appPath + "/src/models/products.model" + filesExtention)).toBeFalsy()
        expect( await existsSync(appPath + "/src/routes/products.route" + filesExtention)).toBeFalsy()
    })
})