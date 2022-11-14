var MongoClient = require('mongodb').MongoClient
var data = require("./data.js").data

const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)
async function run() {
    try {
        await client.connect();
        var database = client.db("ProjectAvocado");
        database.dropDatabase()
        database = client.db("ProjectAvocado");
        const Avocado = database.collection("Avocado");
        const result = await Avocado.insertOne({ name: "Флафи" });
        console.log(`${result} documents were inserted`);
    } finally {
        await client.close();
    }
}
run()
