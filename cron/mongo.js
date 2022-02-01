
const MongoClient = require('mongodb').MongoClient;

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
    /*
    getClient: async function (values) {
        const client = getClient();
        return await client.connect()
    },
    */
    getClientNotSP: async function () {
        return await connection
        .then(mClient => {
            // get a handle on the db
            return mClient.db();
            //return db
        })
        .then(async db => {
        // add our values to db (they are always new)
            return db.collection("Client").find({_savedToSP: false})
                //console.log(err)
                //console.log(doc)
        }).then(async doc =>{
            return doc
        })    
    },
    getFormNotSP: async function () {
        return await connection
        .then(mClient => {
            // get a handle on the db
            return mClient.db();
            //return db
        })
        .then(async db => {
        // add our values to db (they are always new)
            return db.collection("Organization").find({_savedToSP: false})
                //console.log(err)
                //console.log(doc)
        }).then(doc =>{
            return doc
        })          
    },
    findFormByApplicationID: async function (appID) {
        return await connection
        .then(mClient => {
            // get a handle on the db
            return mClient.db();
            //return db
        })
        .then(async db => {
        // add our values to db (they are always new)
            return db.collection("Organization").find({_id: appID})
                //console.log(err)
                //console.log(doc)
        }).then(doc =>{
            return doc
        })          
    },
    updateSavedToSP: async function(collection,_id, _spID){
        return await connection
        .then(mClient => {
            // get a handle on the db
            return mClient.db();
            //return db
        })
        .then(async db => {
        // add our values to db (they are always new)
            return db.collection(collection).updateOne(
                {
                    _id: _id
                },
                { 
                    $set : {
                    _savedToSP: true,
                    _spID: _spID
                    }
                },
                {
                    upsert: false
                }

            )
                //console.log(err)
                //console.log(doc)
        }).then(result =>{
            return result
        })     
    },
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
};