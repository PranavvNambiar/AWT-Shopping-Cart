const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

const url = process.env.MONGODB_URL;

const client = new MongoClient(url);

const run = async () => {
    try {
        await client.connect();
        const db = client.db("student");
        const studentDocuments = [{
            name: 'Pranav',
            age: '21',
            grades: [90, 80, 85],
            address: {
                street: '123 Street St.',
                city: 'Mumbai',
                state: 'MH',
                zip: '400050'
            }
        }, {
            name: 'Pranav',
            age: '21',
            grades: [90, 80, 85],
            address: {
                street: '123 Street St.',
                city: 'Mumbai',
                state: 'MH',
                zip: '400050'
            }
        }, {
            name: 'Pranav',
            age: '21',
            grades: [90, 80, 85],
            address: {
                street: '123 Street St.',
                city: 'Mumbai',
                state: 'MH',
                zip: '400050'
            }
        }];
        const result = await db.collection("student").insertMany(studentDocuments);
        console.log(`${result.insertedCount} documents were inserted into the database`);
    } catch (error) {
        console.error(error);
    }
    finally {
        client.close()
    }
}
run();