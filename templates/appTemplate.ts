export default function (): string {
  let template = `
const express = require('express');
const cors = require('cors');
const compression = require('compression')
const mongoSanitize = require('express-mongo-sanitize');
const morgan = require('morgan');
const helmet = require('helmet');
const connectDB = require('../configs/database.config')

require('dotenv').config({ path: __dirname + '/../.env' })


const PORT = process.env.PORT || 4000;

function createServer() {
    const app = express();
    app.use(express.json());
    app.use(helmet());
    
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    }

    app.use(cors({ origin: process.env.CLIENT_URL }))

    app.use(compression())

    app.use(
        mongoSanitize({
            replaceWith: '_',
        }),
    );

    if (process.env.NODE_ENV !== 'test') {
        connectDB(async () => {
            await app.listen(PORT, async () => {
                console.log("server running in  http://localhost:"+PORT+"/api/");
            })
        });
    }

    return app
}

module.exports = createServer;
    `;

  return template;
}
