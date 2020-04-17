mWorkflow for using knex and seeds with database app

Add dependcies & folders
    npm init -y
	npm i nodemon express sqlite3 knex knex-cleaner
	
	knex init
	
	touch index.js server.js
	
	mkdir data projects
	
	data -> db-config 
	projects -> projects-model  projects-router

Add migration tables
	knex migrate:make create-projects-table

Add seeds
	knex seed:make 00-cleanup
				   01-projects
				   02-resources
				   03-tasks
				   04-project-resources
	
Create server & db-config
index.js and server.js db-config.js
Crud routes
********Projects**********
//GET 
	getProjects(); /projects
	getProjectsById(); /projects:id
	

	
//POST
	/projects
	
	******Tasks*********

	getTasks(); /tasks
	getTaskById(); /tasks/:id
	getProjectTasks(); /projects/:id/tasks

	addTask(); /projects/:id/tasks
******Resources*********
	getResources(); /resources
	getResourcesById(); /resources/:id
	addResource(); /resources

Fill in seeds

Load up
	knex migrate:latest
	
	knex seed:run
