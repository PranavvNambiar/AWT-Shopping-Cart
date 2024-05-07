const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

const url = process.env.MONGODB_URL;

const client = new MongoClient(url);

const run = async () => {
    try {
        await client.connect();
        console.log("Connected to DB");
        const db = client.db("student")
        const studentDocument = {
            name: 'Pranav',
            age: '21',
            grades: [90, 80, 85],
            address: {
                street: '123 Street St.',
                city: 'Mumbai',
                state: 'MH',
                zip: '400050'
            }
        };
        const result = await db.collection("student").insertOne(studentDocument)
        console.log(`Student inserted with id: ${result.insertedId}`);
    } catch (error) {
        console.error(error);
    }
    finally {
        client.close();
    }
}
run();
