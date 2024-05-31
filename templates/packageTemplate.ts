export default function (appName: string): string {
  return `
{
    "name": "${appName}",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "start": "node index.js"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
      "express": "^4.18.2",
      "express-async-handler": "^1.2.0"
    }
}`
}
