import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import initDb from './db';
import api from './api';
import config from './config.json';



let app = express();
app.server = http.createServer(app);

app.use(bodyParser.json());

// connect to db
initDb( db => {
	// api router
	app.use('/api', api({ config, db }));

	app.server.listen(process.env.PORT || config.port, () => {
		console.log(`Started on port ${app.server.address().port}`);
	});
});