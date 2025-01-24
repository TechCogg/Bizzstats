exports.up = function (knex) {
    return knex.schema.createTable('products', function (table) {
        table.increments('id').primary(); // Auto-incremented ID
        table.string('productName').notNullable(); // Name of the product
        table.string('itemCode').notNullable(); // Item code
        table.string('businessLocation'); // Business location
        table.integer('alertQuantity'); // Alert quantity
        table.string('barcodeType'); // Barcode type
        table.string('unit'); // Unit of measurement
        table.string('brand'); // Product brand
        table.string('category'); // Product category
        table.integer('subCategory'); // Subcategory ID (if applicable)
        table.text('description'); // Product description
        table.text('productImage'); // Base64-encoded product image
        table.text('brochureFile'); // Base64-encoded brochure file (PDF)
        table.timestamps(true, true); // Timestamps (created_at, updated_at)
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('products');
};
