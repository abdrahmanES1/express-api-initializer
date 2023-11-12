import createDirectory from "./createDirectory";
export default function createDirectories(structure, directoryPath) {
    for (const key in structure) {
        const path = directoryPath + '/' + key;
        createDirectory(path);
        if (typeof structure[key] === 'object') {
            createDirectories(structure[key], path);
        }
    }
}