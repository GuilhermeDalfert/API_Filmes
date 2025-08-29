const Review = require("./review");

class Filme{
    static contador = 0;

    constructor(titulo, descricao, diretor, ano, genero){
        Filme.contador += 1;
        this.id = Filme.contador;
        this.titulo = titulo;
        this.descricao = descricao;
        this.diretor = diretor;
        this.ano = ano;
        this.genero = genero;
        this.listaReviews = [];
    }

    getId() {return this.id;}

    getTitulo() {return this.titulo;}

    getDescricao() {return this.descricao;}

    getDiretor() {return this.diretor;}

    getAno() {return this.ano;}

    getGenero() {return this.genero;}

    getListaReviews() {return this.listaReviews;}

    setTitulo(titulo) {
        this.titulo = titulo;
    }

    setDescricao(descricao) {
        this.descricao = descricao;
    }

    setDiretor(diretor) {
        this.diretor = diretor;
    }

    setAno(ano) {
        this.ano = ano;
    }

    setGenero(genero) {
        this.genero = genero;
    }

    adicionaReview(review){
        this.listaReviews.push(review);
    }

    removeReview(idreview){
        this.listaReviews = this.listaReviews.filter(r => r.getId() !== idreview);
    }
    
}

module.exports = Filme;