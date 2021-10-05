const { MongoClient } = require("mongodb");
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = "company_db";
async function main(){
    client.connect();
    console.log("connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection('customers');
    return "done.";
}
main().then(console.log).catch(console.error).finally(() => client.close());