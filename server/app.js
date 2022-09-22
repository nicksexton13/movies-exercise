const express = require('express');
var cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;
const knex = require('knex')(
	require('./knexfile.js')[process.env.NODE_ENV || 'development']
);
app.use(express.json());
app.use(cors());

app.get('/movies', (req, res) => {
	knex
		.select('*')
		.from('movies')
		.then((data) => res.json(data))
		.catch((err) =>
			res.status(404).json({
				message:
					'The data you are looking for could not be found. Please try again',
			})
		);
});

app.post('/movies', (req, res) => {
	knex('movies').insert({ title: req.body.title });
	res.status(200).send('We have posted a movie!');
});

app.listen(8080, () => {
	console.log(`Your server is listening on port ${PORT}.`);
});
