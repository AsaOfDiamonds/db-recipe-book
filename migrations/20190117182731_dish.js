
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dish', function (tbl) {
        // primary key
        tbl
            .increments() // defaults to a column named id
            .primary()
            .notNullable();

        // other fields
        tbl
            .string('name', 256)
            .notNullable();

        // timestamps
        tbl.timestamps(true, true);

        // constraints
        tbl.unique('name', 'uq_dish_name'); // makes name unique
    });
};

exports.down = function(knex, Promise) {
    // rollback/undo the changes
    return knex.schema.dropTableIfExists('dish');
};
