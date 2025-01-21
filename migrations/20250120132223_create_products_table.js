exports.up = function (knex) {
    return knex.schema.createTable('products', function (table) {
        table.increments('id').primary(); // Auto-incremented ID
        table.string('product_name').notNullable(); // Name of the product
        table.string('item_code').notNullable(); // Item code
        table.string('business_location'); // Business location
        table.integer('alert_quantity'); // Alert quantity
        table.string('barcode_type'); // Barcode type
        table.string('unit'); // Unit
        table.integer('brand_id')
        table.integer('category_id')
        table.integer('subcategory_id')
        table.string('product_image'); // Product image file path
        table.text('product_description'); // Product description
        table.string('product_brochure'); // Brochure file path
        table.timestamps(true, true); // Timestamps (created_at and updated_at)
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('products');
};
