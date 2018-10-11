import config from '../config.json';
import Mongo from 'mongodb';

export default callback => {

	var uri = `mongodb+srv://${config.mongoUser}:${config.mongoPassword}@${config.mongoConnection}`;

	var connectionObj = {
		reconnectTries: Number.MAX_VALUE,
		reconnectInterval: 120
	}


	console.log(Mongo.MongoClient);

	Mongo.MongoClient.connect(uri, connectionObj, function(err, client) {
  if(err) {
		console.log(err)
		throw err
	}
	else {
		callback(client);
	}
});

}
