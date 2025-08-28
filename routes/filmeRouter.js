const express = require('express');
const router = express.Router();
const filmeController = require('../controllers/filmeController');

router.get('/filmes', filmeController.listaFilmes);
router.get('/filmes/:id', filmeController.lerFilme);

router.post('/filmes', filmeController.criaFilme);

module.exports = router;