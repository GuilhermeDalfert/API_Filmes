const Review = require('../entidades/review');
const Filme = require('../entidades/filme');
const controllerFilme = require('./filmeController');

let reviews = [];

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