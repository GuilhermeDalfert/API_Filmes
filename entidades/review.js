const { gerarId } = require("./idGenerator");

class Review{

    constructor(titulo, texto, idfilme){
        this.id=gerarId();
        this.titulo=titulo;
        this.texto=texto;
        this.idfilme=idfilme;
    }

    getId(){return this.id;}

    getTitulo(){return this.titulo;}

    getTexto(){return this.texto;}

    getIdFilme(){return this.idfilme;}

    setTitulo(titulo){
        this.titulo=titulo;
    }

    setTexto(texto){
        this.texto=texto;
    }

    setIdFilme(idfilme){
        this.idfilme=idfilme;
    }
}

module.exports = Review;