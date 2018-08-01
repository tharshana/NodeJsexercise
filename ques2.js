/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Nodestudent";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log(" created!");
  db.close();
});
*/
/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Nodestudent");
  dbo.createCollection("Nodestudentmarks", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
*/
/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Nodestudent");
  var myobj =  [{name:"Mala", Mathmarks:45, Englishmarks:53, sciencemarks:72},
  {name:"Vanu", Mathmarks:80, Englishmarks:75, sciencemarks:85},
  {name:"Kala", Mathmarks:32, Englishmarks:46, sciencemarks:53},
  {name:"Aruli", Mathmarks:78, Englishmarks:85, sciencemarks:80},
  {name:"Shayu", Mathmarks:80, Englishmarks:76, sciencemarks:65},
  {name:"Kumaran",Mathmarks:32, Englishmarks:73, sciencemarks:84},
  {name:"Lucky", Mathmarks:66, Englishmarks:90, sciencemarks:45},
  {name:"Gva", Mathmarks:71, Englishmarks:75, sciencemarks:56},
  {name:"Raam", Mathmarks:41, Englishmarks:65, sciencemarks:88}];
  dbo.collection("Nodestudentmarks").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
*/
/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("NodeStudent");
  var myquery = { maths_marks: '45' };
  var newvalues = { $set: {name: "Mala", maths_marks: "51" } };
  dbo.collection("Nodestudentmarks").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
*/

/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("NodeStudent");
  dbo.collection("Nodestudentmarks").find({Mathsmarks:{$gt:'50'}}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
*/

/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("NodeStudent");
  dbo.collection("NodeStudentmathsmarks").find({maths_marks:{$lt:'50'}, english_marks: {$gt:'50'}}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
*/
/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("NodeStudent");
  dbo.collection("NodeStudentmarks").find({maths_marks:{$lt:'40'}, science_marks:{$lt:'40'}}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
*/

/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("NodeStudent");
  dbo.collection("NodeStudentmarks").update({name: "John"}, {$rename: {"english_marks":"science_marks"}}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
*/

/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("NodeStudent");
  dbo.collection("NodeStudentmarks").remove({name: "Kumaran"}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
*/

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
 if (err) throw err;
 var dbo = db.db("NodeStudent");
 dbo.collection("NodeStudentmarks").find({science_marks:''}, {name:'Aruli'}).toArray(function(err, result) {
   if (err) throw err;
   console.log(result);
   db.close();
 });
});
