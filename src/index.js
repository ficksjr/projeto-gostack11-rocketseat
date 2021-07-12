const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
  return response.json([
    "project 1",
    "project 2"]);
});

app.post('/projects/', (request, response) => {
  return response.json([
    "project 1",
    "project 2", 
    "project 3"]);
});

app.put('/projects/:id', (request, response) => {
  return response.json([
    "project 1",
    "project 2", 
    "project 4"]);
});

app.delete('/projects/:id', (request, response) => {
  return response.json([
    "project 1",
    "project 2",]);
});

port = 3333;

app.listen(port, () => {console.log('Server is listening on port '+ port)}); 