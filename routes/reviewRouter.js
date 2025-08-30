const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const Review = require('../entidades/review');

router.get('/reviews', reviewController.listaReviews);
router.get('/reviews/:id', reviewController.lerReview);
router.put('/reviews/:id', reviewController.atualizaReview);
router.post('/reviews', reviewController.criaReview);
router.delete('/reviews/:id', reviewController.deletaReview);

module.exports = router;