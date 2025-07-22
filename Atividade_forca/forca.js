"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function forca(palavras, tentativas) {
    var palavra = palavras[Math.floor(Math.random() * palavras.length)].toLowerCase();
    var palavraEscondida = Array(palavra.length).fill("_");
    var tentativasRestantes = tentativas;
    var letrasUsadas = new Set();
    console.log("Seja bem-vindo ao jogo da forca!");
    console.log("Dica: nomes");
    console.log(palavraEscondida.join(" "));
    function perguntar() {
        rl.question("Digite uma letra: ", function (letraInput) {
            var letra = letraInput.toLowerCase();
            if (letra.length !== 1 || !letra.match(/[a-z]/i)) {
                console.log("Por favor, digite apenas uma letra válida.");
                return perguntar();
            }
            if (letrasUsadas.has(letra)) {
                console.log("Você já tentou essa letra. Tente outra.");
                return perguntar();
            }
            letrasUsadas.add(letra);
            if (palavra.includes(letra)) {
                for (var i = 0; i < palavra.length; i++) {
                    if (palavra[i] === letra) {
                        palavraEscondida[i] = letra;
                    }
                }
                console.log("Boa! Letra correta.");
            }
            else {
                tentativasRestantes--;
                console.log("Letra incorreta! Voc\u00EA tem mais ".concat(tentativasRestantes, " tentativas."));
            }
            console.log(palavraEscondida.join(" "));
            if (!palavraEscondida.includes("_")) {
                console.log("Parabéns! Você ganhou!");
                rl.close();
            }
            else if (tentativasRestantes <= 0) {
                console.log("Fim de jogo! Voc\u00EA perdeu. A palavra era: ".concat(palavra));
                rl.close();
            }
            else {
                perguntar();
            }
        });
    }
    perguntar();
}
var palavras = ["Nicolas", "Ariane", "Gabi", "João", "Joyce", "Geovanna", "Thifs"];
var tentativas = 6;
forca(palavras, tentativas);
