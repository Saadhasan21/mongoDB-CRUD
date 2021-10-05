var MongoClient = require('mongodb').MongoClient; 
 var url = "mongodb://localhost:27017/company_db"; 
 MongoClient.connect(url, function(err, client) { 
 const db = client.db("company_db");
 if (err) throw err; 
 var myquery = { customer_name: 'Saad Hasan' }; 
 db.collection("customers").deleteOne(myquery, function(err, obj) { 
 if (err) throw err; 
 console.log(obj.result + " record(s) deleted"); 
 client.close(); 
 }); 
 });
