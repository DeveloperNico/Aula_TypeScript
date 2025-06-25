function forca(palavras, tentativas) {
    for (var i = 0; i <= tentativas; i++) {
        console.log("Seja bem-vindo ao jogo da forca!");
        console.log("Tente acertar a palvra! Dica: tecnologias");
    }
    ;
    var nome = prompt("Testando, digite seu nome: ");
    return "Deu certo, seu nome é: " + nome;
}
;
var palavras = ["Typescript", "React", "Angular", "Python", "Java", "JavaScript"];
var tentativas = 3;
console.log(forca(palavras, tentativas));
