const { MongoClient } = require("mongodb")

let uri
if (!process.env.MONGO_USERNAME || !process.env.MONGO_PASSWORD) {
    uri = `mongodb://${process.env.MONGO_CONNECTION_URI || "localhost"}/${process.env.MONGO_DB_NAME || "test"}`
} else {
    uri = `mongodb://${process.env.MONGO_USERNAME || "superuser"}:${process.env.MONGO_PASSWORD || "password"}@${
        process.env.MONGO_CONNECTION_URI || "localhost"
    }/${process.env.MONGO_DB_NAME || "test"}`
}

const client = new MongoClient(uri, { useUnifiedTopology: true })
const connection = client.connect()

module.exports = {
    async saveReport(items) {
        // eslint-disable-next-line no-return-await
        return await connection
            .then((mClient) =>
                // get a handle on the db
                mClient.db()
            )
            .then(async (db) =>
                // add our values to db (they are always new)
                db.collection("Reports").insertOne(items)
            )
    },
    async saveClientForm(items) {
        // eslint-disable-next-line no-return-await
        return await connection
            .then((mClient) =>
                // get a handle on the db
                mClient.db()
            )
            .then(async (db) =>
                // add our values to db (they are always new)
                db.collection("Client").insertOne(items)
            )
    },
    async saveOrgForm(items) {
        // eslint-disable-next-line no-return-await
        return await connection
            .then((mClient) =>
                // get a handle on the db
                mClient.db()
            )
            .then(async (db) =>
                // add our values to db (they are always new)
                db.collection("Organization").insertOne(items)
            )
    }
}
