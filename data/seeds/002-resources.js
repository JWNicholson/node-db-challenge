
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('resources').insert([
    {name: 'Paper', description: 'use for rough planning of apps'},
    {name: 'Pencil', description: 'used to make lines on paper'},
    {name: 'Desktop PC', description: 'Cheaper than MAC'},
    {name: 'Mouse', description: 'make computer pointer move and select things'},
    {name: 'Wireless headset', description: 'Great for freedom to move about and still hear media'},
  ]);
};
