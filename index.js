// const express = require('express');
// const app = express();
// const cors = require('cors');
// const swaggerUi = require('swagger-ui-express');
// const swaggerJsDoc = require('swagger-jsdoc');

// app.use(cors());
// app.use(express.json());

// // Swagger Configuration
// const swaggerOptions = {
//   definition: {
//     openapi: '3.0.0',
//     info: {
//       title: 'User Management API',
//       version: '1.0.0',
//       description: 'A simple CRUD API for managing users',
//     },
//     servers: [
//       {
//         url: 'http://localhost:3001', // Your backend's base URL
//       },
//     ],
//   },
//   apis: ['./index.js'], // Path to your API documentation (this file)
// };

// // Initialize Swagger Docs
// const swaggerDocs = swaggerJsDoc(swaggerOptions);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// // Simulated database
// let users = [
//   { id: 1, name: 'John Doe', email: 'john@example.com' },
//   { id: 2, name: 'Muiz Safdar', email: 'muiz@example.com' },
//   { id: 3, name: 'Ali Imran', email: 'ali@example.com' },
// ];

// // Routes

// /**
//  * @swagger
//  * /users:
//  *   get:
//  *     summary: Get all users
//  *     responses:
//  *       200:
//  *         description: Returns a list of all users
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 type: object
//  *                 properties:
//  *                   id:
//  *                     type: integer
//  *                   name:
//  *                     type: string
//  *                   email:
//  *                     type: string
//  */
// app.get('/users', (req, res) => {
//   res.json(users);
// });

// /**
//  * @swagger
//  * /users/{id}:
//  *   get:
//  *     summary: Get a user by ID
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: integer
//  *         description: The user ID
//  *     responses:
//  *       200:
//  *         description: Returns a user by ID
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 id:
//  *                   type: integer
//  *                 name:
//  *                   type: string
//  *                 email:
//  *                   type: string
//  *       404:
//  *         description: User not found
//  */
// app.get('/users/:id', (req, res) => {
//   const userId = parseInt(req.params.id);
//   const user = users.find((u) => u.id === userId);
//   if (!user) return res.status(404).send('User not found');
//   res.json(user);
// });

// /**
//  * @swagger
//  * /users:
//  *   post:
//  *     summary: Create a new user
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               name:
//  *                 type: string
//  *               email:
//  *                 type: string
//  *     responses:
//  *       201:
//  *         description: User created successfully
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 id:
//  *                   type: integer
//  *                 name:
//  *                   type: string
//  *                 email:
//  *                   type: string
//  */
// app.post('/users', (req, res) => {
//   const { name, email } = req.body;
//   const newUser = { id: users.length + 1, name, email };
//   users.push(newUser);
//   res.status(201).json(newUser);
// });

// /**
//  * @swagger
//  * /users/{id}:
//  *   put:
//  *     summary: Update a user
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: integer
//  *         description: The user ID
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               name:
//  *                 type: string
//  *               email:
//  *                 type: string
//  *     responses:
//  *       200:
//  *         description: User updated successfully
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 id:
//  *                   type: integer
//  *                 name:
//  *                   type: string
//  *                 email:
//  *                   type: string
//  *       404:
//  *         description: User not found
//  */
// app.put('/users/:id', (req, res) => {
//   const userId = parseInt(req.params.id);
//   const user = users.find((u) => u.id === userId);
//   if (!user) return res.status(404).send('User not found');

//   const { name, email } = req.body;
//   if (name) user.name = name;
//   if (email) user.email = email;

//   res.json(user);
// });

// /**
//  * @swagger
//  * /users/{id}:
//  *   delete:
//  *     summary: Delete a user
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: integer
//  *         description: The user ID
//  *     responses:
//  *       204:
//  *         description: User deleted successfully
//  *       404:
//  *         description: User not found
//  */
// app.delete('/users/:id', (req, res) => {
//   const userId = parseInt(req.params.id);
//   const userIndex = users.findIndex((u) => u.id === userId);
//   if (userIndex === -1) return res.status(404).send('User not found');

//   users.splice(userIndex, 1);
//   res.status(204).send();
// });

// // Start the server
// app.listen(3001, () => console.log('Server running on http://localhost:3001'));


const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'API documentation',
    },
  },
  apis: ['./routes/*.js'], // Path to your route files with Swagger annotations
}

const swaggerSpecs = swaggerJsdoc(swaggerOptions);

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Use product routes
app.use('/api', productRoutes);

// Swagger UI route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


