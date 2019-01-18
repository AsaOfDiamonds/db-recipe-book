
exports.up = function(knex, Promise) {
    // make changes to our database
    return knex.schema.createTable('recipe', function (tbl) {
        // primary key
        tbl
            .increments() // defaults to a column named id
            .primary()
            .notNullable();

        // foreign keys
        tbl
            .integer('dish_id')
            .unsigned();

        tbl
            .foreign('dish_id')
            .references('id')
            .inTable('dish');

        tbl
            .integer('ingredient_id')
            .unsigned();

        tbl
            .foreign('ingredient_id')
            .references('id')
            .inTable('ingredients');


        // other fields
        tbl
            .string('name', 255)
            .notNullable();

        tbl.integer('time');

        tbl.string('servings');

        // timestamps
        tbl.timestamps(true, true);



        // constraints
        tbl.unique('name', 'uq_recipe_name'); // makes name unique
    });
};
    
exports.down = function(knex, Promise) {
    // rollback/undo the changes
    return knex.schema.dropTableIfExists('recipe');
};
