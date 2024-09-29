// Import http library
const express = require('express');
const app = express();
const cors = require('cors');

// use env variable to define tcp/ip port with a default
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Server start
app.get('/', (req, res) => {
	res.send('Server running...');
});

// Endpoint
const usersEndpoint =
	'https://randomuser.me/api/?inc=name,gender,email,dob,login&nat=us&results=';

app.get('/users', async (req, res) => {
	const numberOfUsers = Math.floor(Math.random() * 5) + 1;
	const users = [];

	const response = await fetch(usersEndpoint + numberOfUsers);
	const data = await response.json();

	data.results.forEach((user) => {
		users.push({
			name: user.name,
			gender: user.gender,
			email: user.email,
			dob: user.dob,
			id: user.login.uuid
		});
	});

	res.json(users);
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
