const express = require('express');

const projectsRouter = require('./projects/projects-router');

const server = express();

server.use(express.json());

server.use('./api', projectsRouter);

server.get('/', (req,res) => {
    res.send("<h1>This is the Node DB Sprint</h1>")
});

module.exports = server;

