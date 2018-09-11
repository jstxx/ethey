import { version } from '../package.json';
import { Router } from 'express';
import config from '../config.json';
import fetch from 'node-fetch';

export default ({ config, db }) => {
	let api = Router();

	api.get('/', (req, res) => {
		res.json({ version });
	});

	api.get('/eth', function(req, res, next) {

		fetch(config.transactionProvider + req.query.address +
			'&startblock=0&endblock=99999999&sort=asc&apikey=' + config.etherscanKey, {
			method: 'GET', 
		}).then(function(response) { 
			return response.json();
		}).then(function(j) {
			var dbo = db.db("transactions");
			var txObject = {
				address: req.query.address,
				transactions: j
			};

		  dbo.collection("transactions").insertOne(txObject, function(err, res) {
		    if (err) throw err;
		    console.log("transaction inserted", j);
		  });

			return res.status(200).send(j);

			}).catch(function() {
				return res.status(500).send();
			});
	});

	return api;
}
