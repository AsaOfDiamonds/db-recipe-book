
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'cheese'},
        { name: 'tuna'},
        { name: 'bread'},
        { name: 'unagi' },
        { name: 'rice' },
        { name: 'avocado' },
        { name: 'tomato' },
        { name: 'spinach' },
        { name: 'milk' },
        { name: 'lox' },
        { name: 'cream cheese' },
        { name: 'turkey bacon' }
      ]);
    });
};
