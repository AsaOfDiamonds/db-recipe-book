
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        { name: 'tex-mex tacos'},
        { name: 'granny tuna roll'},
        { name: 'cheese pizza'},
        { name: 'Avocado Smoothie' },
        { name: 'cream cheese and lox' },
        { name: 'turkey bacon omelet' },
      ]);
    });
};
