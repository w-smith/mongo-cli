

var mongo = require("mongodb").MongoClient;
// var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
  if(allChoice == "all"){
    collection.find().toArray(function(err, doc){
      console.log(doc);
    });
  } else {
    console.log("Aw, you don't want to see the restaurants?");
  }
});


mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  var which = prompt("Which restaurant would you like to see? ");
  collection.find({name: which}).toArray(function(err,doc){
  	if(err) console.log('There has been an error.',err);
  	if(doc[0]) console.log(doc);
  	else console.log("None found");
  });
 });


mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  var myRestaurant = prompt("Name? ");
  var myAddress = prompt("Address? ");
  var zip = prompt("Zip?");
  collection.insert({
  	name:myRestaurant, 
  	address:{
  		street: myAddress, 
  		zipcode: zip
  		}
  	});
  	});
	function(err, res){
		if(err) console.log('Error', err);
		else console.log(res);
	}