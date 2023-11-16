
import { existsSync, rmSync, } from 'fs'

import creatFile from '../../lib/createFile'

describe("Test creatApp Function", () => {
    const fileName = "unit-test-file.js"
    const filePath = process.cwd() + "/" + fileName;

    beforeAll(async () => {
        if (existsSync(filePath)) {
            await rmSync(filePath, { recursive: true, force: true });
        }
    })

    it('should Create a File', async () => {
        await creatFile(filePath, "")
        expect(existsSync(filePath)).toBeTruthy()
    })


    afterAll(async () => {
        if (existsSync(filePath)) {
            await rmSync(filePath, { recursive: true, force: true });
        }
    })
})