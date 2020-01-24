exports.seed = function(knex) {
  return knex('instructions').insert([
    {recipe_id: 1, instruction: 'Barbecue the god damn chicken'},
    {recipe_id: 2, instruction: 'Cook the god damn Pasta'}
  ]);  
};
