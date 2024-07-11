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
      "express-async-handler": "^1.2.0",
      "mongoose": "^6.5.2",
      "helmet": "^5.1.1",
      "cors": "^2.8.5",
      "express-mongo-sanitize": "^2.2.0",
      "http-status-codes": "^2.3.0",
      "compression": "^1.7.4",
      "dotenv": "^16.0.1",
      "zod": "^3.23.8"
    },
    "devDependencies": {
      "morgan": "^1.10.0"
    }
}`;
}
