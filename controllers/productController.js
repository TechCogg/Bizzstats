const knexConfig = require('../knexfile'); // Import knexfile configuration
const knex = require('knex')(knexConfig); // Initialize knex with the config
const fs = require('fs'); // File system module to read files

exports.createProduct = async (req, res) => {
    try {
        // Extract all required and optional fields from the request body
        const {
            productName,
            itemCode,
            businessLocation,
            alertQuantity,
            barcodeType,
            unit,
            brand,
            category,
            subCategory,
            description
        } = req.body;

        const productImage = req.file; // Get the uploaded image file

        let base64Image = null;

        if (productImage) {
            // Convert image file to Base64
            base64Image = fs.readFileSync(productImage.path).toString('base64');
        }

        // Validate required fields
        if (!productName || !itemCode) {
            return res.status(400).json({
                message: "productName and itemCode are required fields",
            });
        }

        // Prepare the product data for insertion
        const productData = {
            productName,
            itemCode,
            businessLocation: businessLocation || null, // Optional field
            alertQuantity: alertQuantity || null, // Optional field
            barcodeType: barcodeType || null, // Optional field
            unit: unit || null, // Optional field
            brand: brand || null, // Optional field
            category: category || null, // Optional field
            subCategory: subCategory || null, // Optional field
            description: description || null, // Optional field
            productImage: base64Image || null, // Optional field
        };

        // Insert the product data into the database
        await knex("products").insert(productData);

        res.status(201).json({ message: "Product created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating product", error });
    }
};



// Other CRUD operations (get, update, delete) remain unchanged
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
