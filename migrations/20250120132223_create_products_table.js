exports.up = function (knex) {
    return knex.schema.createTable('products', function (table) {
        table.increments('id').primary(); // Auto-incremented ID
        table.string('productName').notNullable(); // Name of the product
        table.string('itemCode').notNullable(); // Item code
        table.string('businessLocation'); // Business location
        table.integer('alertQuantity'); // Alert quantity
        table.string('barcodeType'); // Barcode type
        table.string('unit'); // Unit
        table.string('brand')
        table.string('category')
        table.integer('subCategory')
        table.string('productImage'); // Product image file path
        table.text('description'); // Product description
        table.string('brochureFile'); // Brochure file path
        // table.timestamps(true, true); // Timestamps (created_at and updated_at)
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('products');
};
