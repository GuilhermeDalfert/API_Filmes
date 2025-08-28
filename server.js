const express = require('express');
const app = express();
const PORT = 8080;
const filmeRoutes = require('./routes/filmeRouter');

app.use(express.json());
app.use('/', filmeRoutes);

app.listen(8080, () => {
  console.log('Servidor rodando em http://localhost:8080');
});

