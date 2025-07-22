interface IAluno {
    nome: string;
    idade: number;
}

class Aluno implements IAluno{
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`
    }
}

const aluno1 = new Aluno("Nicolas", 19);

console.log(aluno1.apresentar());