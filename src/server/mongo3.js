const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

const url = process.env.MONGODB_URL;

const client = new MongoClient(url);

const findDocuments = async (collection, query) => {
    return collection.find(query).toArray();
}
const deleteDocuments = async (type, collection, query) => {
    if (type === 1) {
        return collection.deleteOne(query);
    }
    else {
        return collection.deleteMany(query);
    }
}
const updateDocuments = async (type, collection, query, update) => {
    if (type === 1) {
        return collection.updateOne(query, { $set: update });
    }
    else {
        return collection.updateMany(query, { $set: update });
    }
}
const run = async () => {
    try {
        await client.connect()
        const db = client.db("student");
        const collection = db.collection("student")
        console.log("Connected to DB");

        //Finding a document
        const foundDocs = await findDocuments(collection, { name: "Pranav" });
        console.log(`Found Documents are: ${foundDocs}`);
        console.log(foundDocs);

        //Deleting a document
        const deleteDoc = await deleteDocuments(1, collection, { name: "Jake" });
        console.log(`${deleteDoc.deletedCount} document(s) has/have been deleted.`);

        //Updating a document
        const updateDoc = await updateDocuments(2, collection, { name: "Pranav" }, { age: 22 });
        console.log(`${updateDoc.modifiedCount} document(s) has/have been updated.`);
    }
    catch (e) {
        console.error(e);
    }
    finally {
        client.close();
    }
}
run()
