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
    /*
    getClient: async function (values) {
        const client = getClient();
        return await client.connect()
    },
    */
    async getClientNotSP() {
        try {
            return await connection
                .then(
                    (mClient) =>
                        // get a handle on the db
                        mClient.db()
                    // return db
                )
                .then(
                    async (db) =>
                        // add our values to db (they are always new)
                        db.collection("Client").find({ _savedToSP: false })
                    // console.log(err)
                    // console.log(doc)
                )
                .then(async (doc) => doc)
        } catch (err) {
            console.log(err)
        }
    },
    async getFormNotSP() {
        try {
            return await connection
                .then(
                    (mClient) =>
                        // get a handle on the db
                        mClient.db()
                    // return db
                )
                .then(
                    async (db) =>
                        // add our values to db (they are always new)
                        db.collection("Organization").find({ _savedToSP: false })
                    // console.log(err)
                    // console.log(doc)
                )
                .then((doc) => doc)
        } catch (err) {
            console.log(err)
        }
    },
    async findFormByApplicationID(appID) {
        try {
            return await connection
                .then(
                    (mClient) =>
                        // get a handle on the db
                        mClient.db()
                    // return db
                )
                .then(
                    async (db) =>
                        // add our values to db (they are always new)
                        db.collection("Organization").find({ _id: appID })
                    // console.log(err)
                    // console.log(doc)
                )
                .then((doc) => doc)
        } catch (err) {
            console.log(err)
        }
    },
    async checkForPreviousOrganizationApplications(businessNum) {
        try {
            return await connection
                .then(
                    (mClient) =>
                        // get a handle on the db
                        mClient.db()
                    // return db
                )
                .then(async (db) =>
                    // add our values to db (they are always new)
                    db
                        .collection("Organization")
                        .aggregate([{ $match: { businessNumber: businessNum } }, { $group: { _id: "$_id" } }])
                        .toArray()
                )
                .then(async (doc) => {
                    if (doc.length > 1) {
                        return true
                    }
                    return false
                })
        } catch (err) {
            console.log(err)
        }
    },
    async checkForDuplicateClients(lastName, DOB) {
        try {
            const regex = new RegExp(lastName, "i")
            console.log(regex)
            return await connection
                .then(
                    (mClient) =>
                        // get a handle on the db
                        mClient.db()
                    // return db
                )
                .then(
                    async (db) =>
                        // add our values to db (they are always new)
                        db
                            .collection("Client")
                            .aggregate([{ $match: { clientLastName: regex, clientDOB: DOB } }, { $group: { _id: "$applicationId" } }])
                            .toArray()
                    // console.log(err)
                    // console.log(doc)
                )
                .then(async (doc) => doc)
        } catch (err) {
            console.log(err)
        }
    },
    async updatePotentialDuplicate(collection, _id, duplicate) {
        try {
            if (collection === "Organization") {
                return await connection
                    .then(
                        (mClient) =>
                            // get a handle on the db
                            mClient.db()
                        // return db
                    )
                    .then(
                        async (db) =>
                            // add our values to db (they are always new)
                            db.collection(collection).updateOne(
                                {
                                    _id
                                },
                                {
                                    $set: {
                                        potentialDuplicate: duplicate
                                    }
                                },
                                {
                                    upsert: false
                                }
                            )
                        // console.log(err)
                        // console.log(doc)
                    )
                    .then((result) => result)
            }
        } catch (err) {
            console.log(err)
        }

        // eslint-disable-next-line no-return-await
        return await connection
            .then(
                (mClient) =>
                    // get a handle on the db
                    mClient.db()
                // return db
            )
            .then(
                async (db) =>
                    // add our values to db (they are always new)
                    db.collection(collection).updateOne(
                        {
                            applicationId: _id
                        },
                        {
                            $set: {
                                potentialDuplicate: duplicate
                            }
                        },
                        {
                            upsert: false
                        }
                    )
                // console.log(err)
                // console.log(doc)
            )
            .then((result) => result)
    },
    async updateSavedToSP(collection, _id, _spID) {
        try {
            return await connection
                .then(
                    (mClient) =>
                        // get a handle on the db
                        mClient.db()
                    // return db
                )
                .then(
                    async (db) =>
                        // add our values to db (they are always new)
                        db.collection(collection).updateOne(
                            {
                                _id
                            },
                            {
                                $set: {
                                    _savedToSP: true,
                                    _spID
                                }
                            },
                            {
                                upsert: false
                            }
                        )
                    // console.log(err)
                    // console.log(doc)
                )
                .then((result) => result)
        } catch (err) {
            console.log(err)
        }
    }
    /*
    printValues: function(collection) {
        const client = new MongoClient(uri, { useUnifiedTopology: true });
        connection.then(mc => {
            const db = mc.db("test");
            let cursor = db.collection(collection).find({});

            const iterateFunc = doc => console.log(JSON.stringify(doc, null, 4));
            const errorFunc = error => console.log(error);
            
            cursor.forEach(iterateFunc, errorFunc);
        });
    }
    */
}
