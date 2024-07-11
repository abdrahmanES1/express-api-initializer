
export default function (): string {
  return `
const mongoose = require("mongoose");
require('dotenv').config({ path: __dirname + "../../.env" });

const connectDB = async (fn) => {
    let MONGOO_DB_URL =  process.env.MONGOO_DB_URL

    // if (process.env.NODE_ENV === 'development') {
    //     MONGOO_DB_URL = process.env.MONGOO_DEV_DB_URL
    // }
    await mongoose.connect(MONGOO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => { console.log("MongoDB Connected  ..."); fn() })
        .catch((err) => {
            console.error(err);
        })
};

module.exports = connectDB;
`;
}
