
import { existsSync, rmSync } from 'fs'

import createApp from '../../lib/createApp'

describe("Test creatApp Function", () => {
    const appName = "unit-test-app"
    const appPath = process.cwd() + "/" + appName;
    const options = {}

    beforeAll(async () => {
        if (existsSync(appPath)) {
            await rmSync(appPath, { recursive: true });
        }
    })

    it('should Create a app', async () => {
        await createApp(appName, options);
        expect(existsSync(appPath)).toBeTruthy()
    })


    afterAll(async () => {
        if (existsSync(appPath)) {
            await rmSync(appPath, { recursive: true });
        }
    })
})