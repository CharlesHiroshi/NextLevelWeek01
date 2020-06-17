import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de usuários');
  response.send('Oi mundo velho!')
})

app.listen(3333);
