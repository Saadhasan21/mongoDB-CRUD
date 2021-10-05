var MongoClient = require("mongodb").MongoClient;
 var url = "mongodb://localhost:27017/company_db";
 MongoClient.connect(url, function (err, client) {
   if (err) throw err;
   const db = client.db("company_db");
   db.collection("customers").updateOne({customer_name:"shan"},{$set:{customer_name:"Saad Hasan"}}, function (err, res) {
     if (err) throw err;
     console.log("updated");
     client.close();
   });
 });