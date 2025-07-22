var Aluno = /** @class */ (function () {
    function Aluno(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Aluno.prototype.apresentar = function () {
        return "Ol\u00E1, meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos.");
    };
    return Aluno;
}());
var aluno1 = new Aluno("Nicolas", 19);
console.log(aluno1.apresentar());
