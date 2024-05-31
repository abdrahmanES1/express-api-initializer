
const express = require('express');

const PORT = process.env.PORT || 4000;

function createServer() {
    const app = express();
    app.use(express.json());

    app.listen(PORT, async () => {
        console.log("server running in  http://localhost:"+PORT+"/api/");
    })

    return app
}

module.exports = createServer;
    