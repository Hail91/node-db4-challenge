
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {name: 'Pound of Chicken'},
    {name: 'half a pound of Broccoli'},
    {name: '2 cups Heavy Cream'},
    {name: 'two teaspoons Salt'},
    {name: '1 teaspoon of Pepper'},
    {name: '1 cup of Butter'}
  ])  
};
