const knex = require('../db');

// Controller functions
exports.createProduct = async (req, res) => {
  try {
    const productData = req.body; // Input fields from request body
    await knex('products').insert(productData);
    res.status(201).json({ message: 'Product created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await knex('products').select('*');
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await knex('products').where({ id }).first();
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product', error });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productData = req.body;
    await knex('products').where({ id }).update(productData);
    res.status(200).json({ message: 'Product updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await knex('products').where({ id }).del();
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error });
  }
};
