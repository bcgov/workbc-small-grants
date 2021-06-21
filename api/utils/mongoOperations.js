
const MongoClient = require('mongodb').MongoClient;
const strings = require("./strings");

let uri;
if (!process.env.MONGO_USERNAME  || !process.env.MONGO_PASSWORD){
    uri = `mongodb://${process.env.MONGO_CONNECTION_URI || 'localhost'}/${process.env.MONGO_DB_NAME || 'test'}`;
} else {
    uri = `mongodb://${process.env.MONGO_USERNAME || "superuser"}:${process.env.MONGO_PASSWORD || "password"}@${process.env.MONGO_CONNECTION_URI || 'localhost'}/${process.env.MONGO_DB_NAME || 'test'}`;
}

const client = new MongoClient(uri, { useUnifiedTopology: true });
var connection = client.connect()

// Private function to get a working client
function getClient() {
    // i.e: 'mongodb://superuser:password@localhost/test'
    // don't have to do it this way to connect locally 
    // docs @ http://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html
    let client = new MongoClient(uri, { useUnifiedTopology: true });
    return client;
}



module.exports = {
    saveReport: async function (items) {
        return await connection
        .then(mClient => {
            // get a handle on the db
            return mClient.db();
        }).then(async db => {
            // add our values to db (they are always new)
            return db.collection("Reports").insertOne(items)
        });
    },
};