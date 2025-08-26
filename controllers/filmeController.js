const Filme = require('../entidades/filme');

let filmes = [];

function getFilmeById(id) {
  return filmes.find(f => f.getId() == id);
}

function lerFilme (req, res){
  const idFilme = parseInt(req.params.id);
  const filme = getFilmeById(idFilme);

  if (!filme) {
    return res.status(404).json({ erro: "Filme não encontrado" });
  }

  return res.status(200).json(filme);
};

function criaFilme (req, res){
    const {titulo, descricao, diretor, ano, genero} = req.body;

    if(!titulo || !descricao || !diretor || !ano || !genero){
        return res.status(400).json({ erro: "Campos obrigatórios faltando" });
    }
    const filme = new Filme(titulo, descricao, diretor, ano, genero);

    filmes.push(filme);

    return res.status(201).json(filme);
}

function atualizaFilme (req, res){
    const idFilme = parseInt(req.params.id);
    const filme = getFilmeById(idFilme);
    if (!filme) {
        return res.status(404).send('Filme não encontrado');
    }
    const {titulo, descricao, diretor, ano, genero} = req.body;

    if(titulo){filme.setTitulo(titulo);}
    if(descricao){filme.setDescricao(descricao);}
    if(diretor){filme.setDiretor(diretor);}
    if(ano){filme.setAno(ano);}
    if(genero){filme.setGenero(genero);}

    return res.status(200).json(filme);
}

function deletaFilme (req, res){
    const idFilme = parseInt(req.params.id);
    const filme = getFilmeById(idFilme);
    if (!filme) {
        return res.status(404).send('Filme não encontrado');
    }

    filmes = filmes.filter(f => f !== filme);

    return res.status(200).json("Filme deletado com sucesso.")
}

function listaFilmes (req, res){
    return res.status(200).json(filmes);
}

module.exports = {getFilmeById, lerFilme, criaFilme, atualizaFilme, deletaFilme, listaFilmes};