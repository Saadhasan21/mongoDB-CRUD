var MongoClient = require("mongodb").MongoClient;
 var url = "mongodb://localhost:27017/company_db";
 MongoClient.connect(url, function (err, client) {
   if (err) throw err;
   var myobj = [
     { customer_id: "vb001", customer_name: "joshua" },
     { customer_id: "vb002", customer_name: "enoch" },
     { customer_id: "vb003", customer_name: "shan" },
     { customer_id: "vb004", customer_name: "venkat" },
     { customer_id: "vb005", customer_name: "shan" },
     { customer_id: "vb006", customer_name: "iliyas" },
     { customer_id: "vb007", customer_name: "desa" },
   ];
   const db = client.db("company_db");
   db.collection("customers").insertMany(myobj, function (err, res) {
     if (err) throw err;
     console.log("Number of records inserted: " + res.insertedCount);
     client.close();
   });
 });
