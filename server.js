const MongoClient = require('mongodb').MongoClient;
const Password = "root";
// replace the uri string with your connection string.
const uri = "mongodb+srv://root:<"+Password+">@snorrecluster-gaqbf.mongodb.net/test?retryWrites=true/any_database?authSource=admin&replicaSet=xyz"
MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   client.close();
});
