
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', table => {
        table.increments();

        table.string('project_name', 225)
            .notNullable();

        table.text('description');

        table.boolean('completed').defaultTo(false);
    })
    .createTable('tasks', table => {
        table.increments();

        table.text('description')
            .notNullable();

        table.text('notes');

        table.boolean('completed').defaultTo(false);

        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate("CASCADE");
    })
    .createTable('resources', table => {
        table.increments();

        table.string('name', 225)
            .notNullable()
            .unique();

        table.text('description');
    })
    .createTable('project_resources', table => {
        table.primary(['project_id', 'resource_id']);

        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        table.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects');
};
