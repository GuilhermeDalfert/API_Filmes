const express = require('express');
const router = express.Router();
const filmeController = require('../controllers/filmeController');

router.get('/filmes', filmeController.listaFilmes);
router.get('/filmes/:id', filmeController.lerFilme);
router.put('/filmes/:id', filmeController.atualizaFilme);
router.post('/filmes', filmeController.criaFilme);
router.delete('/filmes/:id', filmeController.deletaFilme);

module.exports = router;