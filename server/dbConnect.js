const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017/mydatabase"; // Replace with your actual DB name
const client = new MongoClient(uri);

async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB successfully!");
        await addUser();
    } catch (err) {
        console.error("Connection failed:", err);
    }
}

connectDB();

      
async function addUser() {
    try {
        const db = client.db("mydatabase");
        const users = db.collection("users");

        const result = await users.insertOne({ name: "Yusuf", joined: new Date() });
        console.log("User inserted:", result.insertedId);
    } catch (err) {
        console.error("Insert failed:", err.message);
    }
}