import { existsSync, promises as fs } from 'fs';

async function createDirectory(directoryPath: string): Promise<void> {
    if (!await existsSync(directoryPath)) {
        await fs.mkdir(directoryPath, { recursive: true });
    }
}
export default createDirectory;