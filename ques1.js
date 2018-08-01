/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/music";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
/*

/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  dbo.createCollection("songdetails", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
/*

 /*var MongoClient = require('mongodb').MongoClient;
 var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  var myobj = [
  { songname: 'Thaniye Thananthaniye', film: 'Rhythm', MusicDirector: 'A.R.Rahman', Singer: 'Shankar mahadevan'},
  { songname: 'Evano Oruvan', film: 'Alai Payuthey', MusicDirector: 'A.R.Rahman', Singer: 'Swarnalatha'},
  { songname: 'Roja Poonthottam', film: 'Kannukkul Nilavu', MusicDirector: 'Ilaiyaraaja', Singer: 'Unnikrishnan,Anuradha Sriram'},
  { songname: 'Vennilavae Vennilavae Vinnaithaandi', film: 'Minsara Kanavu', MusicDirector: 'A.R.Rahman', Singer: 'Hariharan,Sadhana Sargam'},
  { songname: 'Sollamal Thottu Chellum Thendral', film: 'Dheena', MusicDirector: 'Yuvan Shankar Raja', Singer: 'Hariharan'}];

  dbo.collection("songdetails").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});*/
/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  dbo.collection("songdetails").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
*/

/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  var mysort = { MusicDirector:"A.R.Rahman" };
  dbo.collection("songdetails").find().sort(mysort).toArray(function(err, result) {
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
  var dbo = db.db("music");
  var query = { MusicDirector: "A.R.Rahman" };
  dbo.collection("songdetails").find(query).toArray(function(err, result) {
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
  var dbo = db.db("music");
  //Find all documents in the customers collection:
  dbo.collection("songdetails").find(({MusicDirector : 'A.R.Rahman'},{Singer : 'Unnikrishnan'})).toArray(function(err, result) {
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
  var dbo = db.db("music");
  var myquery = {SongName : "Roja Poonthottam" };
  dbo.collection("NodeSongDetail").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});
*/

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  var myobj = {SongName : "Unnale en naalum en jeevan"};
  dbo.collection("songdetails").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
