const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

//Projects//

//GET all projects
router.get('/projects', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Could not get projects.' });
        })
});

//Get by Id
router.get('/projects/:id', (req, res) => {
    const {id} = req.params;

    Projects.getProjectById(id)
        .then(project => {
            if(project) {
                res.status(200).json(project)
            } else {
                res.status(404).json({ message: 'Could not find a project with that id.' });
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Could not get projects.' })
        })
});

//Add project
router.post('/projects', (req, res) => {
    Projects.addProject(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Could not add the project' });
        })
});

//Tasks//

//Get all tasks
router.get('/tasks', (req, res) => {
    Projects.getAllTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Could not get the tasks.' });
        })
});

//Get by Id
router.get('/tasks/:id', (req, res) => {
    const {id} = req.params;

    Projects.getTaskById(id)
        .then(task => {
            res.status(200).json(task)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Could not get the tasks.'});
        })
});

//Get a projects tasks
router.get('/projects/:id/tasks', (req, res) => {
    const {id} = req.params;

    Projects.getProjectById(id)
        .then(project => {
            if(project) {
                Projects.getProjectTasks(id)
                    .then(tasks => {
                        if(tasks.length === 0) {
                            res.status(200).json({ message: 'There arent any tasks.'});
                        } else {
                            res.status(200).json(tasks)
                        }
                    })
                    .catch(err => {
                        console.log(err)
                        res.status(500).json({ error: 'Could not get the tasks.' });
                    })
            } else {
                res.status(404).json({ message: 'Could not find a project with that id.' });
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Could not get the project.' });
        })
});

//Add a task to project
router.post('/projects/:id/tasks', (req, res) => {
    req.body.project_id = req.params.id;

    Projects.addTask(req.params.id, req.body)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Could not get the task.' })
        })
});

//Resources//

//Get all resources
router.get('/resources', (req, res) => {
    Projects.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Could not get the resources.' })
        })
});

//Get by Id
router.get('/resources/:id', (req, res) => {
    const {id} = req.params;

    Projects.getResourceById(id)
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Could not get the resources.' })
        })
});

//Add resource
router.post('/resources', (req, res) => {
    Projects.addResource(req.body)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Could not add  the resource.' })
        })
});


module.exports = router;