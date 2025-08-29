const Review = require('../entidades/review');
const Filme = require('../entidades/filme');
const controllerFilme = require('./filmeController');

let reviews = [];

function getReviewById(id) {
  return reviews.find(r => r.getId() == id);
}

function lerReview (req, res){
  const idReview = parseInt(req.params.id);
  const review = getReviewById(idReview);

  if (!review) {
    return res.status(404).json({ erro: "Review não encontrado" });
  }

  return res.status(200).json(review);
};

function criaReview (req, res){
    const {titulo, texto, idfilme} = req.body;

    if(!titulo || !texto || !idfilme){
        return res.status(400).json({ erro: "Campos obrigatórios faltando" });
    }

    const filme = controllerFilme.getFilmeById(idfilme)
    if (!filme) {
        return res.status(404).json({ erro: "Filme não encontrado" });
    }

    const review = new Review(titulo, texto, idfilme);
    filme.adicionaReview(review);
    reviews.push(review);

    return res.status(201).json(filme);
}

function atualizaReview (req, res){
    const idReview = parseInt(req.params.id);
    const review = getReviewById(idReview);
    if (!review) {
        return res.status(404).send('Review não encontrado');
    }
    const {titulo, texto, idfilme} = req.body;

    if(titulo){review.setTitulo(titulo);}
    if(texto){review.setTexto(texto);}
    if(idfilme){
        const filmeIni = getFilmeById(review.getIdFilme());
        filmeIni.removeReview(review.getId());
        review.setIdFilme(idfilme);
        const filmeFin = getFilmeById(review.getIdFilme());
        filmeFin.adicionaReview(review);
    }

    return res.status(200).json(review);
}

function deletaReview (req, res){
    const idReview = parseInt(req.params.id);
    const review = getReviewById(idReview);
    if (!review) {
        return res.status(404).send('Review não encontrado');
    }

    const filme = getFilmeById(review.getIdFilme())
    filme.removeReview(review.getId());

    reviews = reviews.filter(r => r !== review);

    return res.status(200).json("Review deletado com sucesso.")
}

function listaReviews (req, res){
    return res.status(200).json(reviews);
}

module.exports = {getReviewById, lerReview, criaReview, atualizaReview, deletaReview, listaReviews};