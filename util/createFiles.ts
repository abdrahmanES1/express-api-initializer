import createDirectory from "./createDirectory";
import { writeFile } from 'fs'
import createDirectories from './createDirectories'
export default function createFiles(structure, directoryPath) {
    for (const key in structure) {
      const path = directoryPath + '/' + key;
      if (typeof structure[key] === 'string') {
        createDirectory(path);
        writeFile(path, structure[key], (err) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log('File created:', path);
        });
      } else if (typeof structure[key] === 'object') {
        createDirectories(structure[key], path);
      }
    }
  }