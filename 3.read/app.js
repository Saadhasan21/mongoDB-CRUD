var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/company_db"; 
MongoClient.connect(url, function(err, client) { 
const db = client.db("company_db");
if (err) throw err; 
var query = { customer_name: "venkat" }; 
db.collection("customers").find(query).toArray(function(err, result) { 
if (err) throw err; 
console.log(result); 
client.close(); 
}); 
});
