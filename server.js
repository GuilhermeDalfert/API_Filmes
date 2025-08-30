const express = require('express');
const app = express();
const PORT = 8080;
const filmeRoutes = require('./routes/filmeRouter');
const reviewRoutes = require('./routes/reviewRouter');

app.use(express.json());
app.use('/', filmeRoutes);
app.use('/', reviewRoutes);

app.listen(8080, () => {
  console.log('Servidor rodando em http://localhost:8080');
});

