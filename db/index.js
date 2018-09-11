import config from '../config.json';

export default callback => {

	var MongoClient = require('mongodb').MongoClient;
	var uri = `mongodb+srv://${config.mongoUser}:${config.mongoPassword}@${config.mongoConnection}`;

	var connectionObj = {
		reconnectTries: Number.MAX_VALUE,
		reconnectInterval: 120
	}

	MongoClient.connect(uri, connectionObj, function(err, client) {
  if(err) {
		console.log(err)
		throw err
	}
	else {
		callback(client);
	}
});

}
