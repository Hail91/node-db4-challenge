
exports.seed = function(knex) {
  return knex('recipes').insert([
    {name: 'Barbecue Chicken'},
    {name: 'Broccoli and Chicken Alfredo'}
  ]);   
};
