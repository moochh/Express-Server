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

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
