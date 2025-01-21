const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'This is the documentation for my API',
    },
  },
  apis: ['./routes/*.js'], // Adjust the path as per your routes
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
