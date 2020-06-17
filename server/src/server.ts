import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de usuários');
  response.json([
    'Charles',
    'Janete',
    'Thales',
    'Jean'
  ])
})

app.listen(3333);
