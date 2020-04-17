
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('tasks').insert([
   
    {description: 'Task description 1', notes: 'Frauen', project_id: '1'},
    {description: 'Task description 2', notes: 'Tschuess', project_id: '2'},
    {description: 'Task description 3', notes: 'bis spaetta', project_id: '3'},
    {description: 'Task description 4', notes: 'Alles klar', project_id: '4'},
    {description: 'Task description 5', notes: 'Zeueg', project_id: '3'},
    {description: 'Task description 5', notes: 'Zeueg', project_id: '2'},
    {description: 'Task description 5', notes: 'Zeueg', project_id: '4'},
    {description: 'Task description 5', notes: 'Zeueg', project_id: '3'}

  ]);
};
