const express = require('express');

const app = express();

app.use(express.json());

const projects = [];

function checkProjectExists(req, res, next) {
  const { id } = req.params;

  if(!projects.find(e => e.id == id)) {
    return res.status(400).json({ 'message': 'Project not found'});
  } 

  return next();
}

function requestsLog(req, res, next) {
  console.count(`Total requests`);

  return next();
}

app.use(requestsLog);

app.get('/', (req, res) => {
  return res.json(projects);
});

app.post('/projects', (req, res) => {
  const { id, title } = req.body;
  const tasks = new Array();

  projects.push({ 
    id, 
    title, 
    tasks 
  });

  return res.json({ 
    'message': `${title} has been created`
  });
});

app.put('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const project = projects.find(e => e.id == id);
 
  const previousTitle = project.title;
  project.title = title;

  return res.json({ 
    "message": `${previousTitle} has changed to ${title}` 
  });
});

app.delete('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const project = projects.find(e => e.id == id);

  const index = projects.indexOf(project);
  projects.splice(index, 1);

  return res.json({ 
    'message': `${project.title} has been deleted` 
  });
});

app.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const project = projects.find(e => e.id == id);

  project.tasks.push(title);

  return res.json({ 
    'message': `${title} has been added to ${project.title}'s tasks` 
  });
});

app.listen(8000, () => {
  console.log("App is running");
});
