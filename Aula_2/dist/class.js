"use strict";
class Aluno {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}
const aluno1 = new Aluno("Nicolas", 19);
console.log(aluno1.apresentar());
