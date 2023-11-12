import { existsSync, mkdirSync } from 'fs'
function createDirectory(directoryPath) {
    if (!existsSync(directoryPath)) {
        mkdirSync(directoryPath, { recursive: true });
    }
}

export default createDirectory;