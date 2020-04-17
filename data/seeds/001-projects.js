
exports.seed = function(knex) {
  // Deletes ALL existing entries
 
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'Start new Social Media platform', description: 'Create something which forces everyone to be nice'},
        {project_name: 'Create new React project', description: 'Make weather, sports news, earthquake apps'},
        {project_name: 'Update VSCode', description: 'keeps everything working'},
        {project_name: 'Clean monitor', description: 'wipe it down properly'}
      ]);
    
};
