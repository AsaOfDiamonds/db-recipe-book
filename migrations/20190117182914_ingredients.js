
exports.up = function(knex, Promise) {
    // make changes to our database
    return knex.schema.createTable('ingredients', function (tbl) {
        // primary key
        tbl
            .increments() // defaults to a column named id
            .primary()
            .notNullable();

        // other fields
        tbl
            .string('name', 255)
            .notNullable();

        // timestamps
        tbl.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
    // rollback/undo the changes
    return knex.schema.dropTableIfExists('ingredients');
};
