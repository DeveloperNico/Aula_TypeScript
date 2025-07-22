import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function forca(palavras: string[], tentativas: number) {
    const palavra = palavras[Math.floor(Math.random() * palavras.length)].toLowerCase();
    let palavraEscondida = Array(palavra.length).fill("_");
    let tentativasRestantes = tentativas;
    let letrasUsadas = new Set<string>();

    console.log("Seja bem-vindo ao jogo da forca!");
    console.log("Dica: nomes");
    console.log(palavraEscondida.join(" "));

    function perguntar() {
        rl.question("Digite uma letra: ", (letraInput) => {
            const letra = letraInput.toLowerCase();

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
                for (let i = 0; i < palavra.length; i++) {
                    if (palavra[i] === letra) {
                        palavraEscondida[i] = letra;
                    }
                }
                console.log("Boa! Letra correta.");
            } else {
                tentativasRestantes--;
                console.log(`Letra incorreta! Você tem mais ${tentativasRestantes} tentativas.`);
            }

            console.log(palavraEscondida.join(" "));

            if (!palavraEscondida.includes("_")) {
                console.log("Parabéns! Você ganhou!");
                rl.close();
            } else if (tentativasRestantes <= 0) {
                console.log(`Fim de jogo! Você perdeu. A palavra era: ${palavra}`);
                rl.close();
            } else {
                perguntar();
            }
        });
    }

    perguntar();
}

const palavras = ["Nicolas", "Ariane", "Gabi", "João", "Joyce", "Geovanna", "Thifs"];
const tentativas = 6;

forca(palavras, tentativas);