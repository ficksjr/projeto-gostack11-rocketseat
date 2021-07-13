const express = require('express');

const app = express();

app.use(express.json());

app.get('/projects', (request, response) => {
  return response.json([
    "project 1",
    "project 2"]);
});

app.post('/projects/', (request, response) => {
const body = request.body
  return response.json({body});
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