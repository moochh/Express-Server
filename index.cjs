// Import http library
const http = require('http');
const express = require('express');
const app = express();

// use env variable to define tcp/ip port with a default
const PORT = process.env.PORT || 8080;

app.use(express.json());

//create our server object
const server = http.createServer();

// Endpoint
app.get('/users', (req, res) => {
	const users = [
		{
			id: 1,
			name: 'John Doe',
			email: 'johndoe@example.com'
		},
		{
			id: 2,
			name: 'Jane Doe',
			email: 'janedoe@example.com'
		},
		{
			id: 3,
			name: 'Bob Smith',
			email: 'bobsmith@example.com'
		}
	];
	res.json(users);
});

// We define a function that runs in response a request event
server.on('request', (request, response) => {
	// handle request based on method then URL
	response.statusCode = 200;
	response.write('Hello World!');
	response.end();
});

// get the server to start listening
server.listen(PORT, (err) => {
	// error checking
	err ? console.error(err) : console.log(`listening on port ${PORT}`);
});
