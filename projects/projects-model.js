const db = require('../data/db-config');

const knex = require('knex');

module.exports = {
    getProjects,
    getProjectById,
    getAllTasks,
    getTaskById,
    getResources,
    getResourceById,
    getProjectTasks,
    addProject,
    addResource,
    addTask
}

//Projects
function getProjects() {
    return db('projects');
}

function getProjectById(id) {
    return db('projects')
        .where({id})
        .first();
}

function addProject(project) {
    return db('projects')
        .insert(project, 'id')
        .then(ids => {
            const [id] = ids;
            return getProjectById(id);
        })
}
//Tasks
function getAllTasks() {
    return db('tasks');
}

function getTaskById(id) {
    return db('tasks')
        .where({id})
        .first();
}

function addTask(project_id, task) {
    return db('tasks')
        .where({project_id})
        .insert(task, 'id')
        .then(ids => {
            const [id] = ids;
            return getTaskById(id)
        });
}

//Resources
function getResources(){
    return db('resources');
}

function getResourceById(id) {
    return db('resources')
        .where({id});
}

function getProjectTasks(project_id) {
    return db('tasks')
        .join('projects', 'tasks.project_id', 'projects.id')
        .select('projects.project_name', 
                'projects.description as project_description', 
                'tasks.description as task_description', 
                'tasks.notes as task_notes')
        .where({project_id: project_id});
}

function addResource(resource) {
    return db('resources')
        .insert(resource, 'id')
        .then(ids => {
            const [id] = ids;
            return getResourceById(id);
        });
}