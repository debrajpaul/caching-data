import {} from "dotenv/config";
import { MongoClient } from "mongodb";
import MongoUriBuilder from "mongo-uri-builder";

let cons = {}; // stored connections (possibly of multiple databases)

let {
    MONGO_HOST,
    MONGO_PORT,
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_DEFAULT_DB
} = process.env;

if (!MONGO_HOST) {
    log(
        "app:agds: dbc.js",
        "FATAL ERROR : MONGO_HOST is not defind! Please check .env setting"
    );
    process.exit(1);
} else if (!MONGO_PORT) {
    log(
        "app:agds: dbc.js",
        "FATAL ERROR : MONGO_PORT is not defind! Please check .env setting"
    );
    process.exit(1);
} else if (!MONGO_DEFAULT_DB) {
    log(
        "app:agds: dbc.js",
        "FATAL ERROR : MONGO_DEFAULT_DB is not defind! Please check .env setting"
    );
    process.exit(1);
}

let commonConnectionSettings = {
    host: MONGO_HOST,
    port: MONGO_PORT,
    username: MONGO_USERNAME,
    password: MONGO_PASSWORD
};

// connect method (can connect to multiple databases)
export default function connect(dbName = "") {
    return new Promise((resolve, reject) => {
        let databaseName = dbName || MONGO_DEFAULT_DB;

        // check if db connection is already available
        if (typeof cons[databaseName] !== "undefined") {
            resolve(cons[databaseName]);
            return;
        }

        // create  new connection
        MongoClient.connect(
            MongoUriBuilder({
                ...commonConnectionSettings,
                database: databaseName
            }),
            { useNewUrlParser: true }, // to supress deprecation warning
            (err, newDbConnection) => {
                if (err) {
                    reject(err);
                    return;
                }
                // save connection for later
                cons[databaseName] = newDbConnection.db(databaseName);
                resolve(cons[databaseName]);
            }
        );
    });
}
