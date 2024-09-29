// Import http library
const express = require('express');
const app = express();

// use env variable to define tcp/ip port with a default
const PORT = process.env.PORT || 8080;

app.use(express.json());

// Server start
app.get('/', (req, res) => {
	res.send('Hello, World!');
});

// Endpoint
const usersEndpoint =
	'https://randomuser.me/api/?inc=name,email,gender,dob&nat=us';

app.get('/users', async (req, res) => {
	const numberOfUsers = Math.floor(Math.random() * 5) + 1;
	const users = [];

	// Fetch users from API
	for (let i = 0; i < numberOfUsers; i++) {
		const user = await fetch(usersEndpoint).then((res) => res.json());
		users.push(user);
	}

	res.json(users);
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
